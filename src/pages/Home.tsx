import React from 'react'
import { AuthUserContext } from '../firebase/AuthUserContext'
import { withAuthorization } from '../firebase/withAuthorization'

export const HomeComponent = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: {(authUser as any).email}</h1>
      </div>
    )}
  </AuthUserContext.Consumer>
)

const authCondition = (authUser: any) => !!authUser

const Home = withAuthorization(authCondition)(HomeComponent)

export default Home
