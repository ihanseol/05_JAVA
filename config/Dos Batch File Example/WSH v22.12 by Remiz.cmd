@echo off&mode con cols=74 lines=17
:admincheck
net session > nul 2> nul
if not "%errorlevel%" == "0"  (
echo.
echo.
echo 
echo.
echo  ������ �������� ������ �ּ���.
echo.
echo 
echo.
echo.
timeout /t 6 > nul
goto exit
)
set WSHver=22.12
title ������ �ʱ� ���� ����� v%WSHver% By Remiz
:main
@echo off&mode con cols=74 lines=46
cls
echo.
echo 
echo.
echo  [ ������ �ʱ� ���� ����� v%WSHver% By Remiz ]
echo.
echo 
echo.
echo.
echo  [1] �ִ� ���� ��� �ѱ� / ����
echo.
echo  [2] ��Ŭ�� �޴� �����ϱ�
echo.
echo  [3] ������ ����� ���� / �ѱ�
echo.
echo  [4] ������ ��ȭ�� ���� / �ѱ�
echo.
echo  [5] ������ ������Ʈ ���� / �ѱ�
echo.
echo  [6] ���� �ɼ� �������� / ���� �����ϱ�
echo.
echo  [7] ������̺�(OneDrive) / ��Ÿ��(Cortana) �����ϱ�
echo.
echo  [8] ������ �˸����� ��Ȱ��ȭ / Ȱ��ȭ
echo.
echo  [9] ������ �⺻ ���α׷� �����ϱ�
echo.
echo  [0] �ý��� ���� ȭ������ �����ϱ� (20H2���� �ý��� ���� UI �����)
echo.
echo  [B] �ٷΰ��� ������ ȭ��ǥ �߰� / ����
echo.
echo  [S] SSD ����ȭ (Superfetch, Windows Search ��Ȱ��ȭ)
echo.
echo  [A] Administrator �ְ� ������ ���� Ȱ��ȭ / ��Ȱ��ȭ
echo.
echo  [W] Windows10�� �������� ���� ��� ��Ȱ��ȭ
echo.
echo  [E] Windows ����� ��ȯ�ϱ�
echo.
echo  [U] ���� ��ƿ ��ġ�Ϸ� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾��� ������ �ּ��� ] : 
if "%menu%" == "1" goto economy
if "%menu%" == "2" goto rightmenu
if "%menu%" == "3" goto antion
if "%menu%" == "4" goto fw
if "%menu%" == "5" goto ub
if "%menu%" == "6" goto pwcf
if "%menu%" == "7" goto ctna
if "%menu%" == "8" goto push
if "%menu%" == "9" goto ba
if "%menu%" == "0" goto sys
if "%menu%" == "S" goto sopt
if "%menu%" == "s" goto sopt
if "%menu%" == "A" goto admin
if "%menu%" == "a" goto admin
if "%menu%" == "B" goto arow
if "%menu%" == "b" goto arow
if "%menu%" == "W" goto wx
if "%menu%" == "w" goto wx
if "%menu%" == "E" goto edi
if "%menu%" == "e" goto edi
if "%menu%" == "U" goto uti
if "%menu%" == "u" goto uti
goto main

