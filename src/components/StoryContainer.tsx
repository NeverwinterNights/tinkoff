import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useData} from "../hooks/useData";
import  {StoryContainer as SC} from "react-native-stories-view"

type StoryContainerPropsType = {}

export const StoryContainer = ({}: StoryContainerPropsType) => {
    const {activeStories, setActiveStories} = useData()

    return activeStories && (
        <View>

        </View>
    );
};

