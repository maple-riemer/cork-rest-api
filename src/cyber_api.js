import {addDBAsset, deleteDBAsset, getDBAsset, listDBAssets} from "./cyber_controller.js";
import express from 'express';
const app = express();
const port = 3010;

app.get("/assets", listDBAssets);
app.get("/asset/:id", getDBAsset);
app.post("/assets", addDBAsset);
app.delete("/asset/:id", deleteDBAsset);

app.listen(port, () => console.log(`API is Active at localhost:${port}`))