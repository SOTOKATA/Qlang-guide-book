# $lib/base/datatypes/string: subString

Function `subString` used to cut string
Return type: `string`

Signature:

```ql
function subString(let startPos, let length)
```

Example:

```ql
let str = String.new("HELLO!");

// Will return 'EL'
str.subString(1, 2);
```
