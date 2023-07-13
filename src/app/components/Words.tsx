import Link from "next/link";

import { getWords } from "@/lib/word";
import { Word } from "@/types/word";

export default async function WordList() {
  const words = await getWords();

  return (
    <div>
      {words.map((word: Word) => (
        <div key={word.word} className="text-center inline-block m-2">
          <p className="font-serif">{word.pronounciation}</p>
          <p className="font-mono text-3xl">
            <Link href={`/word/${word.word}`}>{word.word}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
