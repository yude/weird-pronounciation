import WordList from "./components/Words";

export default function Home() {
  return (
    <>
      <p className="text-right">
        Accepting submissions on{" "}
        <a
          className="underline"
          href="https://github.com/yude/weird-pronounciation/issues/new?assignees=yude&labels=&projects=&template=add-weird-pronounciation.md&title=Add+weird+pronounciation%3A+%28Word+here%29"
        >
          GitHub
        </a>
        .
      </p>
      <WordList />
    </>
  );
}
