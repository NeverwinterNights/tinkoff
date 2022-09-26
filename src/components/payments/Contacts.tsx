import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import * as querystring from "querystring";
import {useContacts} from "../../hooks/useContacts";
import {SubTitle} from "../SubTitle";
import {Loader} from "../Loader";
import {ContactItem} from "./ContactItem";

type ContactsPropsType = {}


export const Contacts = ({}: ContactsPropsType) => {

    const {contacts, isLoading} = useContacts()
    return (
        <View className="my-8">
            <SubTitle text="Phone transfers"/>
            {isLoading ? <Loader/> : <FlatList data={contacts}
                                               className="mt-5"
                                               horizontal
                                               showsHorizontalScrollIndicator={false}
                                               renderItem={({item}) => <ContactItem contact={item}/>}
                                               keyExtractor={(item) => item.id}

            />
            }
        </View>
    );
};

