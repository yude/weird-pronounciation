import path from "path";
import fs from "fs";

export async function getWords() {
    const filePath = path.join(process.cwd(), "words.json");

    const res = fs.readFileSync(filePath, "utf8");
    const words = JSON.parse(res);

    return words;
}
