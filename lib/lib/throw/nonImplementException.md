# $lib/base/throw.ql: parseException

Function `nonImplementException` used to throw non implement object exception
It's break all program

Signature:

```ql
function nonImplementException()
```

Example:

```ql
function main(): {
    func();
}

function func(): {
    Throw.nonImplementException();
}
```

```text
QlNonImplementException: This function or object is not implement
at:
    main(), ln: 1
```
