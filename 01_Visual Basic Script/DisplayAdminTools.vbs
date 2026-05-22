Set objshell = CreateObject("Shell.Application")
Set objNS = objshell.namespace(&h2f)
Set colitems = objNS.items

For Each objitem In colitems
	WScript.Echo objitem.name
Next


