# $lib/base/datatypes/string: trimStart

Function `trimStart` used to trim on start string
Return type: `string`

Signature:

```ql
function trimStart()
```

Example:

```ql
let str = String.new("  HELLO!     ");

// Will return 'HELLO!     '
str.trimStart();
```
