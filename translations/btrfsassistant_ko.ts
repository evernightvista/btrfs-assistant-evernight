<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko">
<context>
    <name>Btrfs</name>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="115"></location>
        <source>Failed to create the snapshot</source>
        <translation>스냅샷 생성에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="380"></location>
        <source>You cannot restore to the root of the partition</source>
        <translation>파티션 루트로는 복원할 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="407"></location>
        <source>Failed to make a backup of target subvolume</source>
        <translation>대상 서브볼륨 백업에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="428"></location>
        <source>Failed to restore subvolume!</source>
        <translation>서브볼륨 복원에 실패했습니다!</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="429"></location>
        <source>Snapshot restore failed.  Please verify the status of your system before rebooting</source>
        <translation>스냅샷 복원에 실패했습니다. 재부팅 전에 시스템 상태를 확인하십시오</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="444"></location>
        <source>The restore was successful but the migration of the nested subvolumes failed</source>
        <translation>복원은 성공했지만 중첩된 서브볼륨 마이그레이션에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="445"></location>
        <source>Please migrate the those subvolumes manually</source>
        <translation>이러한 서브볼륨을 수동으로 마이그레이션하십시오</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="572"></location>
        <source>UUID </source>
        <translation>UUID </translation>
    </message>
</context>
<context>
    <name>BtrfsStatus</name>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="16"></location>
        <location filename="../src/util/BtrfsStatus.cpp" line="55"></location>
        <source>no stats available</source>
        <translation>사용 가능한 통계 없음</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="19"></location>
        <source>no errors found</source>
        <translation>오류가 없습니다</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="22"></location>
        <source>running</source>
        <translation>실행 중</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="25"></location>
        <source>finished</source>
        <translation>완료됨</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="28"></location>
        <source>canceled</source>
        <translation>취소됨</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="31"></location>
        <source>aborted</source>
        <translation>중단됨</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="34"></location>
        <source>interrupted</source>
        <translation>인터럽트됨</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="64"></location>
        <source>UUID:</source>
        <translation>UUID:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="65"></location>
        <source>Scrub started:</source>
        <translation>스크럽 시작 시간:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="66"></location>
        <source>Scrub resumed:</source>
        <translation>스크럽 재개 시간:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="67"></location>
        <source>Status:</source>
        <translation>상태:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="68"></location>
        <source>Duration:</source>
        <translation>소요 시간:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="69"></location>
        <source>Time left:</source>
        <translation>남은 시간:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="70"></location>
        <source>ETA:</source>
        <translation>예상 완료 시간:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="71"></location>
        <source>Total to scrub:</source>
        <translation>스크럽 대상 총량:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="72"></location>
        <source>Bytes scrubbed:</source>
        <translation>스크럽된 바이트 수:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="73"></location>
        <source>Rate:</source>
        <translation>속도:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="74"></location>
        <source>Error summary:</source>
        <translation>오류 요약:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="75"></location>
        <source>read_errors:</source>
        <translation>읽기 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="76"></location>
        <source>csum_errors:</source>
        <translation>체크섬 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="77"></location>
        <source>verify_errors:</source>
        <translation>검증 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="78"></location>
        <source>super_errors:</source>
        <translation>슈퍼블록 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="79"></location>
        <source>malloc_errors:</source>
        <translation>메모리 할당 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="80"></location>
        <source>uncorrectable_errors:</source>
        <translation>수정 불가 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="81"></location>
        <source>unverified_errors:</source>
        <translation>미검증 오류:</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="111"></location>
        <source>No balance operation found on %1</source>
        <translation>%1에서 밸런스 작업을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="116"></location>
        <source>Balance operation on %1 is running</source>
        <translation>%1의 밸런스 작업이 실행 중입니다</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="121"></location>
        <source>Balance operation on %1 is paused</source>
        <translation>%1의 밸런스 작업이 일시 중지되었습니다</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="126"></location>
        <source>Done, relocated %1 of %2 chunks</source>
        <translation>완료, %2개 중 %1개의 청크를 재배치했습니다</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="131"></location>
        <source>%1 of about %2 chunks balanced (%3 considered), %4% left</source>
        <translation>약 %2개 중 %1개의 청크 밸런싱 완료 (%3개 확인), 남은 %4%</translation>
    </message>
