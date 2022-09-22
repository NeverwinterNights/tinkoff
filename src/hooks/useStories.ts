import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../utils/firebase";

export type StoryType = {
    id: string
    title: string
    images: string[]

}


export const useStories = () => {
    const [stories, setStories] = useState<StoryType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => onSnapshot(query(collection(db, "stories"), orderBy("timestamp", "asc")), snapshot => {
        setStories(snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data()
        }) as StoryType))
        setIsLoading(false)
    }), [])

    return {stories, isLoading}
}
