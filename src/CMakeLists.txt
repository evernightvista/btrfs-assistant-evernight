include(ui/CMakeLists.txt)
include(model/CMakeLists.txt)
include(util/CMakeLists.txt)
include(widgets/CMakeLists.txt)

set_property(SOURCE main.cpp APPEND PROPERTY COMPILE_DEFINITIONS "VERSION=\"2.2\"")

set(btrfsassistant_SRCS
    main.cpp
    ${UI_SRC}
    ${MODEL_SRC}
    ${UTIL_SRC}
    ${WIDGETS_SRC}
    ${PROJECT_SOURCE_DIR}/icons/icons.qrc
)

file(GLOB TS_FILES ${PROJECT_SOURCE_DIR}/translations/*.ts)

if(Qt${QT_VERSION_MAJOR}LinguistTools_FOUND)
    qt6_create_translation(FILES_TS ${PROJECT_SOURCE_DIR}/src ${TS_FILES})
    message(STATUS "Using Qt LinguistTools for translation compilation")
else()
    set(FILES_TS ${TS_FILES})
    message(WARNING "Qt LinguistTools not found. Attempting to compile translations with lrelease.")
    find_program(LRELEASE_EXECUTABLE NAMES lrelease-qt6 lrelease6 lrelease)
    if(LRELEASE_EXECUTABLE)
        message(STATUS "Found lrelease: ${LRELEASE_EXECUTABLE}")
        foreach(TS_FILE ${TS_FILES})
            get_filename_component(QM_FILE ${TS_FILE} NAME_WE)
            set(QM_FILE ${CMAKE_CURRENT_BINARY_DIR}/${QM_FILE}.qm)
            add_custom_command(
                OUTPUT ${QM_FILE}
                COMMAND ${LRELEASE_EXECUTABLE} ${TS_FILE} -qm ${QM_FILE}
                DEPENDS ${TS_FILE}
                COMMENT "Compiling ${TS_FILE} to ${QM_FILE}"
            )
            list(APPEND FILES_TS ${QM_FILE})
        endforeach()
    else()
        message(WARNING "lrelease not found. Installing .ts files directly without compilation to .qm.")
    endif()
endif()

add_executable(btrfs-assistant-bin
    ${btrfsassistant_SRCS} ${FILES_TS}
)

# Install compiled .qm files if available, otherwise fall back to .ts files
set(QM_FILES ${FILES_TS})
list(FILTER QM_FILES INCLUDE REGEX "\\.qm$")
if(QM_FILES)
    install(FILES ${QM_FILES} DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/btrfs-assistant/translations)
else()
    install(FILES ${TS_FILES} DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/btrfs-assistant/translations)
endif()
install(FILES btrfs-assistant.conf DESTINATION ${CMAKE_INSTALL_FULL_SYSCONFDIR})
install(FILES btrfs-assistant.desktop DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/applications)
install(FILES btrfs-assistant.metainfo.xml DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/metainfo)
install(FILES org.btrfs-assistant.pkexec.policy DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/polkit-1/actions/)
install(FILES snapper.actions DESTINATION ${CMAKE_INSTALL_FULL_SYSCONFDIR}/dnf/libdnf5-plugins/actions.d/)
install(PROGRAMS btrfs-assistant DESTINATION ${CMAKE_INSTALL_BINDIR})
install(PROGRAMS btrfs-assistant-launcher DESTINATION ${CMAKE_INSTALL_BINDIR})
install(TARGETS btrfs-assistant-bin RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR})

# Find libbtrfsutil - try pkg-config first, then fall back to find_library
find_package(PkgConfig QUIET)
if(PkgConfig_FOUND)
    pkg_check_modules(BTRFSUTIL QUIET btrfsutil)
endif()

if(NOT BTRFSUTIL_FOUND)
    find_library(BTRFSUTIL_LIB
        NAMES btrfsutil
        PATHS /usr/lib64 /usr/lib /usr/lib/x86_64-linux-gnu /usr/lib/aarch64-linux-gnu
        PATH_SUFFIXES btrfsutil
    )
    find_path(BTRFSUTIL_INCLUDE_DIR
        NAMES btrfsutil.h
        PATHS /usr/include
    )
    if(BTRFSUTIL_LIB AND BTRFSUTIL_INCLUDE_DIR)
        set(BTRFSUTIL_FOUND TRUE)
        set(BTRFSUTIL_LIBRARIES ${BTRFSUTIL_LIB})
        set(BTRFSUTIL_INCLUDE_DIRS ${BTRFSUTIL_INCLUDE_DIR})
    endif()
endif()

if(NOT BTRFSUTIL_FOUND)
    message(FATAL_ERROR
        "libbtrfsutil not found. Please install btrfs-progs-devel (Fedora/RHEL) "
        "or libbtrfsutil-dev (Debian/Ubuntu)."
    )
endif()

message(STATUS "Found btrfsutil: libs=${BTRFSUTIL_LIBRARIES} includes=${BTRFSUTIL_INCLUDE_DIRS}")

target_include_directories(btrfs-assistant-bin PRIVATE ${BTRFSUTIL_INCLUDE_DIRS})
target_link_libraries(btrfs-assistant-bin PRIVATE Qt${QT_VERSION_MAJOR}::Widgets ${BTRFSUTIL_LIBRARIES})
target_compile_options(btrfs-assistant-bin PRIVATE -Wall -Wextra -Wconversion)

if(CMAKE_BUILD_TYPE STREQUAL "Debug")
    target_compile_options(btrfs-assistant-bin PRIVATE -Werror)
endif()
