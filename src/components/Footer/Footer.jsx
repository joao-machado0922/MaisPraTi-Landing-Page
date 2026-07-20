import LogoWhite from '../../assets/imagens/IFPRO_logo_white.svg?react';
import Phone from '../../assets/imagens/phone.svg?react';

import './Footer.css';

function Footer() {
    return (
        <footer>
            <LogoWhite className="footer_logo"/>
            <div className="footer_telefone">
                <h3>Rio Grande do Sul</h3>
                <div className="footer_linha"><Phone/><p>(51) 3334-9900</p></div>
                <h3>São Paulo</h3>
                <div className="footer_linha"><Phone/><p>(11) 4610-5307</p></div>
            </div>
            <div className="footer_contatos">
                <h3>Contatos</h3>
                <div className="footer_linha"><a href="https://www.facebook.com/ifproficial" target="_blank">Facebook</a></div>
                <div className="footer_linha"><a href="https://www.instagram.com/ifproficial/" target="_blank">Instagram</a></div>
            </div>
        </footer>
    )
}

export default Footer;