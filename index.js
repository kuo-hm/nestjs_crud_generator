#!/usr/bin/env node

import figlet from "figlet";
import * as fs from "fs";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import createDirectoryContents from "./createDirectoryContents.js";

const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const colors = {
  gold: "#FFD700",
  crimson: "#DC143C",
};
const QUESTIONS = [
  {
    name: "model-name",
    type: "input",
    message: "Model name:",
    validate: function (input) {
      if (/^([A-Za-z\-])+$/.test(input)) return true;
      else return "Model name may only include letters and underscore.";
    },
  },
];

const useGradient = async (opt) => {
  const titleColor = opt.colors ?? Object.values(colors);
  const title = gradient(titleColor)(opt.title ?? "");
  console.log(title);
};

async function askProjectName() {
  inquirer.prompt(QUESTIONS).then((answers) => {
    const projectName = answers["model-name"];
    const templatePath = `${__dirname}/templates/model`;
    const targetPath = `${CURR_DIR}/src/models/${projectName}`;

    fs.mkdirSync(targetPath, { recursive: true });

    createDirectoryContents(templatePath, projectName, projectName);
  });
}
async function welcome() {
  const figletConfig = {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  };

  useGradient({
    title: figlet.textSync("NestJS CRUD Generator", figletConfig),
  });
  await sleep(1000);
}

await welcome();
await askProjectName();
