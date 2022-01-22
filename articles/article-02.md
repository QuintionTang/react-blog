---
title: 使用 zx 库在 Node 中编写 Shell 脚本
description: zx.js，一个可以使用 Node.js 编写 Shell 脚本的工具。在本文中，将介绍如何来使用 Google 的 zx 库编写 Shell 脚本。
date: 2022-01-20
tags:
    - HTML
    - CSS
    - REACT
---

### Shell 脚本

创建一个 shell 脚本，即一个由 shell 执行的脚本，比如 Bash 或 zsh，是用来实现自动化重复任务的常见方法，特别是对于运维人员最熟悉了。对于前端工程师来说使用 Node.js 编写 shell 脚本是个不错的选择，因为它提供了许多核心模块，并可以导入前端其他的脚本库，降低学习成本。

如果不借助 `zx.js` 想尝试编写一个在 Node.js 下运行的 shell 脚本，可能会发现它并不像希望的那样流畅。需要为子进程编写特殊处理，注意转义命令行参数，然后使用标准输出 `stdout` 和标准错误 `stderr`，它不是特别直观，并且使用 shell 脚本编写变得非常笨拙。

Bash shell 脚本语言是编写 `shell` 脚本的最佳选择，不需要编写代码来处理子进程，并且它具有用于处理 `stdout` 和 `stderr` 的内置语言特性。但是用 Bash 编写 `shell` 脚本也不是那么容易，语法可能相当混乱，使得实现逻辑或处理提示用户输入之类的事情变得不那么方便。

Google 的 `zx.js` 库有助于使用 Node.js 高效且愉快地编写 `shell` 脚本。

官方网站：[https://github.com/google/zx#-zx](https://github.com/google/zx#-zx)

### 安装

对于前端工程师来说，安装一个依赖是家常便饭，运行以下脚本：

```
npm install zx
```

### 使用

Google 的 `zx.js` 提供了封装子进程的创建以及从这些进程处理 `stdout` 和 `stderr` 的函数。下面将使用的主要函数是 `$` 函数，使用 `zx.js` 规定脚本写入扩展名为 `.mjs` 的文件中，以便能够在顶层使用 `await`。如果习惯于 `.js` 扩展名，请将脚本包装在类似 `void async function () {...}()` 中。
