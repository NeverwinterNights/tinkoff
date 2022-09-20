import {useEffect, useMemo, useState} from "react";
import {useAuth} from "./useAuth";
import {collection, limit, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../utils/firebase";


type ProfileDataType = {
    id: string
    displayName: string
    docId: string
}

export const useProfile = () => {

    const {user} = useAuth()
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState<ProfileDataType>({} as ProfileDataType);
    const [name, setName] = useState("");
    useEffect(() => onSnapshot(query(collection(db, "users"), where("id", "==", user?.uid), limit(1)),
        snapshot => {
            const profile = snapshot.docs.map(item => ({
                ...(item.data() as ProfileDataType),
                docID: item.id
            }))[0]

            setProfile(profile)
            setName(profile.displayName)
            setIsLoading(false)
        }), []
    )
    return useMemo(() => ({
        profile, isLoading, name, setName
    }), [])

}
