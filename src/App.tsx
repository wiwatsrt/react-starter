import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { firebase } from './firebase'
import { withAuthentication } from './firebase/withAuthentication'
import LoginPage from './pages/Login'

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      authUser: null,
    }
  }

  public componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const App = withAuthentication(AppComponent)

export default App
