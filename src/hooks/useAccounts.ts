import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {db} from "../utils/firebase";
import {useAuth} from "./useAuth";

export type  CurrencyType = "RUB" | "USD"
export type  NameType = "Tin Black" | "Tin All"


export type AccountsType = {
    id: string
    userId: string
    balance: number
    cardNumber: string
    currency: CurrencyType
    name: NameType
}


export const useAccounts = () => {
    const [accounts, setAccounts] = useState<AccountsType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuth()


    useEffect(() => onSnapshot(query(collection(db, "accounts"), where("userId", "==", user?.uid)), snapshot => {
        setAccounts(snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data()
        }) as AccountsType))
        setIsLoading(false)
    }), [])

    return {accounts, isLoading}
}
