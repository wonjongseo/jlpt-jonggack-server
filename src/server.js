import express from "express";
import morgan from "morgan";
import {
  jsonN1Grammars,
  jsonN1Kangis,
  jsonN1Words,
  jsonN2Grammars,
  jsonN2Kangis,
  jsonN2Words,
  jsonN3Grammars,
  jsonN3Kangis,
  jsonN3Words,
  jsonN4Kangis,
  jsonN4Words,
  jsonN5Kangis,
  jsonN5Words,
  jsonN6Kangis,
} from "./datas";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  const { data } = req.query;
  //   console.log(jsonN1Words);

  console.log("Calle2");
  console.log(data);
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

  //
  else if (data === "N1-kangi") {
    result = jsonN1Kangis;
  } else if (data === "N2-kangi") {
    result = jsonN2Kangis;
  } else if (data === "N3-kangi") {
    result = jsonN3Kangis;
  } else if (data === "N4-kangi") {
    result = jsonN4Kangis;
  } else if (data === "N5-kangi") {
    result = jsonN5Kangis;
  } else if (data === "N6-kangi") {
    result = jsonN6Kangis;
  }

  //
  else if (data === "N1-grammar") {
    result = jsonN1Grammars;
  } else if (data === "N2-grammar") {
    result = jsonN2Grammars;
  } else if (data === "N3-grammar") {
    result = jsonN3Grammars;
  }

  return res.json({ data: result });
});

export default app;
