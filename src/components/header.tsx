import css from '../styles/header.module.css';
import logo from '../assets/gato.svg';

function Header() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={css.title}>
                <h1>Conversor de Unidades</h1>
            </div>
        </header>
    )
}

export default Header;

// Path: src/components/footer.tsx