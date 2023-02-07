@echo off

set source_folder=C:\path\to\source\folder
set destination_folder=C:\path\to\destination\folder

xcopy %source_folder% %destination_folder% /E /I /Y
rmdir %source_folder% /S /Q

echo Done!
pause

