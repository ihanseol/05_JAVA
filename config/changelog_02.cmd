

@echo off

set "LOGFILE=C:\logs\system_changes.txt"
set "APPNAME=My Application"

echo >> %LOGFILE% "==== START OF SYSTEM CHANGES ===="
echo >> %LOGFILE% "Timestamp: %DATE% %TIME%"

echo >> %LOGFILE% "Running Processes:"
tasklist >> %LOGFILE%

echo >> %LOGFILE% "Shortcut Paths:"
dir /s /b "C:\Users\%USERNAME%\Desktop\*.lnk" >> %LOGFILE%

echo >> %LOGFILE% "Windows Services:"
sc query >> %LOGFILE%

echo >> %LOGFILE% "Add/Remove Programs:"
wmic product get name,version >> %LOGFILE%

echo >> %LOGFILE% "Firewall Rules:"
netsh advfirewall firewall show rule name=all >> %LOGFILE%

echo >> %LOGFILE% "File Creation List:"
powershell -Command "Get-ChildItem -Recurse C:\ -Force | Where-Object {$_.CreationTime -gt (Get-Date).AddDays(-7)} | Select-Object FullName, CreationTime" >> %LOGFILE%

echo >> %LOGFILE% "==== END OF SYSTEM CHANGES ===="


