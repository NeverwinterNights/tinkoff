import {createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState} from "react";


type ContextDataType = {
    activeStories: string[] | null
    setActiveStories: Dispatch<SetStateAction<string[] | null>>
}


export const DataContext = createContext<ContextDataType>({} as ContextDataType)


export const DataProvider = ({children}: { children: ReactNode }) => {

    const [activeStories, setActiveStories] = useState<string[] | null>(null);


    const value = useMemo(() => ({
        activeStories, setActiveStories
    }), [activeStories])
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
