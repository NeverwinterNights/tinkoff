import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useData} from "../hooks/useData";
//@ts-ignore
import {StoryContainer as SC} from "react-native-stories-view"

type StoryContainerPropsType = {}

export const StoryContainer = ({}: StoryContainerPropsType) => {
    const {activeStories, setActiveStories} = useData()

    return activeStories && (
        <SC
            visible
            enableProgress
            images={activeStories}
            duration={20}
            containerStyle={{height:"110%", widths:"100%", backgroundColor:"red"}}
            onComplete={() => setActiveStories(null)}
            // barStyle={{
            //     barWidth: 100,
            //     barHeight: 8
            // }}
        />


    );
};

