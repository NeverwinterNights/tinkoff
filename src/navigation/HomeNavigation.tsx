import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {HomeScreen} from "../screens/HomeScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {HomeStackParamList} from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>()

export const HomeNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
)

