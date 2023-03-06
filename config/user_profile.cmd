
@echo off

set "GITT=C:\Program Files\Git\usr\bin\"
set "TCOMMANDER=c:\Program Files\totalcmd\ini\config\"
set "TC=c:\Program Files\totalcmd\"

set "VII=c:\Program Files\Vim\vim90\"
set "CODE=c:\Users\minhwasoo\AppData\Local\Programs\Microsoft VS Code\"
set "SUBLIMETEXT=c:\Program Files\Sublime Text\"
set "FZFP=c:\Users\minhwasoo\.fzf\bin\"
set "FARMANAGER=c:\Program Files\Far Manager\"

set "ME=c:\Users\minhwasoo\Desktop\"

:: FDEV - Folder Dev
set "FDEV=d:\12_dev\"



:: set EDITOR=gvim
:: set EDITOR=code
set "EDITOR=subl"


set PATH=%PATH%;%GITT%;%TCOMMANDER%;%ME%;%VII%;%SUBLIMETEXT%;%FZFP%;%FARMANAGER%


doskey /macrofile="%TCOMMANDER%\user_aliases.cmd" 

