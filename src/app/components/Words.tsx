import path from "path";
import fs from "fs";

export async function getWords() {
  const filePath = path.join(process.cwd(), "words.json");

  const res = fs.readFileSync(filePath, "utf8");
  const words = JSON.parse(res);

  return words;
}

export default async function WordList() {
  const words = await getWords();

  return (
    <div>
      {words.map((words) => (
        <div key={words.word} className="text-center inline-block m-2">
          <p className="font-serif">{words.pronounciation}</p>
          <p className="font-mono text-3xl">{words.word}</p>
        </div>
      ))}
    </div>
  );
}
