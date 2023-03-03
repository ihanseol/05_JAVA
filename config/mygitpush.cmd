:: @echo off

@echo off
SET CMD=%~1

IF "%CMD%" == "" (
  GOTO allpush
)

if "%CMD%" == "1" goto 01_Linux
if "%CMD%" == "2" goto 02_Excel
if "%CMD%" == "3" goto 03_visual_lisp
if "%CMD%" == "4" goto 04_PyhtonDemoDojang
if "%CMD%" == "5" goto 05_JAVA


@echo on



:01_Linux
@echo -------------------------------------------------
@echo   01_Linux 
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/01_Linux

git status
git add .
git commit -a -m "add"
git push origin master
goto exit


:02_Excel

@echo -------------------------------------------------
@echo   02_Excel
@echo -------------------------------------------------
@echo

cd /d d:/12_dev/02_Excel

git status
git add .
git commit -a -m "add"
git push origin master
goto exit



:03_visual_lisp

@echo -------------------------------------------------
@echo   03_visual_lisp
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/03_visual_lisp

git status
git add .
git commit -a -m "add"
git push origin master
goto exit


:04_PyhtonDemoDojang
@echo -------------------------------------------------
@echo   04_PyhtonDemoDojang
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/04_PyhtonDemoDojang
git status
git add .
git commit -a -m "add"
git push origin master
goto exit



:05_JAVA


@echo -------------------------------------------------
@echo   05_JAVA
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/05_JAVA
git status
git add .
git commit -a -m "add"
git push origin master

goto exit


:allpush

@echo -------------------------------------------------
@echo   d:/12_dev/01_Linux
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/01_Linux
git status
git add .
git commit -a -m "add"
git push origin master


@echo -------------------------------------------------
@echo   d:/12_dev/03_visual_lisp 
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/03_visual_lisp
git status
git add .
git commit -a -m "add"
git push origin master



@echo -------------------------------------------------
@echo   d:/12_dev/04_PyhtonDemoDojang 
@echo -------------------------------------------------
@echo

cd /d d:/12_dev/04_PyhtonDemoDojang
git status
git add .
git commit -a -m "add"
git push origin master


@echo -------------------------------------------------
@echo   d:/12_dev/05_JAVA
@echo -------------------------------------------------
@echo


cd /d d:/12_dev/05_JAVA
git status
git add .
git commit -a -m "add"
git push origin master


:exit


