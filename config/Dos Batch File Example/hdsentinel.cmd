@echo off

set "__BAT_PATH=%~dp0"
set "__BAT_NAME=%~nx0"


echo %__BAT_NAME%
echo %__BAT_PATH%


echo %__BAT_PATH%App\HardDiskSentinel\HDSentinel.exe

call "%__BAT_PATH%App\HardDiskSentinel\HDSentinel.exe"