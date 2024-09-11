import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    isRegistered: false,
  }

  addName = event => {
    this.setState({name: event.target.value})
  }

  addTopic = event => {
    this.setState({topic: event.target.value})
  }

  changeRegistered = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {name, topic, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          changeRegistered: this.changeRegistered,
          addName: this.addName,
          addTopic: this.addTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
