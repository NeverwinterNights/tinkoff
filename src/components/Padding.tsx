import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type PaddingPropsType = {
    children: ReactNode
    style?: string
}

export const Padding = ({children, style=""}: PaddingPropsType) => {
    return (
        <View className={`px-4 ${style}`}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});
