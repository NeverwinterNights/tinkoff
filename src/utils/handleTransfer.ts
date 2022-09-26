import {Alert} from "react-native";
import {collection, doc, getDoc, getDocs, limit, query, updateDoc, where} from "firebase/firestore";
import {db} from "./firebase";
import {AccountsType} from "../hooks/useAccounts";

export const handleTransfer = async (fromAccount: AccountsType, cardNumber: string) => {
    console.log ("value1111111")
    Alert.prompt("Sum transfer", "Enter transfer amount:",
        async (sum) => {
            try {
                let accountToId = ""
                let currentToBalance = ""

                const querySnapshot = await getDocs(query(collection(db, "accounts"), where("cardNumber", "==", cardNumber), limit(1)))
                querySnapshot.docs.forEach((doc) => accountToId = doc.id)
                const docRef = doc(db, "accounts", accountToId)

                const docSnapTo = await getDoc(docRef)

                if (docSnapTo.exists()) {
                    currentToBalance = docSnapTo.data().balance
                } else {
                    Alert.alert("Card not found")
                    return
                }
                console.log("value", docSnapTo.id)

                await updateDoc(docRef, {
                    balance: currentToBalance + Number(sum)
                })

                const docRefFrom = doc(db, "accounts", fromAccount.id)
                await updateDoc(docRefFrom, {
                    balance: fromAccount.balance - Number(sum)
                })
                return
            } catch (error) {
                Alert.alert("Error transfer", error)
            }
        }
    )

}
