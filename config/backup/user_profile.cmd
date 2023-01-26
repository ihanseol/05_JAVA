%[:%

:: use this file to run your own startup commands
:: use in front of the command to prevent printing the command

:: uncomment this to have the ssh agent load when cmder starts
:: call "%GIT_INSTALL_ROOT%/cmd/start-ssh-agent.cmd" /k exit

:: uncomment the next two lines to use pageant as the ssh authentication agent
:: set SSH_AUTH_SOCK=/tmp/.ssh-pageant-auth-sock
:: call "%GIT_INSTALL_ROOT%/cmd/start-ssh-pageant.cmd"

:: you can add your plugins to the cmder path like so
:: set "PATH=%CMDER_ROOT%\vendor\whatever;%PATH%"

:: arguments in this batch are passed from init.bat, you can quickly parse them like so:
:: more useage can be seen by typing "cexec /?"

:: %ccall% "/customOption" "command/program"

:: use this file to run your own startup commands
:: use  in front of the command to prevent printing the command
 
:: call "%GIT_INSTALL_ROOT%/cmd/start-ssh-agent.cmd"
:: set "PATH=%CMDER_ROOT%\vendor\whatever;%PATH%"
 
 
:: set EDITOR="C:\util\Vim8.0\vim80\gvim.exe"
 
:: for CMake
:: set CMAKE_MAKE_PROGRAM=mingw32-make
:: set CMAKE_C_COMPILER=mingw32-gcc.exe 
:: set CMAKE_CXX_COMPILER=mingw32-g++.exe
 
:: for docker
:: set DOCKER_CERT_PATH="d:\docker\machines\default"
:: set DOCKER_HOST="tcp://192.168.99.100:2376"
:: set DOCKER_TLS_VERIFY=1
:: MACHINE_STORAGE_PATH=d:\docker\machine\default
 
:: set PATH=%PATH%;c:\util\Sysinternals;D:\devel\gradle-2.9\bin;

%:]%


@echo off

set "GITT=C:\Program Files\Git\usr\bin"
set "TCOMMANDER=c:\Program Files\totalcmd\ini\config"

set "VII=c:\Program Files\Vim\vim90"
set "CODE=c:\Users\minhwasoo\AppData\Local\Programs\Microsoft VS Code"
set "SUBLIMETEXT=c:\Program Files\Sublime Text"
set "FZFP=c:\Users\minhwasoo\.fzf\bin"

set "ME=c:\Users\minhwasoo\Desktop"

:: FDEV - Folder Dev
set "FDEV=d:\12_dev"

:: set EDITOR=gvim
:: set EDITOR=code
set "EDITOR=subl"


set PATH=%PATH%;%GITT%;%TCOMMANDER%;%ME%;%VII%;%SUBLIMETEXT%;%FZFP%


doskey /macrofile="%TCOMMANDER%\user_aliases.cmd" 

