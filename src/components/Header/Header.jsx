import './Header.css';
import LogoIF from '../../assets/imagens/IFPRO_logo_orange.svg?react';

function Header() {

    return (
        <header>
            <LogoIF className="header_logo" />
            <h1 className="header_titulo">Pré-Impressão</h1>
        </header>
    )
}

export default Header