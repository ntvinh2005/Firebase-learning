import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAsK3Ii_ZKYaQbnxyS1J7ZzyaN5__cOKwA",
    authDomain: "auth-production-fb8af.firebaseapp.com",
    projectId: "auth-production-fb8af",
    storageBucket: "auth-production-fb8af.appspot.com",
    messagingSenderId: "1010548806587",
    appId: "1:1010548806587:web:40ab1957aebacd4b956a9e"
})

export const auth = app.auth()
export default app