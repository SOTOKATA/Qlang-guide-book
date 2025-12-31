# Установка инструментария для работы

## Создание проекта

Перед установкой инструментария следует создать C# проект типа "Class Library".

Ссылка на инструкции по созданию:

- Через консоль:
- - Просто напишите в консоль команду: `dotnet new classlib` в директории с названием библиотеки.
- [Через Visual Studio](https://learn.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio)
- [Через Rider](https://www.jetbrains.com/help/rider/Creating_and_Opening_Projects_and_Solutions.html)

## Добавление

После этого используя [NuGet](https://www.nuget.org/) пакеты следует добавить в проект пакет под названием "Qlang".

- Через консоль: `dotnet add package Qlang`
- Через Rider: [Инструкция](https://www.jetbrains.com/help/rider/Using_NuGet.html#restoring)
- Через Visual Studio: [Инструкция](https://learn.microsoft.com/en-us/nuget/quickstart/install-and-use-a-package-in-visual-studio)

Теперь можна переходить к [Созданию библиотеки](creation.md).