:uti
@echo off&mode con cols=74 lines=52
cls
echo 
echo.
echo                   [ ���� ��ƿ ������ - 2022.12.14 ]
echo.
echo 
echo          ���ͳ� ������ / �޽��� / �䷻Ʈ
echo 
echo.
echo          [1] ���� ũ��                     [2] ���̹� ����
echo          [3] īī����                      [4] ��ũ��
echo          [5] qBittorrent                   [6] uTorrent
echo.
echo 
echo          �������� / �ٿ�ε� ���� / ��Ʈ��ũ
echo 
echo.
echo          [7] ������ HTTPS                  [8] �����
echo          [9] Internet Download Manager     [0] Anydesk
echo          [R] RaiDrive                      [L] VPN Gate Client
echo.
echo 
echo          ��� / ��ũ��� / ��ũû�� / ���� ����
echo 
echo.
echo          [E] Kaspersky Security Cloud      [A] Acronis True Image 2021
echo          [C] CCleaner                      [U] R-Studio
echo.
echo 
echo          �÷��̾� / ��� / ���� ������
echo 
echo.
echo          [P] ���÷��̾�                    [S] �������ڴ�
echo          [J] VLC Media Player              [K] 4K Video Downloader
echo          [I] ����                          [H] �ܺ�
echo          [V] Everything                    [D] SumatraPDF
echo          [M] BeyondCompare                 [T] Total Commander        
echo.
echo 
echo          ��Ÿ
echo 
echo.
echo          [N] NotePad++                     [B] BlueStacks
echo          [G] ����� ������                 [Y] StartAllBack
echo          [Q] Acrobat Pro DC
echo.
echo 
echo          [X] ���� �޴��� ����
echo 
echo.
set menu=
set /p menu= [ ��ġ�Ͻ� ���α׷��� ������ �ּ��� ] : 
if "%menu%" == "1" set uname=���� ũ�� & set uline=%~dp0remiz\ch\chrome.exe & goto utin1
if "%menu%" == "2" set uname=���̹� ���� & set uline=%~dp0remiz\wh\wh.exe & goto utin1
if "%menu%" == "3" set uname=īī���� & set uline=%~dp0remiz\ka\ka.exe & goto utin2
if "%menu%" == "4" set uname=��ũ�� & set uline=%~dp0remiz\to\to.exe & goto utin2
if "%menu%" == "5" xcopy /y /s /h "%~dp0remiz\qb\qBittorrent.lnk" "C:\Users\Public\Desktop\" & set uname=qBittorrent & set uline=%~dp0remiz\qb\qb.exe & goto utin2
if "%menu%" == "6" set uname=uTorrent & set uline=%~dp0remiz\ut\ut.exe & goto utin2
if "%menu%" == "7" set uname=������ HTTPS & set uline=%~dp0remiz\sn\sn.exe & goto utin2
if "%menu%" == "8" set uname=����� & set uline=%~dp0remiz\tm\tm.exe & goto utin2
if "%menu%" == "9" goto id
if "%menu%" == "0" set uname=Anydesk & set uline=%~dp0remiz\ad\ad.exe & goto utin2
if "%menu%" == "R" set uname=RaiDrive & set uline=%~dp0remiz\ra\ra.exe & goto utin1
if "%menu%" == "r" set uname=RaiDrive & set uline=%~dp0remiz\ra\ra.exe & goto utin1
if "%menu%" == "L" set uname=VPN Gate Client & set uline=%~dp0remiz\vpn\vpngate.exe & goto utin1
if "%menu%" == "l" set uname=VPN Gate Client & set uline=%~dp0remiz\vpn\vpngate.exe & goto utin1
if "%menu%" == "E" set uname=Kaspersky Security Cloud Free & set uline=%~dp0remiz\ks\ks.exe & goto utin1
if "%menu%" == "e" set uname=Kaspersky Security Cloud Free & set uline=%~dp0remiz\ks\ks.exe & goto utin1
if "%menu%" == "A" set uname=Acronis True Image 2021 & set uline=%~dp0remiz\ati\ati.exe & goto utin3
if "%menu%" == "a" set uname=Acronis True Image 2021 & set uline=%~dp0remiz\ati\ati.exe & goto utin3
if "%menu%" == "C" set uname=CCleaner & set uline=%~dp0remiz\cl\cl.exe & goto utin1
if "%menu%" == "c" set uname=CCleaner & set uline=%~dp0remiz\cl\cl.exe & goto utin1
if "%menu%" == "U" set uname=R-Studio & set uline=%~dp0remiz\rs\rs.exe & goto utin2
if "%menu%" == "u" set uname=R-Studio & set uline=%~dp0remiz\rs\rs.exe & goto utin2
if "%menu%" == "P" goto pp
if "%menu%" == "p" goto pp
if "%menu%" == "S" goto san
if "%menu%" == "s" goto san
if "%menu%" == "I" set uname=���� & set uline=%~dp0remiz\pk\pk.exe & goto utin2
if "%menu%" == "i" set uname=���� & set uline=%~dp0remiz\pk\pk.exe & goto utin2
if "%menu%" == "J" set uname=VLC Media Player & set uline=%~dp0remiz\vl\vl.exe & goto utin3
if "%menu%" == "j" set uname=VLC Media Player & set uline=%~dp0remiz\vl\vl.exe & goto utin3
if "%menu%" == "H" xcopy /y /s /h "%~dp0remiz\hv\�ܺ�.lnk" "C:\Users\Public\Desktop\" & set uname=�ܺ� & set uline=%~dp0remiz\hv\hv.exe & goto utin2
if "%menu%" == "h" xcopy /y /s /h "%~dp0remiz\hv\�ܺ�.lnk" "C:\Users\Public\Desktop\" & set uname=�ܺ� & set uline=%~dp0remiz\hv\hv.exe & goto utin2
if "%menu%" == "V" set uname=Everything & set uline=%~dp0remiz\ev\ev.exe & goto utin2
if "%menu%" == "v" set uname=Everything & set uline=%~dp0remiz\ev\ev.exe & goto utin2
if "%menu%" == "D" set uname=SumatraPDF & set uline=%~dp0remiz\pd\SumatraPDF-3.4.6-install.exe & goto utin2
if "%menu%" == "d" set uname=SumatraPDF & set uline=%~dp0remiz\pd\SumatraPDF-3.4.6-install.exe & goto utin2
if "%menu%" == "M" goto bc
if "%menu%" == "m" goto bc
if "%menu%" == "T" set uname=��ŻĿ�Ǵ� & set uline=%~dp0remiz\tt\tt.exe & goto utin1
if "%menu%" == "t" set uname=��ŻĿ�Ǵ� & set uline=%~dp0remiz\tt\tt.exe & goto utin1
if "%menu%" == "N" xcopy /y /s /h "%~dp0remiz\nt\Notepad++.lnk" "C:\Users\Public\Desktop\" & set uname=NotePad++ & set uline=%~dp0remiz\nt\nt.exe & goto utin2
if "%menu%" == "n" xcopy /y /s /h "%~dp0remiz\nt\Notepad++.lnk" "C:\Users\Public\Desktop\" & set uname=NotePad++ & set uline=%~dp0remiz\nt\nt.exe & goto utin2
if "%menu%" == "B" set uname=��罺�� & set uline=%~dp0remiz\bl\bl.exe & goto bls
if "%menu%" == "b" set uname=��罺�� & set uline=%~dp0remiz\bl\bl.exe & goto bls
if "%menu%" == "G" xcopy /y /s /h "%~dp0remiz\mo\mo.exe" "C:\Users\Public\Downloads\" & xcopy /y /s /h "%~dp0remiz\mo\����� ������.lnk" "C:\Users\Public\Desktop\" & set uname=����� ������ & set uline=C:\Users\Public\Downloads\mo.exe & goto utin1
if "%menu%" == "g" xcopy /y /s /h "%~dp0remiz\mo\mo.exe" "C:\Users\Public\Downloads\" & xcopy /y /s /h "%~dp0remiz\mo\����� ������.lnk" "C:\Users\Public\Desktop\" & set uname=����� ������ & set uline=C:\Users\Public\Downloads\mo.exe & goto utin1
if "%menu%" == "Y" set uname=StartAllBack & set uline=%~dp0remiz\st\st.exe & goto utin3
if "%menu%" == "y" set uname=StartAllBack & set uline=%~dp0remiz\st\st.exe & goto utin3
if "%menu%" == "K" set uname=4K Video Downloader & set uline=%~dp0remiz\kv\kv.exe & goto utin2
if "%menu%" == "k" set uname=4K Video Downloader & set uline=%~dp0remiz\kv\kv.exe & goto utin2
if "%menu%" == "Q" goto abp
if "%menu%" == "q" goto abp
if "%menu%" == "X" goto main
if "%menu%" == "x" goto main
goto uti

