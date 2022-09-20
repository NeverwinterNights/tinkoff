import React from 'react';
import {TextInput} from 'react-native';

type InputFieldPropsType = {
    onChange: (value: string) => void
    value: string
    placeholder: string
    isSecure?: boolean
}

export const InputField = ({onChange, value, placeholder, isSecure}: InputFieldPropsType) => {
    return (
        <TextInput className="rounded-xl bg-gray-200 mt-3 p-3 w-full" value={value} onChangeText={onChange}
                   placeholder={placeholder} secureTextEntry={isSecure}
                   autoCapitalize={"none"}/>
    );
};

