import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyClslZXBOaSR5JgQ7C4zuk_G8wYRyBtilQ',
  authDomain: 'mockingbird-2b8a8.firebaseapp.com',
  databaseURL: 'https://mockingbird-2b8a8.firebaseio.com',
  storageBucket: 'mockingbird-2b8a8.appspot.com',
  messagingSenderId: '799532720315'
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
