// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

      const navBar = isDarkTheme ? 'nav' : 'nav-dark'

      const links = isDarkTheme ? 'light-link' : 'dark-link'

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      return (
        <div className={navBar}>
          <img className="website-logo" src={websiteLogo} alt="website logo" />
          <ul className="ul">
            <Link to="/" className="link">
              <li className={links}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={links}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="button"
            onClick={onChangeTheme}
          >
            <img className="theme-logo" src={themeImg} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
