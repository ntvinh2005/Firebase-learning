import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBMIYHUzIBR7kUnj2zqOS36mErde72_SQA",
    authDomain: "drive-production-a5e7d.firebaseapp.com",
    projectId: "drive-production-a5e7d",
    storageBucket: "drive-production-a5e7d.appspot.com",
    messagingSenderId: "706387200512",
    appId: "1:706387200512:web:680fafa51c95fbd34826e5"
})

export const auth = app.auth()
export const firestore = app.firestore()
export const database = {
    folders: firestore.collection('folders'),
    files: firestore.collection('files'),
    formatDoc: doc => {
        return {
            id: doc.id, ...doc.data()
        }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export default app