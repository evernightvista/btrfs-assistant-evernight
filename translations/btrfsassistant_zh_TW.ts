<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_TW">
<context>
    <name>Btrfs</name>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="115"></location>
        <source>Failed to create the snapshot</source>
        <translation>建立快照失敗</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="380"></location>
        <source>You cannot restore to the root of the partition</source>
        <translation>無法還原到分割區根目錄</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="407"></location>
        <source>Failed to make a backup of target subvolume</source>
        <translation>備份目標子磁區失敗</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="428"></location>
        <source>Failed to restore subvolume!</source>
        <translation>還原子磁區失敗！</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="429"></location>
        <source>Snapshot restore failed.  Please verify the status of your system before rebooting</source>
        <translation>快照還原失敗。請在重新開機前確認系統狀態</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="444"></location>
        <source>The restore was successful but the migration of the nested subvolumes failed</source>
        <translation>還原成功，但巢狀子磁區的遷移失敗</translation>
    </message>
    <message>
        <location filename="../src/util/Btrfs.cpp" line="445"></location>
        <source>Please migrate the those subvolumes manually</source>
        <translation>請手動遷移這些子磁區</translation>
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
        <translation>無可用統計資訊</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="19"></location>
        <source>no errors found</source>
        <translation>未發現錯誤</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="22"></location>
        <source>running</source>
        <translation>正在執行</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="25"></location>
        <source>finished</source>
        <translation>已完成</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="28"></location>
        <source>canceled</source>
        <translation>已取消</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="31"></location>
        <source>aborted</source>
        <translation>已中止</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="34"></location>
        <source>interrupted</source>
        <translation>已中斷</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="64"></location>
        <source>UUID:</source>
        <translation>UUID：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="65"></location>
        <source>Scrub started:</source>
        <translation>資料檢查（Scrub）開始時間：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="66"></location>
        <source>Scrub resumed:</source>
        <translation>資料檢查（Scrub）恢復時間：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="67"></location>
        <source>Status:</source>
        <translation>狀態：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="68"></location>
        <source>Duration:</source>
        <translation>持續時間：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="69"></location>
        <source>Time left:</source>
        <translation>剩餘時間：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="70"></location>
        <source>ETA:</source>
        <translation>預計完成時間：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="71"></location>
        <source>Total to scrub:</source>
        <translation>待檢查總量：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="72"></location>
        <source>Bytes scrubbed:</source>
        <translation>已檢查資料量：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="73"></location>
        <source>Rate:</source>
        <translation>速率：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="74"></location>
        <source>Error summary:</source>
        <translation>錯誤摘要：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="75"></location>
        <source>read_errors:</source>
        <translation>讀取錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="76"></location>
        <source>csum_errors:</source>
        <translation>校驗和錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="77"></location>
        <source>verify_errors:</source>
        <translation>驗證錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="78"></location>
        <source>super_errors:</source>
        <translation>超級區塊錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="79"></location>
        <source>malloc_errors:</source>
        <translation>記憶體配置錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="80"></location>
        <source>uncorrectable_errors:</source>
        <translation>無法修正錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="81"></location>
        <source>unverified_errors:</source>
        <translation>未驗證錯誤：</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="111"></location>
        <source>No balance operation found on %1</source>
        <translation>「%1」上沒有正在執行的平衡（Balance）操作</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="116"></location>
        <source>Balance operation on %1 is running</source>
        <translation>「%1」上的平衡（Balance）正在執行</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="121"></location>
        <source>Balance operation on %1 is paused</source>
        <translation>「%1」上的平衡（Balance）已暫停</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="126"></location>
        <source>Done, relocated %1 of %2 chunks</source>
        <translation>已完成，重新配置了 %1/%2 個區塊</translation>
    </message>
    <message>
        <location filename="../src/util/BtrfsStatus.cpp" line="131"></location>
        <source>%1 of about %2 chunks balanced (%3 considered), %4% left</source>
        <translation>已完成約 %2 個區塊中的 %1 個平衡（Balance）（已檢查 %3 個），剩餘 %4%</translation>
    </message>
