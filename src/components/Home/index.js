import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value

      const filteredTopic = topicsList.filter(each => each.id === topic)

      return (
        <div className="bg">
          <div className="header-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="logo-img"
            />
          </div>
          <div className="body-bg">
            {isRegistered ? (
              <>
                <h1 className="name-heading">Hello {name}</h1>
                <p className="topic-para">
                  Welcome to {filteredTopic[0].displayText}
                </p>
              </>
            ) : (
              <>
                <h1 className="heading">Welcome to Meetup</h1>
                <p className="para">Please register for the topic</p>
                <Link to="/register" className="link">
                  <button type="button" className="register-button">
                    Register
                  </button>
                </Link>
              </>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup-ing"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
