import React, {FC, ReactNode} from 'react';
import {ScrollView, Text, View} from 'react-native';

type LayoutPropsType = {
    isScrollView?: boolean
    children: ReactNode
}

export const Layout: FC<LayoutPropsType> = ({children, isScrollView = true}) => {
    return (
        <View className="bg-white w-full h-full pt-16">
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
    );
};
