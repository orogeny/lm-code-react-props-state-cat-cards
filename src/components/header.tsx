type HeaderProps = {
  catCount?: number;
  dogCount?: number;
};

const Header: React.FC<HeaderProps> = ({ catCount = 0, dogCount = 0 }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {catCount} Cats & {dogCount} Dogs in this Cat App
    </h2>
  </header>
);

export default Header;
