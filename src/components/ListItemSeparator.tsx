import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ListItemSeparatorPropsType = {}

export const ListItemSeparator = ({}: ListItemSeparatorPropsType) => {
    return (
        <View style={styles.container}/>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E1E2",
        marginBottom:24
    }
});