:utin1
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  %uname%��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
start %uline%
echo 
echo.
echo  %uname%��ġ�� �Ϸ�Ǿ����ϴ�.
echo.
echo 
echo.
echo.
timeout /t 2 >nul
goto uti

:utin2
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  %uname%��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
"%uline%" /S /I
echo 
echo.
echo  %uname%��ġ�� �Ϸ�Ǿ����ϴ�!
echo.
echo 
echo.
echo.
timeout /t 2 >nul
goto uti

:utin3
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  %uname%��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
"%uline%" /S
echo 
echo.
echo  %uname%��ġ�� �Ϸ�Ǿ����ϴ�!
echo.
echo 
echo.
echo.
timeout /t 2 >nul
goto uti

:bls
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  ��罺�� ��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
%uline%
c:\atemp\bl\BlueStacksInstaller_5.5.101.1002.exe
echo 
echo.
echo  ��罺�� ��ġ�� �Ϸ�Ǿ����ϴ�!
echo.
echo 
echo.
echo.
timeout /t 2 >nul
rd /s /q "c:\atemp"
goto uti

:abp
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  Acrobat Pro DC ��(��) ��ġ�ϴ� ���Դϴ�... (���� ���� �ɸ� �� �ֽ��ϴ�)
echo.
echo 
echo.
echo.
"%~dp0remiz\ab\ab.exe" -y -nr -gm2
"%TEMP%\AdobeAcrobat\AcrobatHelper.exe" /S /AUTO
RD /S /Q "%TEMP%\AdobeAcrobat"
echo 
echo.
echo  Acrobat Pro DC ��ġ�� �Ϸ�Ǿ����ϴ�!
echo.
echo 
echo.
echo.
echo 
echo.
echo  Acrobat Pro DC ������ �����մϴ�...
echo.
echo 
echo.
echo.
xcopy /y /s /h "%~dp0remiz\ab\amtlib.dll" "C:\Program Files\Adobe\Acrobat DC\Acrobat\"
timeout /t 2 >nul
rd /s /q "c:\atemp"
goto uti

