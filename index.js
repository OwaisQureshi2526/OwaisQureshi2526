import { initializeApp } from 'firebase/app'
import {
    getFirestore , collection , getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUlQi2YkJpb20deig59xC7c9aOhxnBq-g",
    authDomain: "fb9-testing.firebaseapp.com",
    projectId: "fb9-testing",
    storageBucket: "fb9-testing.appspot.com",
    messagingSenderId: "222094821804",
    appId: "1:222094821804:web:47119576d9706b40199209"
  };

 // init firebase app

  initializeApp(firebaseConfig)

  // init services

  const db = getFirestore()

  // collection ref

  const colRef = collection(db , 'books')

  // get collection data

  getDocs(colRef)
  .then((snapshot) => {
      let books = []
      snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id})
      })
      console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })