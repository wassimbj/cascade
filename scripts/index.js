const csv = require("csvtojson")
const fs = require("fs");

const csvFilePath = "scripts/Developers Master Sheet - Master Sheet.csv"
const jsonFilePath = "scripts/Developers Master Sheet - Master Sheet.json"
csv().fromFile(csvFilePath).then(people => {
  const formatted = [];
  const categories = new Set(["All"]);

  for (let peep of people) {
    const row = {};

    if (peep["Name"] === "") continue;
    for (let key in peep) {
      const newKey = key === "Can work on (Tech or non Tech)" ? "CanWorkOn" : key.replace(/\s/g, "")
      row[newKey] = peep[key];
    }

    // Addtn. required fields
    row["Thumbnail"] = row.GithubURL ? row.GithubURL + ".png?size=460" : ""
    row["Category"] = row.Category === "CS" ? "Customer Success" : row.Category === "SE" ? "Solution Engineering" : row.Category

    categories.add(row['Category'])
    formatted.push(row)
  }

  // /**
  //  * Generate file content
  //  */
  // const peopleKeys = Object.keys(formatted[0])
  // let data = "";

  // // Interfaces; 
  // data = `/**
  // * Interfaces
  // */\n`;
  // data += "export interface People {\n";
  // for (let key of peopleKeys) {
  //   data += `  ${key}: string;\n`;
  // }
  // data += "}\n";
  // console.log(data)

  fs.writeFileSync(jsonFilePath, JSON.stringify({ categories: Array.from(categories), people: formatted }, null, 4))
})