import express from "express";
import morgan from "morgan";
import {
  jsonN1Words,
  jsonN2Words,
  jsonN3Words,
  jsonN4Words,
  jsonN5Words,
} from "./datas";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  const { data } = req.query;
  //   console.log(jsonN1Words);

  console.log("Called");
  var result;
  if (data === "N1-voca") {
    result = jsonN1Words;
  } else if (data === "N2-voca") {
    result = jsonN2Words;
  } else if (data === "N3-voca") {
    result = jsonN3Words;
  } else if (data === "N4-voca") {
    result = jsonN4Words;
  } else if (data === "N5-voca") {
    result = jsonN5Words;
  }

  return res.json({ data: result });
});

export default app;
