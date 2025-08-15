import purrfection from '../../assets/purrfection.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <div className="header__logo">
            <img src={purrfection} alt="Meow logo" className="header__logo-img" />
          </div>
          <hgroup className="header__brand-name">
            <h2 className="header__brand-title">Purrfection</h2>
            <p className="header__brand-byline">För alla som älskar katter</p>
          </hgroup>
        </div>
      </div>
    </header>
  );
};

export default Header;