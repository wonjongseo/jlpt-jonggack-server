import express from "express";
import morgan from "morgan";
import {
  jsonN1Words,
  jsonN2Words,
  jsonN3Words,
  jsonN4Words,
  jsonN5Words,
} from "./jlpt_datas";
import {
  jsonN1Kangis,
  jsonN2Kangis,
  jsonN3Kangis,
  jsonN4Kangis,
  jsonN5Kangis,
  jsonN6Kangis,
} from "./kangi_datas";
import {
  jsonN1Grammars,
  jsonN2Grammars,
  jsonN3Grammars,
} from "./grammar_datas";

const app = express();

app.use(morgan("dev"));
app.get("/search", (req, res) => {
  const { query, category } = req.query;
  console.log("query: ", category);

  const aa = "恋人";

  console.log("aa.includes(query): ", aa.includes(query));

  const result = [];
  for (let i = 0; i < jsonN1Words.length; i++) {
    for (let j = 0; j < jsonN1Words[i].length; j++) {
      if (jsonN1Words[i][j].word.includes(query)) {
        result.push(jsonN1Words[i][j]);
      }
      if (jsonN1Words[i][j].yomikata.includes(query)) {
        result.push(jsonN1Words[i][j]);
      }
    }
  }
  console.log("1");
  for (let i = 0; i < jsonN2Words.length; i++) {
    for (let j = 0; j < jsonN2Words[i].length; j++) {
      if (jsonN2Words[i][j].word.includes(query)) {
        result.push(jsonN2Words[i][j]);
      }
      if (jsonN2Words[i][j].yomikata.includes(query)) {
        result.push(jsonN2Words[i][j]);
      }
    }
  }
  console.log("2");
  for (let i = 0; i < jsonN3Words.length; i++) {
    for (let j = 0; j < jsonN3Words[i].length; j++) {
      if (jsonN3Words[i][j].word.includes(query)) {
        result.push(jsonN3Words[i][j]);
      }
      if (jsonN3Words[i][j].yomikata.includes(query)) {
        result.push(jsonN3Words[i][j]);
      }
    }
  }
  console.log("3");
  for (let i = 0; i < jsonN4Words.length; i++) {
    for (let j = 0; j < jsonN4Words[i].length; j++) {
      if (jsonN4Words[i][j].word.includes(query)) {
        result.push(jsonN4Words[i][j]);
      }
      if (jsonN4Words[i][j].yomikata.includes(query)) {
        result.push(jsonN4Words[i][j]);
      }
    }
  }
  console.log("4");
  for (let i = 0; i < jsonN5Words.length; i++) {
    for (let j = 0; j < jsonN5Words[i].length; j++) {
      if (jsonN5Words[i][j].word.includes(query)) {
        result.push(jsonN5Words[i][j]);
      }
      if (jsonN5Words[i][j].yomikata.includes(query)) {
        result.push(jsonN5Words[i][j]);
      }
    }
  }

  console.log("5");
  console.log("result: ", result);
  return res.json({ data: result });
});

app.get("/", (req, res, next) => {
  const { data } = req.query;
  //   console.log(jsonN1Words);

  console.log("----Called----");
  console.log(data);
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
