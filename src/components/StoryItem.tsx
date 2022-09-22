import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {StoryType} from "../hooks/useStories";
import {useData} from "../hooks/useData";

type StoryItemPropsType = {
    story: StoryType
}

export const StoryItem = ({story}: StoryItemPropsType) => {
    const {setActiveStories} = useData()
    return (
        <Pressable onPress={()=> setActiveStories(story.images)}>
            <View style={{padding: 2, borderWidth: 1}} className="w-24 h-24 rounded-2xl ml-4 border-solid bg-blue-400">
                <ImageBackground source={{uri: story.images[0]}} resizeMode={"cover"}
                                 className="w-full h-full justify-end" imageStyle={{borderRadius: 12}}>
                    <Text className="text-white" style={{fontSize:12, margin:8}}>{story.title}</Text>
                </ImageBackground>
            </View>
        </Pressable>
    );
};