</context>
<context>
    <name>Cli</name>
    <message>
        <location filename="../src/ui/Cli.cpp" line="34"></location>
        <location filename="../src/ui/Cli.cpp" line="52"></location>
        <source>You must run this application as root</source>
        <translation>必須以 root 身分執行此應用程式</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="61"></location>
        <source>Failed to parse snapshot list</source>
        <translation>解析快照清單失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="69"></location>
        <source>This is not a snapshot that can be restored by this application</source>
        <translation>此快照無法由本應用程式還原</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="78"></location>
        <source>Source snapshot not found</source>
        <translation>找不到來源快照</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="83"></location>
        <source>Snapshot subvolume not found</source>
        <translation>找不到快照子磁區</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="92"></location>
        <source>Target not found</source>
        <translation>找不到目標</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="96"></location>
        <source>Restoring snapshot %1</source>
        <translation>正在還原快照 %1</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="103"></location>
        <source>Snapshot restoration complete.</source>
        <translation>快照還原完成。</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="104"></location>
        <source>A copy of the original subvolume has been saved as </source>
        <translation>原始子磁區的副本已儲存為：</translation>
    </message>
    <message>
        <location filename="../src/ui/Cli.cpp" line="105"></location>
        <source>Please reboot immediately
</source>
        <translation>請立即重新開機
</translation>
    </message>
</context>
<context>
    <name>DiffViewer</name>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="14"></location>
        <source>Dialog</source>
        <translation>對話方塊</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="83"></location>
        <source>Select a snapshot from the left to see the diff</source>
        <translation>從左側選擇快照以檢視差異</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="116"></location>
        <source>Restore</source>
        <translation>還原</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.ui" line="123"></location>
        <source>Close</source>
        <translation>關閉</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="14"></location>
        <source>Diff Viewer</source>
        <translation>差異檢視器</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="29"></location>
        <source>Confirm</source>
        <translation>確認</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="29"></location>
        <source>Are you sure you want to restore this the file over the current file?</source>
        <translation>確定要用此檔案覆蓋目前檔案嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="38"></location>
        <source>Restore Failed</source>
        <translation>還原失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="38"></location>
        <source>The file failed to restore</source>
        <translation>檔案還原失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="42"></location>
        <source>Restore File</source>
        <translation>還原檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="42"></location>
        <source>The file was successfully restored</source>
        <translation>檔案還原成功</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="63"></location>
        <source>Num</source>
        <comment>The number associated with a snapshot</comment>
        <translation>編號</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="64"></location>
        <source>Date/Time</source>
        <translation>日期/時間</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="65"></location>
        <source>Root Path</source>
        <translation>根路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="66"></location>
        <source>File Path</source>
        <translation>檔案路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/DiffViewer.cpp" line="121"></location>
        <source>There are no differences between the selected files</source>
        <translation>所選檔案之間沒有差異</translation>
    </message>
