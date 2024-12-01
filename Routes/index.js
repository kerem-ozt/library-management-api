import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();

const basename = path.basename(__filename);
const folderRoute = path.dirname(__filename);

fs.readdir(folderRoute, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      if (file === basename) return;
      const routeName = path.parse(file).name;
      app.use(`/${routeName.toLowerCase()}`, require(`./${routeName}`).default);
    });
  }
});

export default app;
