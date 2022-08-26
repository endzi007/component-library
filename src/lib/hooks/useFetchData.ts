import { useEffect, useState } from "react";


export default function useFetchData<Payload>(url: string) {
    const [data, setData] = useState<Payload | null>();
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data: Payload) => {
                setData(data);
                setIsDone(true)
            })
    }, [url])
    return { data, isDone }
}