:san
xcopy /y /s /h "%~dp0remiz\sa\sa.exe" "C:\"
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  �������ڴ� ��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
"C:\sa.exe" /S /I
del /s /q "C:\sa.exe" /f
goto uti

:bc
xcopy /y /s /h "%~dp0remiz\bc\BeyondCompare.exe" "C:\Users\Public\Desktop\"
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  BeyondCompare ��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
timeout /t 2 >nul
goto uti

:id
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  Internet Download Manager ��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
"%~dp0remiz\id\id.exe" /S /EN
timeout /t 2 >nul
goto uti

:pp
@echo off&mode con cols=74 lines=23
cls
echo.
echo.
echo 
echo.
echo  ���÷��̾� ��(��) ��ġ �մϴ�...
echo.
echo 
echo.
echo.
"%~dp0remiz\pp\pp.exe" /S /I /Y=All /A=Default /C
"%~dp0remiz\pp\oc.exe" /S /I
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "AllowMultiple" /t REG_DWORD /d "0" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "AutoDownloadFile" /t REG_DWORD /d "0" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "CheckAutoUpdate" /t REG_DWORD /d "0" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "LanguageIni" /t REG_SZ /d "Korean.ini" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "RememberPosition" /t REG_DWORD /d "1" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "RememberPositionAudio" /t REG_DWORD /d "1" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "UseMagWindow" /t REG_DWORD /d "0" /f
reg add "HKEY_CURRENT_USER\Software\Daum\PotPlayerMini\Settings" /v "UseTooltip" /t REG_DWORD /d "0" /f
cls
echo.
echo.
echo 
echo.
echo  ���÷��̾� ��ġ�� �Ϸ�Ǿ����ϴ�!
echo.
echo 
echo.
echo.
timeout /t 2 >nul
goto uti

