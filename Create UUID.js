// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// always-run-in-app: true; icon-color: deep-brown;
// icon-glyph: magic;
var id = UUID

stringed = id.string()

console.log(stringed)
msg = new Alert()
somestring = ""

Pasteboard.copyString(stringed)

hello = " has been copied to clipboard"

output = stringed + hello

msg.message = output
msg.present(somestring)

return(output)
