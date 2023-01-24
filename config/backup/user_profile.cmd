:: use this file to run your own startup commands
:: use in front of the command to prevent printing the command

:: uncomment this to have the ssh agent load when cmder starts
:: call "%GIT_INSTALL_ROOT%/cmd/start-ssh-agent.cmd" /k exit

:: uncomment the next two lines to use pageant as the ssh authentication agent
:: SET SSH_AUTH_SOCK=/tmp/.ssh-pageant-auth-sock
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
 
 
:: SET EDITOR="C:\util\Vim8.0\vim80\gvim.exe"
 
:: for CMake
:: SET CMAKE_MAKE_PROGRAM=mingw32-make
:: SET CMAKE_C_COMPILER=mingw32-gcc.exe 
:: SET CMAKE_CXX_COMPILER=mingw32-g++.exe
 
:: for docker
:: SET DOCKER_CERT_PATH="d:\docker\machines\default"
:: SET DOCKER_HOST="tcp://192.168.99.100:2376"
:: SET DOCKER_TLS_VERIFY=1
:: MACHINE_STORAGE_PATH=d:\docker\machine\default
 
:: SET PATH=%PATH%;c:\util\Sysinternals;D:\devel\gradle-2.9\bin;



@echo off

SET _GIT_=C:\Program Files\Git\usr\bin\
SET _TCOMMANDER_=c:\Program Files\totalcmd\ini\config\

SET _VI_=c:\Program Files\Vim\vim90\gvim.exe
SET _CODE_=c:\Users\minhwasoo\AppData\Local\Programs\Microsoft VS Code\Code.exe
SET _SUBLIME_=c:\Program Files\Sublime Text\sublime_text.exe

SET _ME_=c:\Users\minhwasoo\

:: SET _EDITOR_=gvim
:: SET _EDITOR_=code
SET _EDITOR_=sublime_text


SET PATH=%PATH%;%_GIT_%;%_TCOMMANDER_%;%_ME_%;c:\Program Files\Vim\vim90;c:\Program Files\Sublime Text 3\






