import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { firebase } from '../firebase'
import { AuthUserContext } from './AuthUserContext'

interface Props {
  history?: any
}

export const withAuthorization = (condition: any) => (Component: any) => {
  class WithAuthorization extends React.Component<Props, {}> {
    public componentDidMount() {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (!condition(authUser)) {
          this.props.history.push('/login')
        }
      })
    }

    public render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) => (authUser ? <Component /> : null)}
        </AuthUserContext.Consumer>
      )
    }
  }

  return withRouter(WithAuthorization as any)
}
