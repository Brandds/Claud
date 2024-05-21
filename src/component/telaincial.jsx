import React from "react";
import "../css/telainicial.css";
import ImagemLogo from "../img/rafael.jpeg";

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
        <p className="linkInstagram">@rafaelbrandao</p>
      </nav>
      <section id="section">
        <article className="content-Sessao">
          <Link to="/principal" className="paragrafo-Content">
            Portfólio
          </Link>
        </article>
        <article className="content-Sessao">
          <Link to="/" className="paragrafo-Content">
            Linkedin
          </Link>
        </article>
        <article className="content-Sessao">
          <Link className="paragrafo-Content" href="http://">
            <p>GitHub </p>
          </Link>
        </article>
      </section>
    </div>
  );
}
