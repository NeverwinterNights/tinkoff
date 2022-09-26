import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native"
import {TabNavigator} from "./TabNavigation";

// export type RootNavigatorStackParamList = {
//     AuthScreen: undefined
//     HomeScreen: undefined
//     ProfileScreen: undefined
//     ServicesScreen: undefined
//     SupportScreen: undefined
//     PaymentsScreen: undefined
//     MoreScreen: undefined
// }

export type RootNavigatorStackParamList = {
    AuthScreen: undefined
}

export type  HomeStackParamList = {
    HomeScreen: undefined
    ProfileScreen: undefined
}



export type RootTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    Payments: undefined
    Services: undefined
    Support: undefined
    More: undefined
}


export type  RootMainParamList = {
    AuthNavigator: NavigatorScreenParams<RootNavigatorStackParamList>
    TabNavigator: NavigatorScreenParams<RootTabParamList>
}


export const useAppNavigation = () => useNavigation<NavigationProp<RootMainParamList>>()
