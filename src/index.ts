import express, { Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

import { renderCreate } from "./templates/renderCreate";
import { renderNew } from "./templates/renderNew";
import { renderList } from "./templates/renderList";
import { renderMaybeLink } from "./templates/renderMaybeLink";
import { renderMaybeDelete } from "./templates/renderMaybeDelete";
import { renderFrontpage } from "./templates/renderFrontpage";

app.get("/", renderFrontpage);
app.get("/new", renderNew);
app.post("/create", renderCreate);
app.get("/list", renderList);
app.get("*", renderMaybeLink);
app.post("*", renderMaybeDelete);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});