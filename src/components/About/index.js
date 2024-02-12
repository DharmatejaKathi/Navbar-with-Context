// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

      const backgroundColor = isDarkTheme ? 'home-container' : 'dark-container'

      const paraGraphs = isDarkTheme ? 'light-para' : 'dark-para'

      return (
        <>
          <Navbar />
          <div className={backgroundColor}>
            <img className="home" src={themeImg} alt="about" />
            <h1 className={paraGraphs}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
