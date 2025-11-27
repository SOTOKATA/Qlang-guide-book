# $lib/base/datatypes/string: trim

Function `trim` used to trim string
Return type: `string`

Signature:

```ql
function trim()
```

Example:

```ql
let str = String.new("  HELLO!     ");

// Will return 'HELLO!'
str.trim();
```
