:: kernel32.dll 교체권한으로 검색
::

@echo off

takeown /f c:\windows\system32
cacls system32 /E /G minhwasoo:F