:arow
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ �ٷΰ��� ������ ȭ��ǥ ]
echo.
echo 
echo.
echo.
echo  [1] �ٷΰ��� ������ ȭ��ǥ �����ϱ�
echo.
echo  [2] �ٷΰ��� ������ ȭ��ǥ �߰��ϱ� (����)
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto delarow
if "%menu%" == "2" goto addarow
if "%menu%" == "3" goto main
goto arow

:delarow
cls
echo.
echo 
echo.
echo  �ٷΰ��� ������ ȭ��ǥ�� ���� ���Դϴ�...
echo.
echo 
echo.
xcopy /y /s /h "%~dp0remiz\bk\blank.ico" "%SystemRoot%\system32\"
taskkill /f /im explorer.exe
REG ADD "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d %SystemRoot%\system32\blank.ico /f
start explorer.exe
cls
echo.
echo 
echo.
echo  �ٷΰ��� ������ ȭ��ǥ�� ���� ���Դϴ�...
echo.
echo 
echo.
echo.
echo 
echo.
echo  �ٷΰ��� ������ ȭ��ǥ�� �����Ͽ����ϴ�!
echo.
echo 
echo.
pause
goto main

:addarow
cls
echo.
echo 
echo.
echo  �ٷΰ��� ������ ȭ��ǥ�� �߰�(����) ���Դϴ�...
echo.
echo 
echo.
taskkill /f /im explorer.exe
attrib "%userprofile%\appdata\local\iconcache.db" -s -r -h
del /q "%userprofile%\appdata\local\iconcache.db"
del /q "%SystemRoot%\system32\blank.ico"
reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer /v "Max Cached Icons" /t REG_SZ /d 4096 /f
reg delete "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /f
start explorer.exe
cls
echo.
echo 
echo.
echo  �ٷΰ��� ������ ȭ��ǥ�� �߰�(����) ���Դϴ�...
echo.
echo 
echo.
echo.
echo 
echo.
echo  �ٷΰ��� ������ ȭ��ǥ�� �߰�(����)�Ͽ����ϴ�!
echo.
echo 
echo.
pause
goto main

:sopt
@echo off&mode con cols=74 lines=27
cls
echo.
echo 
echo.
echo  SSD ����ȭ�� �����մϴ�...
echo.
echo 
echo.
net stop SysMain
sc config SysMain start=disabled
net stop WSearch
sc config WSearch start=disabled
echo.
echo 
echo.
echo  SSD ����ȭ�� �Ϸ�Ǿ����ϴ�!
echo.
echo 
echo.
pause
goto main

:fw
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ ������ ��ȭ�� ]
echo.
echo 
echo.
echo.
echo  [1] ������ ��ȭ�� �ѱ�
echo.
echo  [2] ������ ��ȭ�� ���� (����)
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto fon
if "%menu%" == "2" goto foff
if "%menu%" == "3" goto main
goto fw

