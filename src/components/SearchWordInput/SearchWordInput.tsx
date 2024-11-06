//hooks
import useNavigateToWord from "../../general-use-hooks/useNavigateToWord";

//icon
import ArrowRight from "../../assets/icons/arrow-right.svg";

export default function SearchWordInput() {
  const { wordToSearch, handleSearchWord, handleChangeWordToSearch } =
    useNavigateToWord();
  return (
    <form
      onSubmit={handleSearchWord}
      className="flex items-center justify-between w-full bg-zinc-100 rounded"
    >
      <input
        className="bg-transparent text-zinc-700 text-md p-1 pl-4 outline-none w-full"
        placeholder="Search anything"
        value={wordToSearch}
        type="text"
        onChange={handleChangeWordToSearch}
      />
      <button
        type="submit"
        className=" grid place-items-center font-bold rounded h-10 top-0 right-0 w-10 "
        style={{ background: "var(--main-purple)" }}
      >
        <img src={ArrowRight} className="w-3/6" />
      </button>
    </form>
  );
}
