import React from 'react';
import './css/Footer.css';
import securityNavigation from "../../images/icons/security-navegation.jpeg";

function Footer() {
  return (
    <div className="footer">
      <div className="block-1">
        <a href="index.html">Home</a>
        {/* <a href="#comprar">Como comprar</a> */}
        {/* <a href='#'>Sobre a Singelee</a> */}
        {/* <a href='contato.html'>Contato</a> */}
        <a href="politica-de-privacclassNameade.html">
          Politica de Privacidade
        </a>
        {/* <a href=''>Trocas e devoluções</a> */}
        {/* <a href="revenda.html">Seja um Revendedor</a> */}
      </div>

      <div className="block-2">
        <div className="block-social">
          <div>
            <a
              className="social-icon"
              href="https://www.instagram.com/singelee.geleias"
            >
              <i className="fab fa-instagram-square" />
            </a>
          </div>
          <div>
            <a
              className="social-icon"
              href="https://www.facebook.com/singelee.geleias"
            >
              <i className="fab fa-facebook-square" />
            </a>
          </div>
        </div>
      </div>
      <div className="badges">
        <a href="https://transparencyreport.google.com/safe-browsing/search?url=singelee.com.br&hl=pt_BR">
          <img src={securityNavigation} alt="navegação segura" />
        </a>
      </div>
      <div className="block-identity">
        <h3>Feito com amor em Curitiba/PR <span role="img" aria-label="coração">&#128151;</span>.</h3>
        <h3>Todos os direitos reservados.</h3>
        <h3>®Singelee Geleias Artesanais.</h3>
        <h3>CNPJ: 37.407.074/0001-57</h3>
      </div>
    </div>
  );
}
// scrolling = 'no';
export default Footer;
