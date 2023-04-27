import https from "node:https";
import fs from "node:fs";

function downloadFile(url, destFolder, destFile) {
  fs.mkdirSync(destFolder, { recursive: true });
  const file = fs.createWriteStream(`${destFolder}/${destFile}`);
  https
    .get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Download Completed!");
      });
    })
    .on("error", (err) => {
      fs.unlink(dest, (err) => {
        console.log("Could not delete file!");
        console.log(err?.message);
      });
      console.log("Download Failed!");
      console.log(err.message);
    });
}

downloadFile(
  "https://raw.githubusercontent.com/ARogueOtaku/profile-data/master/src/assets/types.ts",
  "./src/models",
  "profile.ts"
);