</context>
<context>
    <name>Cli</name>
    <message>
        <location filename="../src/ui/Cli.cpp" line="34"></location>
        <location filename="../src/ui/Cli.cpp" line="52"></location>
        <source>You must run this application as root</source>
        <translation>이 애플리케이션은 root로 실행해야 합니다</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="61"></location>
        <source>Failed to parse snapshot list</source>
        <translation>스냅샷 목록 구문 분석에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="69"></location>
        <source>This is not a snapshot that can be restored by this application</source>
        <translation>이 스냅샷은 이 애플리케이션으로 복원할 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="78"></location>
        <source>Source snapshot not found</source>
        <translation>소스 스냅샷을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="83"></location>
        <source>Snapshot subvolume not found</source>
        <translation>스냅샷 서브볼륨을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="92"></location>
        <source>Target not found</source>
        <translation>대상을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="96"></location>
        <source>Restoring snapshot %1</source>
        <translation>스냅샷 %1 복원 중</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="103"></location>
        <source>Snapshot restoration complete.</source>
        <translation>스냅샷 복원이 완료되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="104"></location>
        <source>A copy of the original subvolume has been saved as </source>
        <translation>원본 서브볼륨의 복사본이 다음 이름으로 저장되었습니다: </translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="105"></location>
        <source>Please reboot immediately
</source>
        <translation>지금 즉시 재부팅하십시오
</translation>
    </message>
</context>
<context>
    <name>DiffViewer</name>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="14"></location>
        <source>Dialog</source>
        <translation>대화 상자</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="83"></location>
        <source>Select a snapshot from the left to see the diff</source>
        <translation>차이를 보려면 왼쪽에서 스냅샷을 선택하십시오</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="116"></location>
        <source>Restore</source>
        <translation>복원</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="123"></location>
        <source>Close</source>
        <translation>닫기</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="14"></location>
        <source>Diff Viewer</source>
        <translation>차이 뷰어</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="29"></location>
        <source>Confirm</source>
        <translation>확인</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="29"></location>
        <source>Are you sure you want to restore this the file over the current file?</source>
        <translation>현재 파일을 이 파일로 덮어써서 복원하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="38"></location>
        <source>Restore Failed</source>
        <translation>복원 실패</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="38"></location>
        <source>The file failed to restore</source>
        <translation>파일 복원에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="42"></location>
        <source>Restore File</source>
        <translation>파일 복원</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="42"></location>
        <source>The file was successfully restored</source>
        <translation>파일이 성공적으로 복원되었습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="63"></location>
        <source>Num</source>
        <comment>The number associated with a snapshot</comment>
        <translation>번호</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="64"></location>
        <source>Date/Time</source>
        <translation>날짜/시간</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="65"></location>
        <source>Root Path</source>
        <translation>루트 경로</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="66"></location>
        <source>File Path</source>
        <translation>파일 경로</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="121"></location>
        <source>There are no differences between the selected files</source>
        <translation>선택한 파일 간에 차이가 없습니다</translation>
    </message>
