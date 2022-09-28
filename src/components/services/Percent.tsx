import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PercentPropsType = {
    percent: number
}

export const Percent = ({percent}: PercentPropsType) => {
    return (
        <View className="w-0 h-0 bg-transparent absolute top-0 right-0 justify-center items-center" style={{
            borderStyle: "solid",
            borderRightWidth: 27,
            borderTopWidth: 27,
            borderRightColor: "transparent",
            borderTopColor: "#AAEF00",
            transform: [{rotate: "90deg"}],
        }}>
            <Text className="w-10 h-10 absolute" style={{
                fontSize:10,
                transform: [{rotate: "-40deg"}],
                top:-34,
                left:7
            }}>{percent + "%"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});
