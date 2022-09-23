import {Alert} from "react-native";

type ButtonsType = {
    text: string
    resolveValue: string
    textSecond: string
    resolveValueSecond: string
}


type AsyncAlertType = {
    title: string
    message?: string
    buttons: ButtonsType
}


export const asyncAlert = async ({title, message, buttons}: AsyncAlertType) => new Promise((res) => {
    Alert.alert(title, message, [
        {
            text: buttons.text,
            onPress: () => {
                res(buttons.resolveValue)
            }
        },
        {
            text: buttons.textSecond,
            onPress: () => {
                res(buttons.resolveValueSecond)
            }
        }
    ], {cancelable:false})
})
