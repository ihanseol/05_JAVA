;= @echo off
;= rem Call DOSKEY and use this file as the macrofile
;= %SystemRoot%\system32\doskey /listsize=1000 /macrofile=%0%
;= rem In batch mode, jump to the end of the file
;= goto:eof
;= Add aliases below here

e.=explorer .
gl=git log --oneline --all --graph --decorate  $*
gs=git status $*
ga=git add $*
gc=git commit $*
gpush=git push origin master
gpull=git pull origin master

 
;= l=ls --show-control-chars -F --color $*
;= ls=ls --show-control-chars -F --color $*
;= ll=ls -l -F --show-control-chars --color $*
;= lp=cls $t dir


l=ls --show-control-chars -F --color $*
ll=ls -alF --show-control-chars --color $*
la=ls -A --color $*
lla=ls -al --show-control-chars --color $*


..=..\$*
...=..\..\$*
~=cd /d %USERPROFILE%/Desktop
~~=cd /d %ProgramData%
~~~=cd /d %APPDATA%

pwd=cd
clear=cls


history=cat "%USERPROFILE%"\cmd\history.log
unalias=alias /d $1

vi=gvim $*
sub=subl $*
find=findstr /sin $*

history=doskey /history
listall=doskey /macros
unloadall="%TCOMMANDER%"\doskey_unload.cmd


cmder_config=cd /d %TCOMMANDER%
cdev=cd /d %FDEV%

ana=cd /d C:\ProgramData\Anaconda3\envs


;= qho : quick hosts file
;= qal : quick alias command
;= qpr : quick profile command


setvi=SET EDITOR=gvim $t echo Setting Editor to GVIM
setcode=SET EDITOR=code $t echo Setting Editor to VsCode
setsubl=SET EDITOR=subl $t echo Setting Editor to SubLime Text

qho=start /B %EDITOR% "C:\windows\system32\drivers\etc\hosts"
;= qal=cd /d %TCOMMANDER% $t if %EDITOR% == code (echo code ) else (echo other)

qal=cd /d %TCOMMANDER% $t if %EDITOR% == code (%EDITOR% "user_aliases.cmd") else (start /B %EDITOR% "user_aliases.cmd")
qpr=cd /d %TCOMMANDER% $t start /B %EDITOR% "user_profile.cmd"


;= h [SHOW | SAVE | TSAVE ]
h=IF ".$*." == ".." (echo "usage: h [ SHOW | SAVE | TSAVE ]" && doskey/history) ELSE (IF /I "$1" == "SAVE" (doskey/history $g$g %USERPROFILE%\cmd\history.log & ECHO Command history saved) ELSE (IF /I "$1" == "TSAVE" (echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey/history $g$g %USERPROFILE%\cmd\history.log & ECHO Command history saved) ELSE (IF /I "$1" == "SHOW" (type %USERPROFILE%\cmd\history.log) ELSE (doskey/history))))
loghistory=doskey /history >> %USERPROFILE%\cmd\history.log

;=exit=echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey/history $g$g %USERPROFILE%\cmd\history.log & ECHO Command history saved, exiting & timeout 1 & exit $*
exit=echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey/history $g$g %USERPROFILE%\cmd\history.log & exit $*



