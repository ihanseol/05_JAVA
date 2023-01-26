
 :: setlocal enabledelayedexpansion
 :: for  %%a in ("C:\Test\*.txt") do (
 ::     set FileName=%%~a
 ::     echo Filename is: !FileName!
 :: )
 :: endlocal


@echo off
setlocal enabledelayedexpansion

for /f "tokens=2 delims=:" %%i in ('ipconfig ^| find "IPv4"') do (
    set ip=%%~i    
    echo !ip! 
)
endlocal
pause


