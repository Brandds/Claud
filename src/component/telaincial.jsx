import React from "react";
import "../css/telainicial.css";
import ImagemLogo from "../img/Favicon-Claud.png";

export function Navegacao() {
  return (
    <nav id="navegacao">
      <img src={ImagemLogo} className="logoAplicacao" alt="" />
      <p className="titleAplicacao">
        Casa Claud
        <ul className="titleUlAplicacao">
          <li className="titleUlLiAplicacao">Café, decor & Mesa Posta</li>
        </ul>
      </p>
      <p className="linkInstagram">@firstName_lastName</p>
      <p className="iconsRedeSocial">
        <i class="gg-instagram"></i>
        <i class="gg-globe-alt"></i>
      </p>
    </nav>
  );
}

export function Sessao() {
  return (
    <section id="section">
      <article className="content-Sessao">
        <a className="paragrafo-Content" href="http://">
          <p>ATÉ 40% OFF</p>
        </a>
      </article>
      <article className="content-Sessao">
        <a className="paragrafo-Content" href="http://">
          <p>Mais Vendidos</p>
        </a>
      </article>
      <article className="content-Sessao">
        <a className="paragrafo-Content" href="http://">
          <p>COMPRE PELO SITE </p>
        </a>
      </article>
      <article className="content-Sessao">
        <a className="paragrafo-Content" href="http://">
          <p>FALE COM A GENTE</p>
        </a>
      </article>

      <article className="content-Sessao">
        <a className="paragrafo-Content" href="">
          <p>Faça parte do grupo Claud</p>
        </a>
      </article>
    </section>
  );
}
