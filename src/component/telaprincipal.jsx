import React, { useEffect, useState } from "react";
import ImagemLogo from "../img/rafael.jpeg";
import { Link } from "react-router-dom";

import "../css/telaprincipal.css";

export function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".tabs-container");
      const offset = nav.offsetTop;
      if (window.scrollY > offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="header">
      <nav id="navegacao">
        <img src={ImagemLogo} className="logoAplicacao" alt="" />
      </nav>
      <h1 className="title">Rafael Brandão 22</h1>
      <h2 className="subtitle">Contagem/MG</h2>
      <nav className={isSticky ? "tabs-container sticky" : "tabs-container"}>
        <Link href="" className="tab">
          <p className="paragrafo-navegecao">Sobre</p>
        </Link>
        <Link href="" className="tab">
          <p className="paragrafo-navegecao">Soft Skills</p>
        </Link>
      </nav>
    </header>
  );
}

export function Main() {
  return (
    <section id="ola" className="section">
      <h1>HTML</h1>
      <p>Learn about HTML</p>
    </section>
  );
}
