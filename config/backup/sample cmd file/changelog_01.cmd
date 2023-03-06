@echo off
set LOGFILE=C:\temp\changes.log


set FILTER=ProcessName is not "explorer.exe" and Path contains "C:\Program Files"
:: start /b "" "C:\Program Files\SysinternalsSuite\Procmon.exe" /BackingFile %LOGFILE% /Noconnect /Quiet /Minimized /AcceptEula /Filter "%FILTER%"
start /b "" "c:\Program Files\totalcmd\RunAsTool\SystemInternal\Procmon.exe" /BackingFile %LOGFILE% /Noconnect /Quiet /Minimized /AcceptEula /Filter "%FILTER%"

echo Monitoring started. Press any key to stop monitoring.
pause

taskkill /f /im Procmon.exe


