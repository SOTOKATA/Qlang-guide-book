# $lib/base/datatypes/array: setAt

Function `setAt` used to set value by index
Return type: `void`

Signature:

```ql
function setAt(let index, let item)
```

Example:

```ql
let arr = Array.new([1, 5]);

// Collection is '[0, 5]'
arr.setAt(0, 0);
```
