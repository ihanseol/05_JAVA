e.=explorer .
gl=git log --oneline --all --graph --decorate  $*

gs=git status $*
ga=git add $*
gc=git commit $*
gpush=git push 
gpull=git pull 

l=ls --show-control-chars -F --color $*
ll=ls -alF --show-control-chars --color $*
la=ls -A --color $*
lla=ls -al --show-control-chars --color $*


..=..\$*
...=..\..\$*
~=cd /d %USERPROFILE%
~~=cd /d %ProgramData%
~~~=cd /d %APPDATA%


cdwin=cd /d %SystemRoot%
cd32=cd /d %windir%/system32
cd64=cd /d %windir%/SysWOW64
cddata=cd /d %ProgramData%
cdprog=cd /d %ProgramData%
cdcmder=cd /d %TCOMMANDER%
cdtc=cd /d %TC%
cddev=cd /d %FDEV%
cddesk=cd /d %USERPROFILE%/Desktop
cddown=cd /d %USERPROFILE%/Downloads
cdhome=cd /d %USERPROFILE%
cdappdata=cd /d %APPDATA%
cdlocal=cd /d %APPDATA%\..\Local
cdhost=cd /d c:\Windows\System32\Drivers\etc
cdgame=cd /d d:\11_exaData\06_util\099_Game
cdsend=cd /d d:\05_Send
cdsend2=cd /d d:\06_Send2




pwd=cd
clear=cls


history=cat "%USERPROFILE%"\cmd\history.log
unalias=doskey_unload.cmd
lsalias=doskey /macros


vi=gvim $*
sub=subl $*
find=findstr /sin $*

history=doskey /history
listall=doskey /macros
unloadall="%TCOMMANDER%"\doskey_unload.cmd


setvi=SET EDITOR=gvim $t echo Setting Editor to GVIM
setcode=SET EDITOR=code $t echo Setting Editor to VsCode
setsubl=SET EDITOR=subl $t echo Setting Editor to SubLime Text

qho=start /B %EDITOR% "C:\windows\system32\drivers\etc\hosts"
qal=cd /d %TCOMMANDER% $t if %EDITOR% == code (%EDITOR% "user_aliases.cmd") else (start /B %EDITOR% "user_aliases.cmd")
qpr=cd /d %TCOMMANDER% $t start /B %EDITOR% "user_profile.cmd"


h=IF ".$*." == ".." (echo "usage: h [ SHOW | SAVE | TSAVE ]" && doskey /history) ELSE (IF /I "$1" == "SAVE" (doskey /history > %USERPROFILE%\cmd\history.log & ECHO Command history saved) ELSE (IF /I "$1" == "TSAVE" (echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey /history > %USERPROFILE%\cmd\history.log & ECHO Command history saved) ELSE (IF /I "$1" == "SHOW" (type %USERPROFILE%\cmd\history.log) ELSE (doskey /history))))
loghistory=doskey /history >> %USERPROFILE%\cmd\history.log


exit=echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey /history $g$g %USERPROFILE%\cmd\history.log & exit $*



