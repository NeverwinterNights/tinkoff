import {MaterialIcons} from "@expo/vector-icons";

export type MoreScreenItemsType = {
    title: string
    description: string
    iconName: keyof typeof MaterialIcons.glyphMap
    link: string
}

export const moreItems:MoreScreenItemsType[]  = [
    {
        title: "ATM machines",
        description: "Search ATM for my banks is not a easy goal",
        iconName: "account-balance",
        link: `https://www.tinkoff.ru/map/atm/` ,
    },
    {
        title: "ATM machines",
        description: "Search ATM for my banks is not a easy goal",
        iconName: "account-balance",
        link: `https://www.tinkoff.ru/map/atm/` ,
    },
    {
        title: "ATM machines",
        description: "Search ATM for my banks is not a easy goal",
        iconName: "account-balance",
        link: `https://www.tinkoff.ru/map/atm/` ,
    },
    {
        title: "ATM machines",
        description: "Search ATM for my banks is not a easy goal",
        iconName: "account-balance",
        link: `https://www.tinkoff.ru/map/atm/` ,
    },

]
