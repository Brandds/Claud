import React from "react";
import "../css/telainicial.css";
import ImagemLogo from "../img/Favicon-Claud.png";
import { Link } from "react-router-dom";

export function Navegacao() {
  return (
    <div id="div-container">
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
      <section id="section">
        <article className="content-Sessao">
          <Link to="/principal" className="paragrafo-Content">
            PROMO
          </Link>
        </article>
        <article className="content-Sessao">
          <Link to="/principal" className="paragrafo-Content">
            <p>Mais Vendidos</p>
          </Link>
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
    </div>
  );
}
