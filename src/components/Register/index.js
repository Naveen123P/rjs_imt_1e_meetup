import {Component} from 'react'
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

class Register extends Component {
  state = {
    showErrorMsg: false,
  }

  render() {
    const {showErrorMsg} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {name, topic, addName, addTopic, changeRegistered} = value
          const onChangeName = event => {
            event.preventDefault()
            addName(event)
          }

          const onChangeTopic = event => {
            event.preventDefault()
            addTopic(event)
          }

          const onClickRegister = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({showErrorMsg: true})
            } else {
              this.setState({showErrorMsg: false})
              changeRegistered()
              const {history} = this.props
              history.replace('/')
            }
          }
          return (
            <div className="bg">
              <div className="header-bg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  className="logo-img"
                />
              </div>
              <div className="register-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="register-img"
                />
                <form className="form" onSubmit={onClickRegister}>
                  <h1 className="heading">Let us join</h1>
                  <div className="input-div">
                    <label htmlFor="name" className="label">
                      NAME
                    </label>
                    <input
                      value={name}
                      onChange={onChangeName}
                      type="text"
                      className="input"
                      placeholder="Your name"
                      id="name"
                    />
                  </div>
                  <div className="input-div">
                    <label htmlFor="topic" className="label">
                      TOPICS
                    </label>
                    <select
                      value={topic}
                      id="topic"
                      name="topic"
                      className="select"
                      onChange={onChangeTopic}
                    >
                      {topicsList.map(each => (
                        <option key={each.id} value={each.id}>
                          {each.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="register-button">
                    Register Now
                  </button>
                  {showErrorMsg && (
                    <p className="error-msg">Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
