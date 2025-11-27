# $lib/base/datatypes/string: trimEnd

Function `trimEnd` used to trim on end string
Return type: `string`

Signature:

```ql
function trimEnd()
```

Example:

```ql
let str = String.new("  HELLO!     ");

// Will return '  HELLO!'
str.trimEnd();
```
