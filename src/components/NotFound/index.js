// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backgroundColor = isDarkTheme ? 'home-container' : 'dark-container'

      const paraGraphs = isDarkTheme ? 'light-para' : 'dark-para'

      return (
        <>
          <Navbar />
          <div className={backgroundColor}>
            <img
              className="home"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={paraGraphs}>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
