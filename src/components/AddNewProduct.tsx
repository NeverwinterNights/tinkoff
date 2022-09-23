import React from 'react';
import {Padding} from "./Padding";
import {AppButton} from "./AppButton";
import {Alert} from "react-native";
import {asyncAlert} from "../utils/asyncAlert";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../utils/firebase";
import {useAuth} from "../hooks/useAuth";
import {randomCardNumber} from "../utils/randomCardNumber";

type AddNewProductPropsType = {}

export const AddNewProduct = ({}: AddNewProductPropsType) => {
    const {user} = useAuth()

    const registerHandler = async () => {
        try {
            const currency = await asyncAlert({
                title: "Currency",
                message: "Select account currency",
                buttons: {
                    text: "RUB",
                    resolveValue: "RUB",
                    textSecond: "USD",
                    resolveValueSecond: "USD",
                }
            })
            const cardType = await asyncAlert({
                title: "Card Type",
                message: "Select card type",
                buttons: {
                    text: "Black",
                    resolveValue: "Tin Black",
                    textSecond: "All",
                    resolveValueSecond: "Tin All",
                }
            })

            await addDoc(collection(db, "accounts"), {
                timestamp: serverTimestamp(),
                userId:user?.uid,
                balance:0,
                cardNumber: randomCardNumber(),
                currency,
                name:cardType,

            })

        } catch (error) {
            Alert.alert("Error add new product", error)
        }
    }
    return (
        <Padding style="mt-6">
            <AppButton onPress={registerHandler} title="Add New Product"/>
        </Padding>
    );
};

