import { Link } from "wouter";
import { ROOT_ROUTE } from "../../constants/constants";

export default function Page404() {
  return (
    <section className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-center text-9xl">404</h1>
      <p className="text-center text-2xl">
        Page not found.{" "}
        <Link
          className={"underline"}
          style={{ color: "var(--main-purple)" }}
          to={ROOT_ROUTE}
        >
          go home
        </Link>
      </p>
    </section>
  );
}
