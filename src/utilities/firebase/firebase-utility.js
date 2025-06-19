import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth'


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDGY6NRWE6HPHc1eRqCJ4ZA5PxNSprPLQA",
    authDomain: "crown-clothing-app-c089b.firebaseapp.com",
    projectId: "crown-clothing-app-c089b",
    storageBucket: "crown-clothing-app-c089b.appspot.com",
    messagingSenderId: "389808347811",
    appId: "1:389808347811:web:1a009c945cdff7ded23d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const database = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(database, collectionKey)
    const batch = writeBatch(database)
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(database, 'categories');
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        accumulator[title.toLowerCase()] = items
        return accumulator
    }, {})
    return categoryMap
}


export const createUserDocumentFromAuth = async (userAuth, extraInfo = {}) => {
    const userDocRef = doc(database, 'users', userAuth.uid)
    const userData = await getDoc(userDocRef)
    if (!userData.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...extraInfo
            })
        } catch (err) {
            console.log('error:', err)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback)