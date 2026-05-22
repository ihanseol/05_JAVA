  
@echo off

set "git_executable=c:\Program Files\Git\cmd\git.exe"

"%git_executable%" --version > "%temp%\git_version.txt"

echo %temp%
type "%temp%\git_version.txt"

setlocal enabledelayedexpansion
:: for /F "tokens=1,2,3* usebackq" %%A in (`type "%temp%\git_version.txt" 2^>nul`) do (

for /F "tokens=1,2,3" %%A in (%temp%\git_version.txt) do (
    echo "%%A"
    echo "%%B"
    echo "%%C"

    if /i "%%A %%B" == "git version" (
        set "GIT_VERSION=%%C"
    ) else (
        echo "'git --version' returned an improper version string!"        
        exit /b
    )
)


echo %GIT_VERSION%




