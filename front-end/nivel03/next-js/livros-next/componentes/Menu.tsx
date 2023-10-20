import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Loja Next</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Página Inicial</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/livros">
                <a className="nav-link">LivroLista</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/livro-dados">
                <a className="nav-link">LivroDados</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
