import { getWords } from "@/lib/word";
import { Word } from "@/types/word";
import Share from "@/app/components/Share";

export async function generateStaticParams() {
  const words = await getWords();
  return words;
}

type WordPageParams = {
  id: string;
};

export default async function WordPage({ params }: { params: WordPageParams }) {
  const words = await getWords();
  const query = params.id.replace("%20", " ");
  const word = words.find(
    (row: Word) => encodeURIComponent(row.word) === params.id
  );

  if (word && typeof word.pronounciation !== "undefined") {
    const this_url =
      "https://weird-pronounciation.vercel.app/word/" + params.id;
    const this_title = `異常発音 - ${word.word} (${word.pronounciation})`;
    return (
      <div className="mt-5">
        <p className="text-center font-serif text-2xl">{word.pronounciation}</p>
        <p className="text-center font-mono text-6xl">{word.word}</p>
        <div className="text-center">
          <Share title={this_title} url={this_url} />
        </div>
        <div className="mx-auto max-w-xs">
          {word.actor !== "" && (
            <>
              <audio controls>
                <source
                  src={`/words/voices/${word.word}.wav`}
                  type="audio/wav"
                />
              </audio>
              <p className="text-center">CV: {word.actor}</p>
            </>
          )}
        </div>
        <div className="font-serif mt-1">{word.description}</div>
      </div>
    );
  } else {
    return <p>Not found. Requested word: {encodeURIComponent(params.id)}</p>;
  }
}
