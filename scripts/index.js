const csv = require("csvtojson")
const fs = require("fs");
const path = require("path");

const csvFilePath = "scripts/Developers Master Sheet - Master Sheet.csv"

const outDir = path.join(__dirname, "../src/constants");
const outFilePath = `${outDir}/peopleData.tsx`;

try {
  if (!fs.statSync(csvFilePath).isFile()) {
    console.error("Input file path is invalid.");
    process.exit(1);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

try {
  if (!fs.statSync(outDir).isDirectory()) {
    fs.mkdirSync(outDir, { recursive: true });
  }
} catch (err) {
  fs.mkdirSync(outDir, { recursive: true });
}

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

  /**
   * Generate file content
   */
  let fileContent = `export const categories: string[] = [
  ${Array.from(categories).map(cat => `"${cat}"`).join(",\n\t")}
];\n\n`;

  fileContent += `export interface PeopleSchema {
  ${Object.keys(formatted[0]).map(key => `${key}: string`).join(",\n\t")}
};\n\n`;

  fileContent += `export const people: PeopleSchema[] = ${JSON.stringify(formatted, null, 2)};`


  console.log(`Writing to: ${outFilePath}`)
  fs.writeFileSync(outFilePath, fileContent);
})