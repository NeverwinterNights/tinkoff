import React from 'react';
import {Text} from 'react-native';
import {useProfile} from "../hooks/useProfile";
import {Layout} from "../components/Layout";
import {Title} from "../components/Title";
import {Padding} from "../components/Padding";
import {Loader} from "../components/Loader";
import {InputField} from "../components/InputField";
import {AppButton} from "../components/AppButton";
import {useAuth} from "../hooks/useAuth";

type ProfileScreenPropsType = {}

export const ProfileScreen = ({}: ProfileScreenPropsType) => {
    const {isLoading: isProfileLoading, name, setName} = useProfile()
    const {logout} = useAuth()

    return (
        <Layout>
            <Title text="Profile" isCentered={true}/>
            <Padding>
                {isProfileLoading ? <Loader/> : <>
                    <InputField onChange={setName} value={name} placeholder="Enter name"/>
                    <AppButton onPress={() => {
                    }} title="Update profile"/>
                    <AppButton onPress={logout} title="Logout" colors={["bg-gray-200", "#D6D8DB"]}/>
                </>}
            </Padding>
        </Layout>
    );
};

