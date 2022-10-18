#! /usr/bin/env node

import fs from "fs";
import path from "path";
import { Command } from "commander";
import chalk from "chalk";

// import packageJsonData from "../package.json" assert { type: "json" };
// console.log("🚀🚀🚀 / version", packageJsonData);

const __dirname = path.resolve();
const { version } = JSON.parse(fs.readFileSync("package.json", "utf8"));
const program = new Command();

program
  .name("folder-print")
  .description("Using the CLI to generate the tree structure of the directory")
  .version(version, "-v, --version, -V");
program.option(
  "-d, --depth <type>",
  "Set the depth of the folder to be traversed",
  "10"
);
// program
//   .command("list")
//   .alias("ls")
//   .description("List all the registries")
//   .action(test);
// program.parse();
program.parse(process.argv);

// 需要过滤的文件夹
const filterDir = ["node_modules", ".git", ".idea", "dist", "build", ".vscode"];

// 打印项目名称
console.log(
  "🌸",
  chalk.blue(__dirname.split("/")[__dirname.split("/").length - 1])
);

// 遍历文件夹，打印目录结构
export function printTree(dir = __dirname, spaceNum) {
  // 超出深度，不再遍历
  if (spaceNum > program.opts().depth) {
    return;
  }
  // 读取文件夹
  const files = fs.readdirSync(dir);
  // 遍历文件夹
  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      // const str = `${spaceNum !== 0 ? "" : ""}${generateSpace(spaceNum)}${
      //   index === files.length - 1 ? "└── " : "├── "
      // }${file}`;
      const str = `${generateSpace(spaceNum)}${
        index === files.length - 1 ? "└─ " : "├─ "
      }${file}`;
      log(str);
    } else if (stats.isDirectory()) {
      // 过滤掉node_modules等文件夹
      if (filterDir.includes(file)) {
        return;
      }
      const str = `${generateSpace(spaceNum)}${
        index === files.length - 1 ? "└─ " : "├─ "
      }${chalk.hex("#4dc4ff").bold(file)}`;
      log(str);
      printTree(filePath, spaceNum + 1);
    }
  });
}

// 生成指定的空格
function generateSpace(num) {
  let space = ``;
  for (let i = 0; i < num; i++) {
    space += `   `;
  }
  return space;
}

// 打印内容
function log(val) {
  console.log(val);
}

printTree(__dirname, 0);
