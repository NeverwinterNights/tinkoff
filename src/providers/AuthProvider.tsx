import {
    createContext,
    Dispatch, FunctionComponent,
    ReactNode,
    SetStateAction, useContext, useEffect,
    useMemo,
    useState
} from "react";
import {onAuthStateChanged, User} from "firebase/auth";
import {Alert} from "react-native";
import {auth, db, login, logout, register} from "../utils/firebase";
import {addDoc, collection} from "firebase/firestore";
import React from "react";

type AuthContextType = {
    user: User | null
    isLoading: boolean
    register: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)


export const AuthProvider = ({children}: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    const registerHandler = async (email: string, password: string) => {
        console.log ("email", email)
        console.log ("password", password)

        setIsLoading(true)
        try {
            const {user} = await register(email, password)
            console.log ("user", user)
            await addDoc(collection(db, "users"), {
                id: user.uid,
                displayName: "No name"
            })
        } catch (error) {
            console.log ("error", error)
            Alert.alert("Error registration", error)

        } finally {
            setIsLoading(false)
        }
    }

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            await login(email, password)

        } catch (error) {
            Alert.alert("Error with login", error)

        } finally {
            setIsLoading(false)
        }
    }

    const logOutHandler = async () => {
        setIsLoading(true)
        try {
            await logout()

        } catch (error) {
            Alert.alert("Error with logout", error)

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user || null)
            setIsLoadingInitial(false)
        })
    }, [])

    const value = useMemo(() => ({
        user, isLoading, login: loginHandler, logout: logOutHandler, register: registerHandler
    }), [user, isLoading]);


    return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>

}
// export const useAuth = () => useContext(AuthContext)
