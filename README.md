# folder-print

## 介绍(Description)

快速生成文件夹目录结构，支持定义目录层级，支持生成到 markdown 文件。  
Quickly generate folder directory structure, support for defining directory hierarchy, support for generating to markdown files.

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

### 输出当前目录的树形结构：(默认输出最大层级为 10)

Output the tree structure of the current directory: (default output maximum level is 10)

```sh
fp
# or
folder-print
# 免安装(No installation)
npx folder-print
```

![](https://assets.fedtop.com/picbed/202210182135912.png)

### 指定输出最大层级

(Specify the maximum level of output)

```sh
# 指定输出最大层级(Specify the maximum level of output)
fp -d 0
# or
folder-print -d 0
# 免安装(No installation)
npx folder-print -d 0
```

指定输出最大层级  
Specify the maximum level of output  
![](https://assets.fedtop.com/picbed/202210182134984.png)

### 将输出结果保存到文件中

Save the output result to a file

```sh
# 将输出结果保存到文件中(Save the output result to a file)
fp -p
# or
folder-print -p
# 免安装(No installation)
npx folder-print -p
```

![](https://assets.fedtop.com/picbed/202210191352186.png)

<!-- 输出指定目录的树形结构：
```sh
tree /path/to/dir
# or
fp /path/to/dir
``` -->
