//icon
import SearchWordInput from "../SearchWordInput/SearchWordInput";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 justify-center w-4/5 h-screen max-w-2xl m-auto">
      <h1 className="text-4xl" style={{ fontFamily: "ui-sans-serif" }}>
        Dictionary
      </h1>

      <SearchWordInput />
    </section>
  );
}
