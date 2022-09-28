import {useAuth} from "./useAuth";
import {useEffect, useState} from "react";
import {ProfileDataType} from "./useProfile";
import {Alert} from "react-native";

type CurrencyType = {
    value: string | number
    name: "USD" | "EUR" | "PLN"
}

export const useCurrency = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currency, setCurrency] = useState<CurrencyType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=aJRKlOmWa8nhR41naNBGli9Mbvh3bixETtn3S1wd&base_currency=RUB")
                const res = await response.json()


                setCurrency([
                    {
                        name: "USD",
                        value: (1 / res.data.USD.value).toFixed(2)
                    },
                    {
                        name: "EUR",
                        value: (1 / res.data.EUR.value).toFixed(2)
                    },
                    {
                        name: "PLN",
                        value: (1 / res.data.PLN.value).toFixed(2)
                    },
                ])


            } catch (error) {
                Alert.alert("Some error with getting currency", error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()

    }, []);

    return {currency, isLoading}


}
