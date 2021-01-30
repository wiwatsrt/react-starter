import * as React from 'react'
import firebase from 'firebase/app'

export interface FirebaseContext {
  firebase: firebase.app.App
  authProviders: string[]
}

export const AuthUserContext = React.createContext({} as FirebaseContext)
