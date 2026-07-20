import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <h1 className="header_titulo" onClick={() => navigate(`/`)}>Pré-Impressão</h1>
        </header>
    )
}

export default Header