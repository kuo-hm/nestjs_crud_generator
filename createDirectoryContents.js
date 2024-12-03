import * as fs from "fs";
import * as path from "path";

const CURR_DIR = process.cwd();

const createDirectoryContents = async (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);
  const fileName = newProjectPath.split("/")[0];
  const splitName = fileName.split("-");

  const nameUpperFirst = splitName
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join("");

  const nameLowerFirst = splitName
    .map((name, idx) => {
      if (idx === 0) return name.toLowerCase();
      return name.charAt(0).toUpperCase() + name.slice(1);
    })
    .join("");

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");
      contents = contents
        .replace(/replace/g, nameLowerFirst)
        .replace(/Replace/g, nameUpperFirst);

      file = file
        .split(".")
        .map((name) => {
          if (name === "replace") return nameLowerFirst;
          else if (name === "create-replace") return `create-${nameLowerFirst}`;
          else if (name === "update-replace") return `update-${nameLowerFirst}`;
          else return name;
        })
        .join(".");

      const writePath = `${CURR_DIR}/src/models/${newProjectPath}/${file}`;

      const writeDir = path.dirname(writePath);
      fs.mkdirSync(writeDir, { recursive: true });

      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      const newDirPath = `${CURR_DIR}/src/models/${newProjectPath}/${file}`;
      fs.mkdirSync(newDirPath, { recursive: true });

      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
};

export default createDirectoryContents;
