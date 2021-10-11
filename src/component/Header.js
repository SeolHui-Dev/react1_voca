import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">토익 영단어(고급)</Link>
      </h1>
      <div className="menu">
        <button>단어 추가</button>
        <button>Day 추가</button>
      </div>
    </header>
  );
}
