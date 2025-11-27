# $lib/base/parser.ql: asFloat

***! Warning !***
Is *internal* function! Don't use in default language
This function is needed for communication between C# and Qlang and is used by library developers.

Function `asFloat` used to parse `object` to Double

Signature:

```ql
function asFloat(let object)
```

Example (will return Double type):

```ql
let var = 55;
Parser.asFloat(var);
```
