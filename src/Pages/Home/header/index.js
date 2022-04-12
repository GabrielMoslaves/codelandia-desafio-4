import "./styles.css";

function Header() {
  return (
    <div className="container-container">
      <div className="header-container">
        <div className="header-wrapper">
          <p className="header-left">Codelândia</p>
          <p className="header-right">Blog</p>
        </div>
        <input className="pesquisa" placeholder="Pesquisar no blog" />
      </div>
    </div>
  );
}

export default Header;
