import { getWords } from "@/lib/word";

type Word = {
  word: string;
  pronounciation: string;
  audio: string;
};

export default async function WordList() {
  const words = await getWords();

  return (
    <div>
      {words.map((word: Word) => (
        <div key={word.word} className="text-center inline-block m-2">
          <p className="font-serif">{word.pronounciation}</p>
          <p className="font-mono text-3xl">{word.word}</p>
        </div>
      ))}
    </div>
  );
}
