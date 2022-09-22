import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useStories} from "../hooks/useStories";
import {Loader} from "./Loader";
import {StoryItem} from "./StoryItem";

type StoriesPropsType = {}

export const Stories = ({}: StoriesPropsType) => {
    const {stories, isLoading} = useStories()

    return (
        <View className="my-7">
            {isLoading ? <Loader/> :
                <>
                    <FlatList showsHorizontalScrollIndicator={false} horizontal data={stories} keyExtractor={(item) => item.id}
                              renderItem={({item}) => <StoryItem story={item}/>}/>
                </>}

        </View>
    );
};

