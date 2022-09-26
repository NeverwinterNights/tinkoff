import {useEffect, useState} from "react";
import {collection, getDocs, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {db} from "../utils/firebase";
import {StoryType} from "./useStories";
import {useAuth} from "./useAuth";
import {ProfileDataType} from "./useProfile";

export type ContactType = {
    id: string
    displayName: string
    cardNumber: string
    balance: number
    currency: string
    name: string
    timestamp: Object
    userId: string
}


export const useContacts = () => {
    const [contacts, setContacts] = useState<ContactType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuth()


    useEffect(() => onSnapshot(query(collection(db, "accounts"), where("userId", "!=", user?.uid)),
        async snapshot => {
            const contactsFirebase = await Promise.all(
                snapshot.docs.map(async (item) => {
                        const data = item.data() as ContactType & { userId: string }
                        let displayName = ""
                        const elem = query(collection(db, "users"), where("id", "==", data.userId))
                        const querySnapshot = await getDocs(elem)
                        querySnapshot.forEach((doc) => {
                            displayName = (doc.data() as ProfileDataType).displayName
                        })
                        return {
                            ...data,
                            id: item.id,
                            displayName
                        }
                    }
                )
            )
            setContacts(
                contactsFirebase.filter((v,i,a)=> a.findIndex((t)=> t.displayName===v.displayName)===i).filter((i)=> i.displayName)
            )

            setIsLoading(false)
        }), [])

    return {contacts, isLoading}
}
