# $lib/base/datatypes/array: insert

Function `insert` used to insert item by index
Return type: `void`

Signature:

```ql
function removeAt(let index)
```

Example:

```ql
let arr = Array.new(["Hello World!", 5]);

// Collection is '["Hello World!", "new value" 5]'
arr.insert(1, "new value");
```
