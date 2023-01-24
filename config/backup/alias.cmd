@echo off

:: Add key with name AutoRun to HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor
:: Containing the full path

DOSKEY desk=cd "c:\Users\minhwasoo\Desktop"
DOSKEY down=cd "c:\Users\minhwasoo\Downloads"

DOSKEY ls=dir /D $*
DOSKEY l=dir /B $*
::DOSKEY l=dir /D  $*
DOSKEY ll=dir /A $*
DOSKEY cat=type $*
DOSKEY clear=cls
DOSKEY grep=$1 $B findstr $2 :: has to be used like this --> grep dir "*.txt"

@chcp 437>null



