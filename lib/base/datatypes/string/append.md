# $lib/base/datatypes/string: append

Function `append` used to append collection to string
Return type: `void`

Signature:

```ql
function append(let collection)
```

Example:

```ql
let str = String.new("Hello ");
str.append(["World!"]);

// Will return 'Hello World!'
str.toString();
```
