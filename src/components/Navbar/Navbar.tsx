//routes
import { ROOT_ROUTE } from "../../constants/constants";

//constants
import { Link } from "wouter";

//icon
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import TranslatorTrigger from "../Translator/TranslatorTrigger";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link
        to={ROOT_ROUTE}
        className={"underline flex items-center gap-0.5 text-lg"}
        style={{ color: "var(--main-purple)" }}
      >
        <img src={ArrowLeftIcon} className="w-4" />
        go back
      </Link>
      <TranslatorTrigger />
    </nav>
  );
}
