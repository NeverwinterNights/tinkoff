import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAuth} from "../../hooks/useAuth";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../../utils/firebase";

type FieldPropsType = {}

export const Field = ({}: FieldPropsType) => {
    const {user} = useAuth()
    const [message, setMessage] = useState("");

    const handleSendMessage = async () => {
        try {
            await addDoc(collection(db, "messages"),
                {timestamp: serverTimestamp(), userId: user?.uid, text: message}
            )
        } catch (error) {
            Alert.alert("Error with add new message", error)
        }
        setMessage("")
    }

    return (
        <View className="mt-3 flex-row items-center justify-between py-1">
            <TextInput
                placeholder={"Enter your message"}
                onChangeText={setMessage}
                value={message}
                showSoftInputOnFocus={false}
                autoCapitalize={"none"}
                className="bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl"
            />
            <Pressable onPress={handleSendMessage}>
                <MaterialCommunityIcons
                    name="send-circle-outline"
                    size={42}
                    className="text-blue-300"
                />
            </Pressable>

        </View>
    );
};

