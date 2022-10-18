# folder-print

## 介绍(Description)

一个用于打印当前目录树形结构的终端命令行工具。

A terminal command line tool for printing the tree structure of the current directory.

## 示例(Example)

输出当前目录的树形结构：(默认输出最大层级为 10)  
Output the tree structure of the current directory: (default output maximum level is 10)
![](https://assets.fedtop.com/picbed/202210182003825.png)

指定输出最大层级  
Specify the maximum level of output
![](https://assets.fedtop.com/picbed/202210182002619.png)

## 安装(Install)

```sh
npm i folder-print -g
```

当然你也可以直接使用 npx 运行

Of course you can also run it directly with npx

```sh
npx folder-print
```

## 使用(usage)

直接输出当前目录的树形结构：  
Directly output the tree structure of the current directory:

```sh
# 默认输出最大层级为 10(default output maximum level is 10)
fp
# 指定输出最大层级(Specify the maximum level of output)
fp -d 0

# or
folder-print
folder-print -d 5
```

<!-- 输出指定目录的树形结构：

```sh
tree /path/to/dir
# or
fp /path/to/dir
``` -->

![](https://assets.fedtop.com/picbed/202210182003825.png)

![](https://assets.fedtop.com/picbed/202210182002619.png)
