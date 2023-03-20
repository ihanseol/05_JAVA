:: @echo off

@echo off
SET CMD=%~1

IF "%CMD%" == "" (
  GOTO allpush
)

if "%CMD%" == "1" goto 01_Linux
if "%CMD%" == "2" goto 02_Excel
if "%CMD%" == "22" goto 02_Excel2
if "%CMD%" == "3" goto 03_visual_lisp
if "%CMD%" == "4" goto 04_PyhtonDemoDojang
if "%CMD%" == "5" goto 05_JAVA


@echo on



:01_Linux
@echo.
@echo -------------------------------------------------
@echo   01_Linux 
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/01_Linux

git status
git add .
git commit -m "add"
git push 
goto exit


:02_Excel

@echo.
@echo -------------------------------------------------
@echo   02_Excel
@echo -------------------------------------------------
@echo.

cd /d d:/12_dev/02_Excel

git status
git add .
git commit -m "add"
git push 
goto exit

:02_Excel2

@echo.
@echo -------------------------------------------------
@echo   02_Excel2
@echo -------------------------------------------------
@echo.

cd /d d:/12_dev/02_Excel2

git status
git add .
git commit -m "add"
git push
goto exit


:03_visual_lisp

@echo.
@echo -------------------------------------------------
@echo   03_visual_lisp
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/03_visual_lisp

git status
git add .
git commit -m "add"
git push 
goto exit


:04_PyhtonDemoDojang
@echo.
@echo -------------------------------------------------
@echo   04_PyhtonDemoDojang
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/04_PyhtonDemoDojang
git status
git add .
git commit -m "add"
git push 
goto exit



:05_JAVA

@echo.
@echo -------------------------------------------------
@echo   05_JAVA
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/05_JAVA
git status
git add .
git commit -m "add"
git push 

goto exit




:allpush

@echo.
@echo -------------------------------------------------
@echo   d:/12_dev/01_Linux
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/01_Linux
git status
git add .
git commit -m "add"
git push 



@echo.
@echo -------------------------------------------------
@echo   02_Excel
@echo -------------------------------------------------
@echo.

cd /d d:/12_dev/02_Excel

git status
git add .
git commit -m "add"
git push 
goto exit

:02_Excel2

@echo.
@echo -------------------------------------------------
@echo   02_Excel2
@echo -------------------------------------------------
@echo.

cd /d d:/12_dev/02_Excel2

git status
git add .
git commit -m "add"
git push


@echo.
@echo -------------------------------------------------
@echo   d:/12_dev/03_visual_lisp 
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/03_visual_lisp
git status
git add .
git commit  -m "add"
git push 



@echo.
@echo -------------------------------------------------
@echo   d:/12_dev/04_PyhtonDemoDojang 
@echo -------------------------------------------------
@echo.

cd /d d:/12_dev/04_PyhtonDemoDojang
git status
git add .
git commit  -m "add"
git push 


@echo.
@echo -------------------------------------------------
@echo   d:/12_dev/05_JAVA
@echo -------------------------------------------------
@echo.


cd /d d:/12_dev/05_JAVA
git status
git add .
git commit  -m "add"
git push 


:exit


