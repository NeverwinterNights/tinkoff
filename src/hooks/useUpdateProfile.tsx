import {useState} from "react";
import {useAuth} from "./useAuth";
import {Alert} from "react-native";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../utils/firebase";

export const useUpdateProfile = (name: string, docId: string) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const {user} = useAuth()


    const updateProfile = async () => {

        setIsLoading(true)
        if (!user) return
        try {
            const docRef = doc(db, "users", docId)

            await updateDoc(docRef, {
                displayName: name
            })
            setIsSuccess(true)

            setTimeout(() => {
                setIsLoading(false)
            }, 3000)

        } catch (error) {
            Alert.alert("error update profile", error.messege)
        } finally {
            setIsLoading(false)
        }
    }
    return {isLoading, isSuccess, updateProfile}

}
