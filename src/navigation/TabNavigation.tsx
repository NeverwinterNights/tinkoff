import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../screens/HomeScreen";
import {PaymentsScreen} from "../screens/PaymentsScreen";
import {ServicesScreen} from "../screens/ServicesScreen";
import {SupportScreen} from "../screens/SupportScreen";
import {MoreScreen} from "../screens/MoreScreen";
import {HomeNavigator} from "./HomeNavigation";
import {RootTabParamList} from "./types";
import AntDesign from "@expo/vector-icons/AntDesign";




const Tab = createBottomTabNavigator<RootTabParamList>();



export const TabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={({route, navigation}) => {
            //console.log('tab nav', navigation )
            let iconName:keyof  typeof  AntDesign.glyphMap
            return {
                headerShown:false,
                tabBarIcon: ({focused}) => {

                    if (route.name === "Home") {
                        iconName = "creditcard"
                    }
                    if (route.name === "Payments") {
                        iconName = "pay-circle1"
                    }
                    if (route.name === "Services") {
                        iconName = "switcher"
                    }
                    if (route.name === "Support") {
                        iconName = "message1"
                    }
                    if (route.name === "More") {
                        iconName = "ellipsis1"
                    }
                    return <AntDesign name={iconName} size={focused ? 28 : 22}
                                   color={focused ? "#488CF9" : "gray"} onPress={() => {navigation.navigate(route.name)}}/>
                }
            }
        }}>
            <Tab.Screen name={"Home"} component={HomeNavigator}/>
            <Tab.Screen name={"Payments"} component={PaymentsScreen}/>
            <Tab.Screen name={"Services"} component={ServicesScreen}/>
            <Tab.Screen name={"Support"} component={SupportScreen}/>
            <Tab.Screen name={"More"} component={MoreScreen}/>
        </Tab.Navigator>
    )
}
