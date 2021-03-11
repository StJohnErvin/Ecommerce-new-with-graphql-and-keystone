import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">
          <a>Sick fits</a>
        </Link>
      </div>
      <div className="sub-bar">
        <p>Search Box</p>
      </div>

      <Nav />
    </header>
  );
}
