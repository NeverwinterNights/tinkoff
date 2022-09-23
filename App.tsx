import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {AuthProvider} from "./src/providers/AuthProvider";
import {Navigation} from "./src/navigation/Navigation";
import {styleCenter} from "./src/utils/styles";
import {DataProvider} from "./src/providers/DataProvider";
import {StoryContainer} from "./src/components/StoryContainer";

export default function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <StoryContainer/>
                <Navigation/>
            </DataProvider>
        </AuthProvider>
    );
}

