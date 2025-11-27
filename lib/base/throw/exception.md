# $lib/base/throw.ql: exception

Function `exception` used to throw exception
It's break all program

Signature:

```ql
function exception(let message)
```

Example:

```ql
Throw.exception("Exception example")
```

```text
QlException: Exception example
at:
    main(), ln: 1
```
