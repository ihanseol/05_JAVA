
@echo off

dir /b *.bat *.cmd

echo this is a test.
echo this is a echo.

for /f "usebackq" %%x in ( `dir /b *.bat *.cmd 2^>nul` ) do (
	if %ERRORLEVEL% NEQ 0 (
		    echo "Calling '%%x'..."
		    call "%%x"
	)
)



