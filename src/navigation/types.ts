import {NavigationProp, useNavigation} from "@react-navigation/native"

export type RootNavigatorStackParamList = {
    AuthScreen: undefined
    HomeScreen: undefined
    ProfileScreen: undefined
    ServicesScreen: undefined
    SupportScreen: undefined
    PaymentsScreen: undefined
    MoreScreen: undefined
}


export const useAppNavigation = () => useNavigation<NavigationProp<RootNavigatorStackParamList>>()
