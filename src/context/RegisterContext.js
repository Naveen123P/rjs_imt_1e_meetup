import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  isRegistered: '',
  changeRegistered: () => {},
  addName: () => {},
  addTopic: () => {},
})

export default RegisterContext
