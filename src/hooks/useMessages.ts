import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../utils/firebase";
import {MessageType} from "../screens/SupportScreen";
import dayjs from "dayjs";

export const useMessages = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => onSnapshot(query(collection(db, "messages"), orderBy("timestamp", "asc")), snapshot => {
        setMessages(snapshot.docs.map((item) =>
            item.data()?.timestamp ?
                ({
                    id: item.id,
                    ...item.data(),
                    timestamp: dayjs.unix(item.data()?.timestamp.seconds).format("HH:mm")
                } as MessageType)
                :
                ({
                    id: item.id,
                    ...item.data()
                } as MessageType)
        ))
        setIsLoading(false)
    }),
[]
)

return {messages, isLoading}
}
