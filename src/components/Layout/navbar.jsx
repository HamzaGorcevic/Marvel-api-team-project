import { MyContext } from "../context";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarPage() {
  const navigate = useNavigate();
  const { setValue, setSearch, value, genre, setGenre } = useContext(MyContext);
  function handleChanger(el) {
    setValue(el.target.value);
  }
  function submitChanger() {
    setSearch(value);
  }
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-danger"
      style={{ position: "sticky", top: 1, zIndex: 3 }}
    >
      <Link
        className="btn btn-warning text-danger font-weight-bold"
        to={"/"}
        onClick={() => {
          setGenre("characters");
          setSearch("");
          setValue("");
        }}
      >
        MARVEL
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav mr-auto">
        <li
          style={{ cursor: "pointer" }}
          class="nav-item active"
          onClick={() => {
            navigate("/");
            setGenre("comics");
            setSearch("");
            setValue("");
          }}
        >
          <h5 class="nav-link text-warning" href="#">
            Comics
          </h5>
        </li>
        <li
          style={{ cursor: "pointer" }}
          class="nav-item active"
          onClick={() => {
            navigate("/");
            setGenre("characters");
            setSearch("");
            setValue("");
          }}
        >
          <h5 class="nav-link text-warning" href="#">
            Characters
          </h5>
        </li>
        <li
          style={{ cursor: "pointer" }}
          class="nav-item active"
          onClick={() => {
            navigate("/");
            setGenre("creators");
            setSearch("");
            setValue("");
          }}
        >
          <h5 class="nav-link text-warning" href="#">
            Creators
          </h5>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            onChange={(el) => {
              handleChanger(el);
            }}
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={value}
          />
          <Link
            class="btn btn-outline-warning my-2 my-sm-0"
            onClick={(el) => {
              navigate("/");
              submitChanger();
              el.preventDefault();
            }}
          >
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
}