:fon
netsh advfirewall set allprofiles state on
cls
echo.
echo 
echo.
echo  [ ������ ��ȭ�� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:foff
netsh advfirewall set allprofiles state off
cls
echo.
echo 
echo.
echo  [ ������ ��ȭ�� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:ctna
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ ������̺�(OneDrive) / ��Ÿ��(Cortana) �����ϱ� ]
echo.
echo 
echo.
echo.
echo  [1] ������̺�(OneDrive) �����ϱ�
echo.
echo  [2] ��Ÿ��(Cortana) �����ϱ�
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto onedi
if "%menu%" == "2" goto cordi
if "%menu%" == "3" goto main
goto ctna

:onedi
@echo off&mode con cols=74 lines=39
netsh advfirewall set allprofiles state on
cls
set x86="%SYSTEMROOT%\System32\OneDriveSetup.exe"
set x64="%SYSTEMROOT%\SysWOW64\OneDriveSetup.exe"
echo.
echo 
echo.
echo  ������̺�(OneDrive) ���Ű� ���۵˴ϴ�...
echo.
echo 
echo.
taskkill /f /im OneDrive.exe > NUL 2>&1
ping 127.0.0.1 -n 5 > NUL 2>&1
echo.
echo 
echo.
echo  OneDrive ���� ���μ��� �ݴ� ��... (���� ���� �ɸ� �� �ֽ��ϴ�)
echo.
echo 
echo.
if exist %x64% (
%x64% /uninstall
) else (
%x86% /uninstall
)
ping 127.0.0.1 -n 5 > NUL 2>&1
echo.
echo 
echo.
echo  OneDrive ���� ���� ���� ��...
echo.
echo 
timeout /t 2 >nul
echo.
rd "%USERPROFILE%\OneDrive" /Q /S > NUL 2>&1
rd "C:\OneDriveTemp" /Q /S > NUL 2>&1
rd "%LOCALAPPDATA%\Microsoft\OneDrive" /Q /S > NUL 2>&1
rd "%PROGRAMDATA%\Microsoft OneDrive" /Q /S > NUL 2>&1 
echo.
echo 
echo.
echo  OneDrive ���� ������Ʈ�� ���� ���� ��...
echo.
echo 
timeout /t 2 >nul
REG DELETE "HKEY_CLASSES_ROOT\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" /f > NUL 2>&1
REG DELETE "HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" /f > NUL 2>&1
echo.
echo.
echo 
echo.
echo  OneDrive�� ���������� �����Ͽ����ϴ�!
echo.
echo 
echo.
echo.
pause
goto ctna

:cordi
@echo off&mode con cols=74 lines=25
netsh advfirewall set allprofiles state off
cls
echo.
echo 
echo.
echo  ��Ÿ��(Cortana) ���Ű� ���۵˴ϴ�...
echo.
echo 
echo.
echo.
echo 
echo.
echo  Cortana ���� ��...
echo.
echo 
powershell "Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage"
timeout /t 2 >nul
echo.
echo.
echo 
echo.
echo  Cortana�� ���������� �����Ͽ����ϴ�!
echo.
echo 
echo.
echo.
pause
goto ctna

:push
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ ������ �˸����� ]
echo.
echo 
echo.
echo.
echo  [1] ������ �˸����� Ȱ��ȭ
echo.
echo  [2] ������ �˸����� ��Ȱ��ȭ
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto pushon
if "%menu%" == "2" goto pushoff
if "%menu%" == "3" goto main
goto push

