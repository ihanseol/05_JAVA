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

 
l=ls --show-control-chars -F --color $*
ls=ls --show-control-chars -F --color $*
ll=ls -l -F --show-control-chars --color $*

..=..\$*
...=..\..\$*
~=c: $t cd %USERPROFILE%



pwd=cd
clear=cls

;= mydir=cd /d %_ME_%
;= history=cat "%_TCOMMANDER_%\config\.history"
;= unalias=alias /d $1

vi=gvim $*
cmderr=cd /d %_TCOMMANDER_%
lp=cls $t dir
find=findstr /sin $*


eh=%_VI_% "C:\windows\system32\drivers\etc\hosts"
qal=%_VI_% "%_TCOMMANDER_%\user_aliases.cmd" 
sett=%_VI_% "%_TCOMMANDER_%\user_profile.cmd"

;= eh=%_CODE_% "C:\windows\system32\drivers\etc\hosts"
;= qal=%_CODE_% "%_TCOMMANDER_%\user_aliases.cmd" 
;= sett=%_CODE_% "%_TCOMMANDER_%\user_profile.cmd"



;= eh=%_SUBLIME_% "C:\windows\system32\drivers\etc\hosts"
;= qal=%_SUBLIME_% "%_TCOMMANDER_%\user_aliases.cmd" 
;= sett=%_SUBLIME_% "%_TCOMMANDER_%\user_profile.cmd"



;= min=c: $t cd %_ME_%

ana=cd C:\ProgramData\Anaconda3\envs
sub=sublime_text $*

history=doskey /history
;= h [SHOW | SAVE | TSAVE ]


h=IF ".$*." == ".." (echo "usage: h [ SHOW | SAVE | TSAVE ]" && doskey/history) ELSE (IF /I "$1" == "SAVE" (doskey/history $g$g %USERPROFILE%\cmd\history.log & ECHO Command history saved) ELSE (IF /I "$1" == "TSAVE" (echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey/history $g$g %USERPROFILE%\cmd\history.log & ECHO Command history saved) ELSE (IF /I "$1" == "SHOW" (type %USERPROFILE%\cmd\history.log) ELSE (doskey/history))))
loghistory=doskey /history >> %USERPROFILE%\cmd\history.log

;=exit=echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey/history $g$g %USERPROFILE%\cmd\history.log & ECHO Command history saved, exiting & timeout 1 & exit $*
exit=echo **** %date% %time% **** >> %USERPROFILE%\cmd\history.log & doskey/history $g$g %USERPROFILE%\cmd\history.log & exit $*



