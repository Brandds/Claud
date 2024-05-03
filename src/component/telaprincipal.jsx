import React, { useEffect, useState } from "react";
import ImagemLogo from "../img/Favicon-Claud.png";

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
      <h1 className="title">Bem vindo a Claud</h1>
      <p className="subtitle">Melhores produtos</p>
      <nav className={isSticky ? "tabs-container sticky" : "tabs-container"}>
        <a href="" className="tab">
          <p className="paragrafo-navegecao">MESA E COZINANHA </p>
        </a>
        <a href="" className="tab">
          <p className="paragrafo-navegecao">KIT E CONJUNTINHOS</p>
        </a>
        <a href="" className="tab">
          <p className="paragrafo-navegecao">DECORAÇÃO</p>
        </a>
        <a href="" className="tab">
          <p className="paragrafo-navegecao">TÁ NA PROMO</p>
        </a>
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
