import './TopHeader.scss'
import Link from 'next/link'


const TopHeader = () => {
  return(
    <header className="top-header">
      <h1 className="top-header__name">Kanji</h1>
      <nav className="top-header__nav">
        <ul className="top-header__link-list">
          <li>
            <Link href="/jlpt" >JLPT</Link>
          </li>
          <li>
            <Link href="/trazos">Numero de trazos</Link>
          </li>
          <li>
            <Link href="/radicals">Radicales</Link>
          </li>
          <li>
            <Link href="/radicals">Grado escolar</Link>
          </li>
        </ul>
      </nav>
      </header>
  )
}

export default TopHeader;
