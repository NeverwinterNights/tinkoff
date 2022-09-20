import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styleCenter} from "../utils/styles";
import {useAuth} from "../hooks/useAuth";
import {Loader} from "../components/Loader";
import {InputField} from "../components/InputField";
import {AppButton} from "../components/AppButton";


type InputValueType = {
    email: string
    password: string
}

export const AuthScreen = () => {
    const [isReg, setIsReg] = useState(false);
    const {isLoading, login, register} = useAuth()
    const [inputValue, setInputValue] = useState<InputValueType>({} as InputValueType);

    const authHandler = async () => {
        const {email, password} = inputValue
        if (isReg) await register(email, password)
        else await login(email, password)
        setInputValue({} as InputValueType)
    }
    return (
        <View className={styleCenter}>
            <View className="mx-5 h-full items-center justify-center">
                <View className="w-9/12">
                    <Text className="text-center text-gray-800 text-2xl font-bold mb-2">
                        {isReg ? "Sing Up" : "Sing In"}
                    </Text>
                    {isLoading ? <Loader/> : <>
                        <InputField onChange={(value) => setInputValue({...inputValue, email: value})}
                                    value={inputValue.email} placeholder="Enter email"/>
                        <InputField onChange={(value) => setInputValue({...inputValue, password: value})}
                                    value={inputValue.password} placeholder="Enter password" isSecure/>
                        <AppButton onPress={authHandler} title="Let's go"/>
                        <Pressable onPress={() => setIsReg(!isReg)}>
                            <Text
                                className="text-gray-800 opacity-30 text-right text-sm">{isReg ? "Login" : "Register"}</Text>
                        </Pressable>
                    </>}
                </View>
            </View>
        </View>
    );
};