:pushon
reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\PushNotifications" /v "ToastEnabled" /t REG_DWORD /d "1" /f
cls
echo.
echo 
echo.
echo  [ ������ �˸����� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo. 
pause
goto main

:pushoff
reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\PushNotifications" /v "ToastEnabled" /t REG_DWORD /d "0" /f
cls
echo.
echo 
echo.
echo  [ ������ �˸����� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo. 
pause
goto main

:pwcf
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ ���� �ɼ� ]
echo.
echo 
echo.
echo.
echo  [1] ���� ����
echo.
echo  [2] ���� (����)
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto bal
if "%menu%" == "2" goto per
if "%menu%" == "3" goto main
goto pwcf

:bal
POWERCFG -SETACTIVE 381b4222-f694-41f0-9685-ff5bb260df2e
POWERCFG /Change /standby-timeout-ac 0
POWERCFG /Change /disk-timeout-ac 0
cls
echo.
echo 
echo.
echo  [ ���� �ɼ�: ���� ���� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:per
POWERCFG -SETACTIVE 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
POWERCFG /Change /standby-timeout-ac 0
POWERCFG /Change /disk-timeout-ac 0
cls
echo.
echo 
echo.
echo  [ ���� �ɼ� : ���� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:economy
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ �ִ� ���� ��� ]
echo.
echo 
echo.
echo.
echo  [1] �ִ� ���� ��� �ѱ�
echo.
echo  [2] �ִ� ���� ��� ���� (����)
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto make
if "%menu%" == "2" goto delete
if "%menu%" == "3" goto main
goto economy

:make
powercfg -h on
cls
echo.
echo 
echo.
echo  [ �ִ� ���� ��� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:delete
powercfg -h off
cls
echo.
echo 
echo.
echo  [ �ִ� ���� ��� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:rightmenu
@echo off&mode con cols=74 lines=25
cls
echo.
echo 
echo.
echo  [ ��Ŭ�� �޴� ]
echo.
echo 
echo.
echo.
echo  [1] ��11 ��Ŭ�� �޴� ���������� �����ϱ� (����)
echo.
echo  [2] ��11 ��Ŭ�� �޴� �⺻������� �ǵ�����
echo.
echo  [3] ��Ŭ�� �޴� "������" ���̱� (����)
echo.
echo  [4] ��Ŭ�� �޴� "������" ���߱�
echo.
echo  [5] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto righta11
if "%menu%" == "2" goto rightd11
if "%menu%" == "3" goto rightadd
if "%menu%" == "4" goto rightdel
if "%menu%" == "5" goto main
goto rightmenu

:righta11
reg add "HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /t REG_SZ /f
reg add "HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /t REG_SZ /d "" /f
cls
echo.
echo 
echo.
echo  [ ��11 ��Ŭ�� �޴� ���������� �����ϱ� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ������ ������� ���������� ����˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:rightd11
reg delete "HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
cls
echo.
echo 
echo.
echo  [ ��11 ��Ŭ�� �޴� �⺻������� �ǵ����� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:rightadd
reg add "HKEY_CLASSES_ROOT\DesktopBackground\Shell\Control Panel" /t REG_SZ /d "������" /f
reg add "HKEY_CLASSES_ROOT\DesktopBackground\Shell\Control Panel" /v "icon" /t REG_SZ /d "Control.exe" /f
reg add "HKEY_CLASSES_ROOT\DesktopBackground\Shell\Control Panel\command" /t REG_SZ /d "Control.exe" /f
cls
echo.
echo 
echo.
echo  [ ��Ŭ�� �޴� "������" ���̱� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:rightdel
reg delete "HKEY_CLASSES_ROOT\DesktopBackground\Shell\Control Panel" /f
cls
echo.
echo 
echo.
echo  [ ��Ŭ�� �޴� "������" ���߱� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:ub
start %~dp0remiz\ub\Wub.exe
goto main

:ba
start %~dp0remiz\ba\ba.exe
goto main

:antion
start %~dp0remiz\de\dControl.exe
goto main

:admin
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ �ְ� ������(Administrator) ���� ���� ]
echo.
echo 
echo.
echo.
echo  [1] Administrator �ְ� ������ ���� Ȱ��ȭ �ϱ�
echo.
echo  [2] Ȱ��ȭ�� Administrator �ְ� ������ ���� ��Ȱ��ȭ �ϱ�
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto a
if "%menu%" == "2" goto b
if "%menu%" == "3" goto main
goto admin

:a
net user administrator /active:yes
cls
echo.
echo 
echo.
echo  [ �ְ� ������(Administrator) ���� ���� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:b
net user Administrator /active:no
cls
echo.
echo 
echo.
echo  [ �ְ� ������(Administrator) ���� ���� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:sys
@echo off&mode con cols=74 lines=21
cls
echo.
echo 
echo.
echo  [ �ý��� ���� ȭ������ �����ϱ� ]
echo.
echo 
echo.
echo.
echo  [1] ���� �ý��� ���� ȭ������ �����ϱ� (���� �ý��� ���� ȭ��)
echo.
echo  [2] ���ο� �ý��� ���� ȭ������ �����ϱ� (20H2 ���� �ٲ� �� ȭ��)
echo.
echo  [3] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ���Ͻô� �۾� ��ȣ�� �Է� �� ����(Enter)Ű�� �����ּ��� ] : 
if "%menu%" == "1" goto osy
if "%menu%" == "2" goto nsy
if "%menu%" == "3" goto main
goto sys

:osy
@cd /d %~dp0remiz\ti
@if /i "%PROCESSOR_ARCHITECTURE%"=="x86" (set bit=x86) else (set bit=x64)
@if exist %bit%\remiz.exe path %bit%\;%path%
remiz.exe -U:T reg.exe add HKLM\SYSTEM\ControlSet001\Control\FeatureManagement\Overrides\0\2093230218 /v EnabledState /t REG_DWORD /d "1" /f
cls
echo.
echo 
echo.
echo  [ �ý��� ���� ȭ������ �����ϱ� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:nsy
@cd /d %~dp0remiz\ti
@if /i "%PROCESSOR_ARCHITECTURE%"=="x86" (set bit=x86) else (set bit=x64)
@if exist %bit%\remiz.exe path %bit%\;%path%
remiz.exe -U:T reg.exe add HKLM\SYSTEM\ControlSet001\Control\FeatureManagement\Overrides\0\2093230218 /v EnabledState /t REG_DWORD /d "2" /f
cls
echo.
echo 
echo.
echo  [ �ý��� ���� ȭ������ �����ϱ� ]
echo.
echo 
echo.
echo.
echo 
echo.
echo  ���������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:edi
@echo off&mode con cols=74 lines=25
cls
echo.
echo 
echo.
echo  [ ������10 ����� ��ȯ�ϱ� ]
echo.
echo 
echo.
echo.
echo  [1] Professional ��������� ��ȯ
echo.
echo  [2] Professional Workstation ��������� ��ȯ
echo.
echo  [3] Education ��������� ��ȯ
echo.
echo  [4] Enterprise ��������� ��ȯ
echo.
echo  [5] ���� �޴��� ����
echo.
echo.
echo 
echo.
set menu=
set /p menu= [ ��ȯ�Ͻ� ������� �������ּ��� ] : 
if "%menu%" == "1" goto fpro
if "%menu%" == "2" goto fwork
if "%menu%" == "3" goto fedu
if "%menu%" == "4" goto fent
if "%menu%" == "5" goto main
goto edi

:fpro
cscript /nologo %SystemRoot%\System32\slmgr.vbs /ipk VK7JG-NPHTM-C97JM-9MPGT-3V66T > nul
echo.
echo.
echo 
echo.
echo  Pro ��������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:fwork
cscript /nologo %SystemRoot%\System32\slmgr.vbs /ipk DXG7C-N36C4-C4HTG-X4T3X-2YV77> nul
echo.
echo.
echo 
echo.
echo  Pro Work ��������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:fedu
cscript /nologo %SystemRoot%\System32\slmgr.vbs /ipk YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY > nul
echo.
echo.
echo 
echo.
echo  Edu ��������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:fent
cscript /nologo %SystemRoot%\System32\slmgr.vbs /ipk XGVPP-NMH47-7TTHJ-W3FW7-8HV2C > nul
echo.
echo.
echo 
echo.
echo  Ent ��������� ����Ǿ����ϴ�. �ý��� ����� �� �ݿ��˴ϴ�.
echo.
echo 
echo.
echo.
pause
goto main

:wx
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection" /v "AllowTelemetry" /t REG_DWORD /d "0" /f
cls
echo.
echo.
echo 
echo.
echo  Windows10�� ���� ���� ���� ����� ��Ȱ��ȭ ���Դϴ�...
echo.
echo 
timeout /t 2 >nul
echo.
echo.
echo 
echo.
echo  Windows10�� ���� ���� ���� ����� ���������� ��Ȱ��ȭ �Ǿ����ϴ�!
echo.
echo 
echo.
echo.
pause
goto main