</context>
<context>
    <name>FileBrowser</name>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="14"></location>
        <source>Dialog</source>
        <translation>대화 상자</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="70"></location>
        <source>Show Diff</source>
        <translation>차이 표시</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="83"></location>
        <location filename="../src/ui/FileBrowser.cpp" line="93"></location>
        <location filename="../src/ui/FileBrowser.cpp" line="113"></location>
        <source>Restore File</source>
        <translation>파일 복원</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="96"></location>
        <source>Close</source>
        <translation>닫기</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="41"></location>
        <source>Snapshot File Viewer</source>
        <translation>스냅샷 파일 뷰어</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="53"></location>
        <source>File Viewer</source>
        <translation>파일 뷰어</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="70"></location>
        <source>Diff File</source>
        <translation>파일 비교</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="71"></location>
        <source> is a directory, only files can be diffed</source>
        <translation> 는 디렉터리입니다. 파일만 비교할 수 있습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="94"></location>
        <source> is a directory, only files can be restored</source>
        <translation> 는 디렉터리입니다. 파일만 복원할 수 있습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="98"></location>
        <source>Confirm</source>
        <translation>확인</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="98"></location>
        <source>Are you sure you want to restore this the file over the current file?</source>
        <translation>현재 파일을 이 파일로 덮어써서 복원하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="109"></location>
        <source>Restore Failed</source>
        <translation>복원 실패</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="109"></location>
        <source>The file failed to restore</source>
        <translation>파일 복원에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="113"></location>
        <source>The file was successfully restored</source>
        <translation>파일이 성공적으로 복원되었습니다</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="14"></location>
        <source>BTRFS-Assistant</source>
        <translation>Btrfs 도우미</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="31"></location>
        <source>Overview</source>
        <translation>개요</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="67"></location>
        <location filename="../src/ui/MainWindow.ui" line="1577"></location>
        <source>Scrub</source>
        <translation>스크럽</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="108"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Perform scrub on device.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;디바이스에서 스크럽을 수행합니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="111"></location>
        <location filename="../src/ui/MainWindow.ui" line="195"></location>
        <location filename="../src/ui/MainWindow.cpp" line="159"></location>
        <location filename="../src/ui/MainWindow.cpp" line="179"></location>
        <source>Start</source>
        <translation>시작</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="126"></location>
        <source>No scrub ran.</source>
        <translation>스크럽이 아직 실행되지 않았습니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="151"></location>
        <location filename="../src/ui/MainWindow.ui" line="1503"></location>
        <source>Balance</source>
        <translation>밸런스</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="192"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Perform full balance on device.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;디바이스에서 전체 밸런스를 수행합니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="214"></location>
        <source>No balance ran.</source>
        <translation>밸런스가 아직 실행되지 않았습니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="236"></location>
        <source>Internal Filesystem Statistics</source>
        <translation>내부 파일 시스템 통계</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="242"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Utilization percentage of system chunks in the allocated space.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;할당된 공간에서 시스템 청크의 활용률입니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="252"></location>
        <source>Data:</source>
        <translation>데이터:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="259"></location>
        <source>Metadata:</source>
        <translation>메타데이터:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="266"></location>
        <source>System:</source>
        <translation>시스템:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="273"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Utilization percentage of metadata chunks in the allocated space.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;할당된 공간에서 메타데이터 청크의 활용률입니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="283"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Utilization percentage of file data chunks in the allocated space.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;할당된 공간에서 파일 데이터 청크의 활용률입니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="302"></location>
        <source>Information</source>
        <translation>정보</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="308"></location>
        <source>Used:</source>
        <translation>사용됨:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="315"></location>
        <location filename="../src/ui/MainWindow.ui" line="392"></location>
        <source>Estimate of the amount of data that can still be written to this FS, based on the current usage profile.</source>
        <translation>현재 사용 프로필을 기반으로 이 파일 시스템에 여전히 쓸 수 있는 데이터 양의 추정치입니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="325"></location>
        <location filename="../src/ui/MainWindow.ui" line="402"></location>
        <source>Minimum amount of data that you can expect to be able to get onto the filesystem. </source>
        <translation>파일 시스템에 쓸 수 있을 것으로 예상되는 최소 데이터 양입니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="345"></location>
        <source>Allocated:  </source>
        <translation>할당됨: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="359"></location>
        <source>Filesystem Size: </source>
        <translation>파일 시스템 크기: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="395"></location>
        <source>Free (Estimated): </source>
        <translation>여유 공간(예상): </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="405"></location>
        <source>Free (Minimum): </source>
        <translation>여유 공간(최소): </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="421"></location>
        <source>Volume Selection</source>
        <translation>볼륨 선택</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="427"></location>
        <source>Filesystem:</source>
        <translation>파일 시스템:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="463"></location>
        <source>Enable Quotas</source>
        <translation>할당량 활성화</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="470"></location>
        <source>Refresh Btrfs Data</source>
        <translation>Btrfs 데이터 새로 고침</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="485"></location>
        <source>Subvolumes</source>
        <translation>서브볼륨</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="523"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Include children subvolumes of .snapshots and timeshift folders.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;.snapshots 및 timeshift 폴더의 하위 서브볼륨을 포함합니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="526"></location>
        <source>Include Timeshift and Snapper Snapshots</source>
        <translation>Timeshift 및 Snapper 스냅샷 포함</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="536"></location>
        <source>Include Container Subvolumes</source>
        <translation>컨테이너 서브볼륨 포함</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="557"></location>
        <source>Filter...</source>
        <translation>필터...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="583"></location>
        <source>Restore Backup</source>
        <translation>백업 복원</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="603"></location>
        <location filename="../src/ui/MainWindow.ui" line="905"></location>
        <source>Browse</source>
        <translation>찾아보기</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="623"></location>
        <location filename="../src/ui/MainWindow.ui" line="786"></location>
        <location filename="../src/ui/MainWindow.ui" line="1070"></location>
        <source>Delete</source>
        <translation>삭제</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="643"></location>
        <location filename="../src/ui/MainWindow.ui" line="812"></location>
        <location filename="../src/ui/MainWindow.ui" line="951"></location>
        <source>Refresh</source>
        <translation>새로 고침</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="690"></location>
        <location filename="../src/ui/MainWindow.cpp" line="871"></location>
        <source>Snapper</source>
        <translation>Snapper</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="712"></location>
        <source>New/Delete</source>
        <translation>새로 만들기/삭제</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="733"></location>
        <location filename="../src/ui/MainWindow.ui" line="1040"></location>
        <source>Select config: </source>
        <translation>구성 선택: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="766"></location>
        <location filename="../src/ui/MainWindow.ui" line="1063"></location>
        <source>New</source>
        <translation>새로 만들기</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="849"></location>
        <source>Browse/Restore</source>
        <translation>찾아보기/복원</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="870"></location>
        <source>Select target: </source>
        <translation>대상 선택: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="925"></location>
        <source>Restore</source>
        <translation>복원</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="992"></location>
        <source>Snapper Settings</source>
        <translation>Snapper 설정</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1090"></location>
        <source>Save</source>
        <translation>저장</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1100"></location>
        <location filename="../src/ui/MainWindow.ui" line="1163"></location>
        <source>Config Information</source>
        <translation>구성 정보</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1106"></location>
        <location filename="../src/ui/MainWindow.ui" line="1169"></location>
        <source>Config name: </source>
        <translation>구성 이름: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1133"></location>
        <location filename="../src/ui/MainWindow.ui" line="1196"></location>
        <source>Backup path: </source>
        <translation>백업 경로: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1232"></location>
        <source>Snapshot Retention</source>
        <translation>스냅샷 보존 정책</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1238"></location>
        <location filename="../src/ui/MainWindow.ui" line="1261"></location>
        <location filename="../src/ui/MainWindow.ui" line="1275"></location>
        <location filename="../src/ui/MainWindow.ui" line="1282"></location>
        <location filename="../src/ui/MainWindow.ui" line="1353"></location>
        <source>Save: </source>
        <translation>보존: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1251"></location>
        <location filename="../src/ui/MainWindow.ui" line="1289"></location>
        <source>Timeline snapshots are taken hourly, the cleanup job reduces the snapshots in accordance with the below settings</source>
        <translation>타임라인 스냅샷은 매시간 생성되며 정리 작업은 아래 설정에 따라 스냅샷 수를 줄입니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1254"></location>
        <source>Enable timeline snapshots</source>
        <translation>타임라인 스냅샷 활성화</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1268"></location>
        <source>Daily</source>
        <translation>매일</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1308"></location>
        <source>Yearly</source>
        <translation>매년</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1315"></location>
        <source>Monthly</source>
        <translation>매월</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1325"></location>
        <source>Hourly</source>
        <translation>매시간</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1332"></location>
        <source>Weekly</source>
        <translation>매주</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1339"></location>
        <source>Save:</source>
        <translation>보존:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1346"></location>
        <source>Number</source>
        <translation>개수</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1382"></location>
        <source>systemd Unit Settings</source>
        <translation>systemd 유닛 설정</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1388"></location>
        <source>Snapper timeline enabled</source>
        <translation>Snapper 타임라인 활성화</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1401"></location>
        <source>Snapper cleanup enabled</source>
        <translation>Snapper 정리 활성화</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1414"></location>
        <source>Snapper boot enabled</source>
        <translation>Snapper 부팅 스냅샷 활성화</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1433"></location>
        <source>Apply systemd changes</source>
        <translation>systemd 변경 사항 적용</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1461"></location>
        <source>Btrfs maintenance</source>
        <translation>Btrfs 유지보수</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1531"></location>
        <location filename="../src/ui/MainWindow.ui" line="1621"></location>
        <location filename="../src/ui/MainWindow.ui" line="1695"></location>
        <source>Frequency: </source>
        <translation>빈도: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1541"></location>
        <location filename="../src/ui/MainWindow.ui" line="1628"></location>
        <location filename="../src/ui/MainWindow.ui" line="1702"></location>
        <source>Select All</source>
        <translation>모두 선택</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1548"></location>
        <location filename="../src/ui/MainWindow.ui" line="1635"></location>
        <location filename="../src/ui/MainWindow.ui" line="1709"></location>
        <source>Mountpoints: </source>
        <translation>마운트 지점: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1651"></location>
        <source>Defrag</source>
        <translation>조각 모음</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1747"></location>
        <source>Reset</source>
        <translation>재설정</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1767"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Update Btrfs Maintenance config file and call service to load new settings.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Btrfs Maintenance 구성 파일을 업데이트하고 서비스를 호출하여 새 설정을 로드합니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1770"></location>
        <source>Apply</source>
        <translation>적용</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="59"></location>
        <source>The application must be run as the superuser(root)</source>
        <translation>이 애플리케이션은 슈퍼유저(root)로 실행해야 합니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="87"></location>
        <source>Error</source>
        <translation>오류</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="318"></location>
        <source>You have lots of free space, did you overbuy?</source>
        <translation>여유 공간이 많습니다. 너무 크게 구입하셨나요?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="320"></location>
        <source>Situation critical!  Time to delete some data or buy more disk</source>
        <translation>위험한 상황입니다! 데이터를 삭제하거나 더 큰 디스크를 구입할 때입니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="322"></location>
        <source>Your disk space is well utilized</source>
        <translation>디스크 공간이 잘 활용되고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="374"></location>
        <location filename="../src/ui/MainWindow.cpp" line="424"></location>
        <source>Number</source>
        <comment>The number associated with a snapshot</comment>
        <translation>개수</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="375"></location>
        <location filename="../src/ui/MainWindow.cpp" line="428"></location>
        <source>Date/Time</source>
        <translation>날짜/시간</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="376"></location>
        <location filename="../src/ui/MainWindow.cpp" line="429"></location>
        <source>Type</source>
        <translation>유형</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="377"></location>
        <source>Cleanup</source>
        <translation>정리</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="378"></location>
        <location filename="../src/ui/MainWindow.cpp" line="431"></location>
        <source>Description</source>
        <translation>설명</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="426"></location>
        <source>Subvolume</source>
        <translation>서브볼륨</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="542"></location>
        <source>This is not a snapshot that can be restored by this application</source>
        <translation>이 스냅샷은 이 애플리케이션으로 복원할 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="552"></location>
        <source>Snapshot subvolume not found</source>
        <translation>스냅샷 서브볼륨을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="562"></location>
        <source>Target not found</source>
        <translation>대상을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="568"></location>
        <source>Warning subvolid mount detected!</source>
        <translation>경고: subvolid 마운트가 감지되었습니다!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="569"></location>
        <source>It appears you are currently mounting by subvolid.  Doing a restore in this case may not produce the expected outcome.  It is highly recommended you switch to mounting by subvolume path before proceeding!</source>
        <translation>현재 subvolid로 마운트하고 있는 것 같습니다. 이 경우 복원을 수행하면 예상한 결과가 나오지 않을 수 있습니다. 계속하기 전에 서브볼륨 경로로 마운트하는 것을 강력히 권장합니다!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="574"></location>
        <source>Are you sure you want to restore </source>
        <translation>복원하시겠습니까 </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="574"></location>
        <source> to </source>
        <comment>as in from/to</comment>
        <translation> → </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="588"></location>
        <source>Snapshot Restore</source>
        <translation>스냅샷 복원</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="589"></location>
        <source>Snapshot restoration complete.</source>
        <translation>스냅샷 복원이 완료되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="589"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1544"></location>
        <source>A copy of the original subvolume has been saved as </source>
        <translation>원본 서브볼륨의 복사본이 다음 이름으로 저장되었습니다: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="590"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1545"></location>
        <source>Please reboot immediately</source>
        <translation>지금 즉시 재부팅하십시오</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="788"></location>
        <source>No config selected</source>
        <translation>구성이 선택되지 않았습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="794"></location>
        <source>Please Confirm</source>
        <translation>확인하십시오</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="795"></location>
        <source>Are you sure you want to delete </source>
        <translation>삭제하시겠습니까 </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="795"></location>
        <source>This action cannot be undone</source>
        <translation>이 작업은 취소할 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="826"></location>
        <source>No btrfs subvolumes found</source>
        <translation>Btrfs 서브볼륨을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="852"></location>
        <source>Failed to save changes</source>
        <translation>변경 사항 저장에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="871"></location>
        <source>Changes saved</source>
        <translation>변경 사항이 저장되었습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="884"></location>
        <source>Please enter a valid name</source>
        <translation>유효한 이름을 입력하십시오</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="890"></location>
        <source>That name is already in use!</source>
        <translation>해당 이름은 이미 사용 중입니다!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="921"></location>
        <location filename="../src/ui/MainWindow.cpp" line="979"></location>
        <location filename="../src/ui/MainWindow.cpp" line="983"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1004"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1006"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1106"></location>
        <source>Btrfs Assistant</source>
        <translation>Btrfs 도우미</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="921"></location>
        <location filename="../src/ui/MainWindow.cpp" line="979"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1106"></location>
        <source>Changes applied</source>
        <translation>변경 사항이 적용되었습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="956"></location>
        <source>Are you sure you want to set read-only flag for %1?</source>
        <translation>%1에 읽기 전용 플래그를 설정하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="958"></location>
        <source>Are you sure you want to clear read-only flag for %1?</source>
        <translation>%1의 읽기 전용 플래그를 해제하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="962"></location>
        <source>Are you sure you want to set read-only flag for %1 subvolumes?</source>
        <translation>%1개 서브볼륨에 읽기 전용 플래그를 설정하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="964"></location>
        <source>Are you sure you want to clear read-only flag for %1 subvolumes?</source>
        <translation>%1개 서브볼륨의 읽기 전용 플래그를 해제하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="574"></location>
        <location filename="../src/ui/MainWindow.cpp" line="967"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1153"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1358"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1530"></location>
        <source>Confirm</source>
        <translation>확인</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="149"></location>
        <location filename="../src/ui/MainWindow.cpp" line="173"></location>
        <location filename="../src/ui/MainWindow.cpp" line="735"></location>
        <location filename="../src/ui/MainWindow.cpp" line="758"></location>
        <source>Stop</source>
        <translation>중지</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="158"></location>
        <source>No balance running.</source>
        <translation>실행 중인 밸런스 작업이 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>none</source>
        <translation>없음</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>daily</source>
        <translation>매일</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>weekly</source>
        <translation>매주</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>monthly</source>
        <translation>매월</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="656"></location>
        <source>New Config</source>
        <translation>새 구성</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="656"></location>
        <source>Cancel New Config</source>
        <translation>새 구성 취소</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="984"></location>
        <source>Failed to apply changes to the following subvolumes:</source>
        <translation>다음 서브볼륨에 변경 사항 적용에 실패했습니다:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="993"></location>
        <source>Create &amp;snapshot...</source>
        <translation>스냅샷 만들기(&amp;S)...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1004"></location>
        <source>Snapshot created</source>
        <translation>스냅샷이 생성되었습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1011"></location>
        <source>Browse subvolume...</source>
        <translation>서브볼륨 찾아보기...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1015"></location>
        <source>Restore backup...</source>
        <translation>백업 복원...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1020"></location>
        <source>Set &amp;read-only flag</source>
        <translation>읽기 전용 플래그 설정(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1026"></location>
        <source>&amp;Clear read-only flag</source>
        <translation>읽기 전용 플래그 해제(&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1031"></location>
        <source>&amp;Delete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1042"></location>
        <source>Set cleanup algorithm to &amp;timeline</source>
        <translation>정리 알고리즘을 타임라인으로 설정(&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1045"></location>
        <source>Set cleanup algorithm to &amp;number</source>
        <translation>정리 알고리즘을 개수로 설정(&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1048"></location>
        <source>&amp;Remove cleanup algorithm</source>
        <translation>정리 알고리즘 제거(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1051"></location>
        <source>&amp;Delete snapshot</source>
        <translation>스냅샷 삭제(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1054"></location>
        <source>&amp;Change description</source>
        <translation>설명 변경(&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1148"></location>
        <source>Please select a subvolume to delete first!</source>
        <translation>먼저 삭제할 서브볼륨을 선택하십시오!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1153"></location>
        <source>Are you sure you want to delete the selected subvolume(s)?</source>
        <translation>선택한 서브볼륨을 삭제하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1171"></location>
        <source>Snapper Snapshots Found</source>
        <translation>Snapper 스냅샷이 발견되었습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1172"></location>
        <source>One or more of the selected subvolumes is a Snapper snapshot, would you like to remove the Snapper Metadata?(Recommended)</source>
        <translation>선택한 서브볼륨 중 하나 이상이 Snapper 스냅샷입니다. Snapper 메타데이터도 제거하시겠습니까? (권장)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1194"></location>
        <source>Failed to delete subvolume!</source>
        <translation>서브볼륨 삭제에 실패했습니다!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1194"></location>
        <source>Invalid subvolume ID</source>
        <translation>잘못된 서브볼륨 ID</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1200"></location>
        <source>You cannot delete mounted subvolume: </source>
        <translation>마운트된 서브볼륨은 삭제할 수 없습니다: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1201"></location>
        <source>Please unmount the subvolume before deleting</source>
        <translation>삭제하기 전에 서브볼륨을 마운트 해제하십시오</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1206"></location>
        <source>Failed to delete subvolume </source>
        <translation>서브볼륨 삭제에 실패했습니다: </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1242"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1346"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1395"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1494"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1556"></location>
        <source>Nothing selected!</source>
        <translation>선택된 항목이 없습니다!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1255"></location>
        <source>Failed to restore snapshot</source>
        <translation>스냅샷 복원에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1284"></location>
        <source>Failed to find snapshot to browse</source>
        <translation>찾아볼 스냅샷을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1310"></location>
        <source>No config selected for snapshot</source>
        <translation>스냅샷에 대한 구성이 선택되지 않았습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1316"></location>
        <source>Enter a description for the snapshot</source>
        <translation>스냅샷 설명 입력</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1316"></location>
        <source>Description:</source>
        <translation>설명:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1358"></location>
        <source>Are you sure you want to delete the selected snapshot(s)?</source>
        <translation>선택한 스냅샷을 삭제하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1367"></location>
        <source>Cannot delete snapshot</source>
        <translation>스냅샷을 삭제할 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1419"></location>
        <source>Change description</source>
        <translation>설명 변경</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1420"></location>
        <source>Changing &lt;u&gt;&lt;b&gt;%1&lt;/b&gt;&lt;/u&gt; snapshot(s) &lt;br&gt;&lt;br&gt;Enter a new description for the snapshot(s):</source>
        <translation>&lt;u&gt;&lt;b&gt;%1&lt;/b&gt;&lt;/u&gt;개 스냅샷 변경 중&lt;br&gt;&lt;br&gt;스냅샷의 새 설명을 입력하십시오:</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1431"></location>
        <source>Cannot change description of snapshot</source>
        <translation>스냅샷 설명을 변경할 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1503"></location>
        <source>Please select a single backup subvolume to restore!</source>
        <translation>복원할 백업 서브볼륨을 하나 선택하십시오!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1514"></location>
        <source>The subvolume you selected is not a Btrfs Assistant backup</source>
        <translation>선택한 서브볼륨은 Btrfs 도우미 백업이 아닙니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1525"></location>
        <source>The subvolume is missing!</source>
        <translation>서브볼륨이 없습니다!</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1530"></location>
        <source>Are you sure you want to restore the selected backup?</source>
        <translation>선택한 백업을 복원하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1543"></location>
        <source>Backup Restore</source>
        <translation>백업 복원</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1544"></location>
        <source>Backup restoration complete.</source>
        <translation>백업 복원이 완료되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1572"></location>
        <source>Failed to set cleanup algorithm for snapshot %1</source>
        <translation>스냅샷 %1의 정리 알고리즘 설정에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1591"></location>
        <source>Disable Btrfs Quotas</source>
        <translation>Btrfs 할당량 비활성화</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1593"></location>
        <source>Enable Btrfs Quotas</source>
        <translation>Btrfs 할당량 활성화</translation>
    </message>
</context>
<context>
    <name>RestoreConfirmDialog</name>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="14"></location>
        <source>Dialog</source>
        <translation>대화 상자</translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="42"></location>
        <source>Name for saved backup(Optional): </source>
        <translation>저장된 백업의 이름(선택 사항): </translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="83"></location>
        <source>Yes</source>
        <translation>예</translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="90"></location>
        <source>No</source>
        <translation>아니오</translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="93"></location>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
</context>
<context>
    <name>Snapper</name>
    <message>
        <location filename="../src/util/Snapper.cpp" line="359"></location>
        <source>Failed to reset ownership of restored file</source>
        <translation>복원된 파일의 소유권 재설정에 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/util/Snapper.cpp" line="388"></location>
        <source>Failed to set config</source>
        <translation>구성 설정에 실패했습니다</translation>
    </message>
</context>
<context>
    <name>SnapshotSubvolumeDialog</name>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="14"></location>
        <source>Create a snapshot</source>
        <translation>스냅샷 만들기</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="20"></location>
        <source>Destination:</source>
        <translation>대상:</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="29"></location>
        <source>A filesystem path</source>
        <translation>파일 시스템 경로</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="42"></location>
        <source>Browse...</source>
        <translation>찾아보기...</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="51"></location>
        <source>Read-only</source>
        <translation>읽기 전용</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="15"></location>
        <source>Select a parent directory</source>
        <translation>상위 디렉터리 선택</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="24"></location>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="30"></location>
        <source>Btrfs Assistant</source>
        <translation>Btrfs 도우미</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="24"></location>
        <source>The destination path cannot be empty</source>
        <translation>대상 경로는 비워둘 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="31"></location>
        <source>You entered a relative path. Do you want to continue with the resulting absolute path: %1?</source>
        <translation>상대 경로를 입력했습니다. 생성된 절대 경로 %1(으)로 계속하시겠습니까?</translation>
    </message>
</context>
<context>
    <name>SubvolumeModel</name>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="16"></location>
        <source>Parent ID</source>
        <translation>상위 ID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="18"></location>
        <source>Subvol ID</source>
        <translation>서브볼륨 ID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="20"></location>
        <source>Subvolume</source>
        <translation>서브볼륨</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="22"></location>
        <source>UUID</source>
        <translation>UUID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="24"></location>
        <source>Parent UUID</source>
        <translation>상위 UUID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="26"></location>
        <source>Received UUID</source>
        <translation>수신 UUID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="28"></location>
        <source>Created</source>
        <translation>생성됨</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="30"></location>
        <source>Generation</source>
        <translation>세대</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="32"></location>
        <source>Read-only</source>
        <translation>읽기 전용</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="34"></location>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="36"></location>
        <source>Filesystem</source>
        <translation>파일 시스템</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="38"></location>
        <source>Exclusive</source>
        <translation>단독 사용량</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/main.cpp" line="15"></location>
        <source>Btrfs Assistant</source>
        <translation>Btrfs 도우미</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="22"></location>
        <source>An application for managing Btrfs and Snapper</source>
        <translation>Btrfs와 Snapper를 관리하기 위한 애플리케이션</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="28"></location>
        <source>List snapshots</source>
        <translation>스냅샷 목록</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="33"></location>
        <source>Restore the given snapshot</source>
        <translation>지정된 스냅샷 복원</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="34"></location>
        <source>index of snapshot</source>
        <translation>스냅샷 인덱스</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="42"></location>
        <source>Error: No Btrfs filesystems found</source>
        <translation>오류: Btrfs 파일 시스템을 찾을 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="64"></location>
        <source>Warning: No translations available</source>
        <translation>경고: 사용 가능한 번역이 없습니다</translation>
    </message>
</context>
</TS>