</context>
<context>
    <name>FileBrowser</name>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="14"></location>
        <source>Dialog</source>
        <translation>對話方塊</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="70"></location>
        <source>Show Diff</source>
        <translation>顯示差異</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="83"></location>
        <location filename="../src/ui/FileBrowser.cpp" line="93"></location>
        <location filename="../src/ui/FileBrowser.cpp" line="113"></location>
        <source>Restore File</source>
        <translation>還原檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.ui" line="96"></location>
        <source>Close</source>
        <translation>關閉</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="41"></location>
        <source>Snapshot File Viewer</source>
        <translation>快照檔案檢視器</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="53"></location>
        <source>File Viewer</source>
        <translation>檔案檢視器</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="70"></location>
        <source>Diff File</source>
        <translation>比較檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="71"></location>
        <source> is a directory, only files can be diffed</source>
        <translation> 是目錄，只能比較檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="94"></location>
        <source> is a directory, only files can be restored</source>
        <translation> 是目錄，只能還原檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="98"></location>
        <source>Confirm</source>
        <translation>確認</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="98"></location>
        <source>Are you sure you want to restore this the file over the current file?</source>
        <translation>確定要用此檔案覆蓋目前檔案嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="109"></location>
        <source>Restore Failed</source>
        <translation>還原失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="109"></location>
        <source>The file failed to restore</source>
        <translation>檔案還原失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/FileBrowser.cpp" line="113"></location>
        <source>The file was successfully restored</source>
        <translation>檔案還原成功</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="14"></location>
        <source>BTRFS-Assistant</source>
        <translation>Btrfs 助手</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="31"></location>
        <source>Overview</source>
        <translation>概覽</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="67"></location>
        <location filename="../src/ui/MainWindow.ui" line="1577"></location>
        <source>Scrub</source>
        <translation>資料檢查（Scrub）</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="108"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Perform scrub on device.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;對裝置執行資料檢查（Scrub）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="111"></location>
        <location filename="../src/ui/MainWindow.ui" line="195"></location>
        <location filename="../src/ui/MainWindow.cpp" line="159"></location>
        <location filename="../src/ui/MainWindow.cpp" line="179"></location>
        <source>Start</source>
        <translation>開始</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="126"></location>
        <source>No scrub ran.</source>
        <translation>尚未執行資料檢查（Scrub）。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="151"></location>
        <location filename="../src/ui/MainWindow.ui" line="1503"></location>
        <source>Balance</source>
        <translation>平衡（Balance）</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="192"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Perform full balance on device.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;對裝置執行完整平衡（Balance）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="214"></location>
        <source>No balance ran.</source>
        <translation>尚未執行平衡（Balance）。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="236"></location>
        <source>Internal Filesystem Statistics</source>
        <translation>內部檔案系統統計</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="242"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Utilization percentage of system chunks in the allocated space.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;已配置空間中系統區塊的使用率。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="252"></location>
        <source>Data:</source>
        <translation>資料：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="259"></location>
        <source>Metadata:</source>
        <translation>中繼資料：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="266"></location>
        <source>System:</source>
        <translation>系統：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="273"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Utilization percentage of metadata chunks in the allocated space.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;已配置空間中中繼資料區塊的使用率。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="283"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Utilization percentage of file data chunks in the allocated space.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;已配置空間中檔案資料區塊的使用率。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="302"></location>
        <source>Information</source>
        <translation>資訊</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="308"></location>
        <source>Used:</source>
        <translation>已使用：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="315"></location>
        <location filename="../src/ui/MainWindow.ui" line="392"></location>
        <source>Estimate of the amount of data that can still be written to this FS, based on the current usage profile.</source>
        <translation>根據目前使用設定估計仍可寫入此檔案系統的資料量。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="325"></location>
        <location filename="../src/ui/MainWindow.ui" line="402"></location>
        <source>Minimum amount of data that you can expect to be able to get onto the filesystem. </source>
        <translation>預計至少還能寫入檔案系統的資料量。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="345"></location>
        <source>Allocated:  </source>
        <translation>已配置：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="359"></location>
        <source>Filesystem Size: </source>
        <translation>檔案系統大小：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="395"></location>
        <source>Free (Estimated): </source>
        <translation>可用（估計）：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="405"></location>
        <source>Free (Minimum): </source>
        <translation>可用（最低）：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="421"></location>
        <source>Volume Selection</source>
        <translation>磁碟區選擇</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="427"></location>
        <source>Filesystem:</source>
        <translation>檔案系統：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="463"></location>
        <source>Enable Quotas</source>
        <translation>啟用配額</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="470"></location>
        <source>Refresh Btrfs Data</source>
        <translation>重新整理 Btrfs 資料</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="485"></location>
        <source>Subvolumes</source>
        <translation>子磁區</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="523"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Include children subvolumes of .snapshots and timeshift folders.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;包含 .snapshots 和 timeshift 資料夾下的子磁區。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="526"></location>
        <source>Include Timeshift and Snapper Snapshots</source>
        <translation>包含 Timeshift 和 Snapper 快照</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="536"></location>
        <source>Include Container Subvolumes</source>
        <translation>包含容器子磁區</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="557"></location>
        <source>Filter...</source>
        <translation>篩選...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="583"></location>
        <source>Restore Backup</source>
        <translation>還原備份</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="603"></location>
        <location filename="../src/ui/MainWindow.ui" line="905"></location>
        <source>Browse</source>
        <translation>瀏覽</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="623"></location>
        <location filename="../src/ui/MainWindow.ui" line="786"></location>
        <location filename="../src/ui/MainWindow.ui" line="1070"></location>
        <source>Delete</source>
        <translation>刪除</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="643"></location>
        <location filename="../src/ui/MainWindow.ui" line="812"></location>
        <location filename="../src/ui/MainWindow.ui" line="951"></location>
        <source>Refresh</source>
        <translation>重新整理</translation>
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
        <translation>新增/刪除</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="733"></location>
        <location filename="../src/ui/MainWindow.ui" line="1040"></location>
        <source>Select config: </source>
        <translation>選擇設定：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="766"></location>
        <location filename="../src/ui/MainWindow.ui" line="1063"></location>
        <source>New</source>
        <translation>新增</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="849"></location>
        <source>Browse/Restore</source>
        <translation>瀏覽/還原</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="870"></location>
        <source>Select target: </source>
        <translation>選擇目標：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="925"></location>
        <source>Restore</source>
        <translation>還原</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="992"></location>
        <source>Snapper Settings</source>
        <translation>Snapper 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1090"></location>
        <source>Save</source>
        <translation>儲存</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1100"></location>
        <location filename="../src/ui/MainWindow.ui" line="1163"></location>
        <source>Config Information</source>
        <translation>設定資訊</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1106"></location>
        <location filename="../src/ui/MainWindow.ui" line="1169"></location>
        <source>Config name: </source>
        <translation>設定名稱：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1133"></location>
        <location filename="../src/ui/MainWindow.ui" line="1196"></location>
        <source>Backup path: </source>
        <translation>備份路徑：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1232"></location>
        <source>Snapshot Retention</source>
        <translation>快照保留原則</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1238"></location>
        <location filename="../src/ui/MainWindow.ui" line="1261"></location>
        <location filename="../src/ui/MainWindow.ui" line="1275"></location>
        <location filename="../src/ui/MainWindow.ui" line="1282"></location>
        <location filename="../src/ui/MainWindow.ui" line="1353"></location>
        <source>Save: </source>
        <translation>保留：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1251"></location>
        <location filename="../src/ui/MainWindow.ui" line="1289"></location>
        <source>Timeline snapshots are taken hourly, the cleanup job reduces the snapshots in accordance with the below settings</source>
        <translation>時間軸快照每小時建立一次，清理作業會根據以下設定減少快照數量</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1254"></location>
        <source>Enable timeline snapshots</source>
        <translation>啟用時間軸快照</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1268"></location>
        <source>Daily</source>
        <translation>每日</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1308"></location>
        <source>Yearly</source>
        <translation>每年</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1315"></location>
        <source>Monthly</source>
        <translation>每月</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1325"></location>
        <source>Hourly</source>
        <translation>每小時</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1332"></location>
        <source>Weekly</source>
        <translation>每週</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1339"></location>
        <source>Save:</source>
        <translation>保留：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1346"></location>
        <source>Number</source>
        <translation>數量</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1382"></location>
        <source>systemd Unit Settings</source>
        <translation>systemd 單元設定</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1388"></location>
        <source>Snapper timeline enabled</source>
        <translation>啟用 Snapper 時間軸</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1401"></location>
        <source>Snapper cleanup enabled</source>
        <translation>啟用 Snapper 清理</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1414"></location>
        <source>Snapper boot enabled</source>
        <translation>啟用 Snapper 開機快照</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1433"></location>
        <source>Apply systemd changes</source>
        <translation>套用 systemd 變更</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1461"></location>
        <source>Btrfs maintenance</source>
        <translation>Btrfs 維護</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1531"></location>
        <location filename="../src/ui/MainWindow.ui" line="1621"></location>
        <location filename="../src/ui/MainWindow.ui" line="1695"></location>
        <source>Frequency: </source>
        <translation>頻率：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1541"></location>
        <location filename="../src/ui/MainWindow.ui" line="1628"></location>
        <location filename="../src/ui/MainWindow.ui" line="1702"></location>
        <source>Select All</source>
        <translation>全選</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1548"></location>
        <location filename="../src/ui/MainWindow.ui" line="1635"></location>
        <location filename="../src/ui/MainWindow.ui" line="1709"></location>
        <source>Mountpoints: </source>
        <translation>掛載點：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1651"></location>
        <source>Defrag</source>
        <translation>磁碟重組</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1747"></location>
        <source>Reset</source>
        <translation>重設</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1767"></location>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Update Btrfs Maintenance config file and call service to load new settings.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;更新 Btrfs Maintenance 設定檔，並呼叫服務載入新設定。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.ui" line="1770"></location>
        <source>Apply</source>
        <translation>套用</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="59"></location>
        <source>The application must be run as the superuser(root)</source>
        <translation>必須以超級使用者（root）身分執行此應用程式</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="87"></location>
        <source>Error</source>
        <translation>錯誤</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="318"></location>
        <source>You have lots of free space, did you overbuy?</source>
        <translation>可用空間很多，是不是買太大了？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="320"></location>
        <source>Situation critical!  Time to delete some data or buy more disk</source>
        <translation>情況危急！該刪除一些資料或購買更大的磁碟了</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="322"></location>
        <source>Your disk space is well utilized</source>
        <translation>磁碟空間使用率良好</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="374"></location>
        <location filename="../src/ui/MainWindow.cpp" line="424"></location>
        <source>Number</source>
        <comment>The number associated with a snapshot</comment>
        <translation>數量</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="375"></location>
        <location filename="../src/ui/MainWindow.cpp" line="428"></location>
        <source>Date/Time</source>
        <translation>日期/時間</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="376"></location>
        <location filename="../src/ui/MainWindow.cpp" line="429"></location>
        <source>Type</source>
        <translation>類型</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="377"></location>
        <source>Cleanup</source>
        <translation>清理原則</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="378"></location>
        <location filename="../src/ui/MainWindow.cpp" line="431"></location>
        <source>Description</source>
        <translation>描述</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="426"></location>
        <source>Subvolume</source>
        <translation>子磁區</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="542"></location>
        <source>This is not a snapshot that can be restored by this application</source>
        <translation>此快照無法由本應用程式還原</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="552"></location>
        <source>Snapshot subvolume not found</source>
        <translation>找不到快照子磁區</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="562"></location>
        <source>Target not found</source>
        <translation>找不到目標</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="568"></location>
        <source>Warning subvolid mount detected!</source>
        <translation>警告：偵測到以 subvolid 掛載！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="569"></location>
        <source>It appears you are currently mounting by subvolid.  Doing a restore in this case may not produce the expected outcome.  It is highly recommended you switch to mounting by subvolume path before proceeding!</source>
        <translation>目前似乎正在以 subvolid 掛載。在此情況下執行還原可能無法得到預期結果。強烈建議在繼續前改為以子磁區路徑掛載！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="574"></location>
        <source>Are you sure you want to restore </source>
        <translation>確定要還原 </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="574"></location>
        <source> to </source>
        <comment>as in from/to</comment>
        <translation> 到 </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="588"></location>
        <source>Snapshot Restore</source>
        <translation>快照還原</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="589"></location>
        <source>Snapshot restoration complete.</source>
        <translation>快照還原完成。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="589"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1544"></location>
        <source>A copy of the original subvolume has been saved as </source>
        <translation>原始子磁區的副本已儲存為：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="590"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1545"></location>
        <source>Please reboot immediately</source>
        <translation>請立即重新開機</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="788"></location>
        <source>No config selected</source>
        <translation>未選擇設定</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="794"></location>
        <source>Please Confirm</source>
        <translation>請確認</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="795"></location>
        <source>Are you sure you want to delete </source>
        <translation>確定要刪除 </translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="795"></location>
        <source>This action cannot be undone</source>
        <translation>此操作無法復原</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="826"></location>
        <source>No btrfs subvolumes found</source>
        <translation>找不到 Btrfs 子磁區</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="852"></location>
        <source>Failed to save changes</source>
        <translation>儲存變更失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="871"></location>
        <source>Changes saved</source>
        <translation>變更已儲存</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="884"></location>
        <source>Please enter a valid name</source>
        <translation>請輸入有效名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="890"></location>
        <source>That name is already in use!</source>
        <translation>該名稱已被使用！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="921"></location>
        <location filename="../src/ui/MainWindow.cpp" line="979"></location>
        <location filename="../src/ui/MainWindow.cpp" line="983"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1004"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1006"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1106"></location>
        <source>Btrfs Assistant</source>
        <translation>Btrfs 助手</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="921"></location>
        <location filename="../src/ui/MainWindow.cpp" line="979"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1106"></location>
        <source>Changes applied</source>
        <translation>變更已套用</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="956"></location>
        <source>Are you sure you want to set read-only flag for %1?</source>
        <translation>確定要為 %1 設定唯讀旗標嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="958"></location>
        <source>Are you sure you want to clear read-only flag for %1?</source>
        <translation>確定要清除 %1 的唯讀旗標嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="962"></location>
        <source>Are you sure you want to set read-only flag for %1 subvolumes?</source>
        <translation>確定要為 %1 個子磁區設定唯讀旗標嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="964"></location>
        <source>Are you sure you want to clear read-only flag for %1 subvolumes?</source>
        <translation>確定要清除 %1 個子磁區的唯讀旗標嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="574"></location>
        <location filename="../src/ui/MainWindow.cpp" line="967"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1153"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1358"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1530"></location>
        <source>Confirm</source>
        <translation>確認</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="149"></location>
        <location filename="../src/ui/MainWindow.cpp" line="173"></location>
        <location filename="../src/ui/MainWindow.cpp" line="735"></location>
        <location filename="../src/ui/MainWindow.cpp" line="758"></location>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="158"></location>
        <source>No balance running.</source>
        <translation>目前沒有正在執行的平衡（Balance）操作。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>none</source>
        <translation>無</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>daily</source>
        <translation>每天</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>weekly</source>
        <translation>每週</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="220"></location>
        <source>monthly</source>
        <translation>每個月</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="656"></location>
        <source>New Config</source>
        <translation>新增設定</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="656"></location>
        <source>Cancel New Config</source>
        <translation>取消新增設定</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="984"></location>
        <source>Failed to apply changes to the following subvolumes:</source>
        <translation>無法將變更套用到以下子磁區：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="993"></location>
        <source>Create &amp;snapshot...</source>
        <translation>建立快照(&amp;S)...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1004"></location>
        <source>Snapshot created</source>
        <translation>快照已建立</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1011"></location>
        <source>Browse subvolume...</source>
        <translation>瀏覽子磁區...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1015"></location>
        <source>Restore backup...</source>
        <translation>還原備份...</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1020"></location>
        <source>Set &amp;read-only flag</source>
        <translation>設定唯讀旗標(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1026"></location>
        <source>&amp;Clear read-only flag</source>
        <translation>清除唯讀旗標(&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1031"></location>
        <source>&amp;Delete</source>
        <translation>刪除(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1042"></location>
        <source>Set cleanup algorithm to &amp;timeline</source>
        <translation>將清理演算法設為時間軸(&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1045"></location>
        <source>Set cleanup algorithm to &amp;number</source>
        <translation>將清理演算法設為數量(&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1048"></location>
        <source>&amp;Remove cleanup algorithm</source>
        <translation>移除清理演算法(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1051"></location>
        <source>&amp;Delete snapshot</source>
        <translation>刪除快照(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1054"></location>
        <source>&amp;Change description</source>
        <translation>變更描述(&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1148"></location>
        <source>Please select a subvolume to delete first!</source>
        <translation>請先選擇要刪除的子磁區！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1153"></location>
        <source>Are you sure you want to delete the selected subvolume(s)?</source>
        <translation>確定要刪除所選子磁區嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1171"></location>
        <source>Snapper Snapshots Found</source>
        <translation>發現 Snapper 快照</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1172"></location>
        <source>One or more of the selected subvolumes is a Snapper snapshot, would you like to remove the Snapper Metadata?(Recommended)</source>
        <translation>所選子磁區中有一個或多個是 Snapper 快照，是否一併移除 Snapper 中繼資料？（建議）</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1194"></location>
        <source>Failed to delete subvolume!</source>
        <translation>刪除子磁區失敗！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1194"></location>
        <source>Invalid subvolume ID</source>
        <translation>無效的子磁區 ID</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1200"></location>
        <source>You cannot delete mounted subvolume: </source>
        <translation>無法刪除已掛載的子磁區：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1201"></location>
        <source>Please unmount the subvolume before deleting</source>
        <translation>請先卸載該子磁區再刪除</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1206"></location>
        <source>Failed to delete subvolume </source>
        <translation>刪除子磁區失敗：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1242"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1346"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1395"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1494"></location>
        <location filename="../src/ui/MainWindow.cpp" line="1556"></location>
        <source>Nothing selected!</source>
        <translation>未選擇任何項目！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1255"></location>
        <source>Failed to restore snapshot</source>
        <translation>還原快照失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1284"></location>
        <source>Failed to find snapshot to browse</source>
        <translation>找不到要瀏覽的快照</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1310"></location>
        <source>No config selected for snapshot</source>
        <translation>未為快照選擇設定</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1316"></location>
        <source>Enter a description for the snapshot</source>
        <translation>輸入快照描述</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1316"></location>
        <source>Description:</source>
        <translation>描述：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1358"></location>
        <source>Are you sure you want to delete the selected snapshot(s)?</source>
        <translation>確定要刪除所選快照嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1367"></location>
        <source>Cannot delete snapshot</source>
        <translation>無法刪除快照</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1419"></location>
        <source>Change description</source>
        <translation>變更描述</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1420"></location>
        <source>Changing &lt;u&gt;&lt;b&gt;%1&lt;/b&gt;&lt;/u&gt; snapshot(s) &lt;br&gt;&lt;br&gt;Enter a new description for the snapshot(s):</source>
        <translation>正在變更 &lt;u&gt;&lt;b&gt;%1&lt;/b&gt;&lt;/u&gt; 個快照&lt;br&gt;&lt;br&gt;請輸入新的快照描述：</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1431"></location>
        <source>Cannot change description of snapshot</source>
        <translation>無法變更快照描述</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1503"></location>
        <source>Please select a single backup subvolume to restore!</source>
        <translation>請選擇一個要還原的備份子磁區！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1514"></location>
        <source>The subvolume you selected is not a Btrfs Assistant backup</source>
        <translation>所選子磁區不是 Btrfs 助手備份</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1525"></location>
        <source>The subvolume is missing!</source>
        <translation>子磁區不存在！</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1530"></location>
        <source>Are you sure you want to restore the selected backup?</source>
        <translation>確定要還原所選備份嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1543"></location>
        <source>Backup Restore</source>
        <translation>備份還原</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1544"></location>
        <source>Backup restoration complete.</source>
        <translation>備份還原完成。</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1572"></location>
        <source>Failed to set cleanup algorithm for snapshot %1</source>
        <translation>為快照 %1 設定清理演算法失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1591"></location>
        <source>Disable Btrfs Quotas</source>
        <translation>停用 Btrfs 配額</translation>
    </message>
    <message>
        <location filename="../src/ui/MainWindow.cpp" line="1593"></location>
        <source>Enable Btrfs Quotas</source>
        <translation>啟用 Btrfs 配額</translation>
    </message>
</context>
<context>
    <name>RestoreConfirmDialog</name>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="14"></location>
        <source>Dialog</source>
        <translation>對話方塊</translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="42"></location>
        <source>Name for saved backup(Optional): </source>
        <translation>儲存的備份名稱（選用）：</translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="83"></location>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="../src/ui/RestoreConfirmDialog.ui" line="90"></location>
        <source>No</source>
        <translation>否</translation>
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
        <translation>重設已還原檔案的所有權失敗</translation>
    </message>
    <message>
        <location filename="../src/util/Snapper.cpp" line="388"></location>
        <source>Failed to set config</source>
        <translation>設定失敗</translation>
    </message>
</context>
<context>
    <name>SnapshotSubvolumeDialog</name>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="14"></location>
        <source>Create a snapshot</source>
        <translation>建立快照</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="20"></location>
        <source>Destination:</source>
        <translation>目的地：</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="29"></location>
        <source>A filesystem path</source>
        <translation>檔案系統路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="42"></location>
        <source>Browse...</source>
        <translation>瀏覽...</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.ui" line="51"></location>
        <source>Read-only</source>
        <translation>唯讀</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="15"></location>
        <source>Select a parent directory</source>
        <translation>選擇上層目錄</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="24"></location>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="30"></location>
        <source>Btrfs Assistant</source>
        <translation>Btrfs 助手</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="24"></location>
        <source>The destination path cannot be empty</source>
        <translation>目的地路徑不能為空</translation>
    </message>
    <message>
        <location filename="../src/ui/SnapshotSubvolumeDialog.cpp" line="31"></location>
        <source>You entered a relative path. Do you want to continue with the resulting absolute path: %1?</source>
        <translation>輸入的是相對路徑。是否使用產生的絕對路徑繼續：%1？</translation>
    </message>
</context>
<context>
    <name>SubvolumeModel</name>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="16"></location>
        <source>Parent ID</source>
        <translation>上層 ID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="18"></location>
        <source>Subvol ID</source>
        <translation>子磁區 ID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="20"></location>
        <source>Subvolume</source>
        <translation>子磁區</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="22"></location>
        <source>UUID</source>
        <translation>UUID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="24"></location>
        <source>Parent UUID</source>
        <translation>上層 UUID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="26"></location>
        <source>Received UUID</source>
        <translation>接收 UUID</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="28"></location>
        <source>Created</source>
        <translation>建立時間</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="30"></location>
        <source>Generation</source>
        <translation>世代</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="32"></location>
        <source>Read-only</source>
        <translation>唯讀</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="34"></location>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="36"></location>
        <source>Filesystem</source>
        <translation>檔案系統</translation>
    </message>
    <message>
        <location filename="../src/model/SubvolModel.cpp" line="38"></location>
        <source>Exclusive</source>
        <translation>獨佔用量</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/main.cpp" line="15"></location>
        <source>Btrfs Assistant</source>
        <translation>Btrfs 助手</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="22"></location>
        <source>An application for managing Btrfs and Snapper</source>
        <translation>用於管理 Btrfs 和 Snapper 的應用程式</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="28"></location>
        <source>List snapshots</source>
        <translation>列出快照</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="33"></location>
        <source>Restore the given snapshot</source>
        <translation>還原指定快照</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="34"></location>
        <source>index of snapshot</source>
        <translation>快照索引</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="42"></location>
        <source>Error: No Btrfs filesystems found</source>
        <translation>錯誤：找不到 Btrfs 檔案系統</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="64"></location>
        <source>Warning: No translations available</source>
        <translation>警告：沒有可用的翻譯</translation>
    </message>
</context>
</TS>
