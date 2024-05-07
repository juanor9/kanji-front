import './TopHeader.scss'

const TopHeader = () => {
  return(
    <header className="top-header">
      <h1 className="top-header__name">Kanjipedia</h1>
      <nav className="top-header__nav">
        <ul className="top-header__link-list">
          <li>JLPT</li>
          <li>Número de trazos</li>
        </ul>
      </nav>
      </header>
  )
}

export default TopHeader;