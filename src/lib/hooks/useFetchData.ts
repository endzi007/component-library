import { useEffect, useState } from "react";

export function useFetchData<Payload>(url: string) {
    const [data, setData] = useState<any>();
    const [isDone, setIsDone] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data: any) => {
                if (!data.error) {
                    setSuccess(true);
                }
                setData(data);
                setIsDone(true)
            })
    }, [url])
    return { data, isDone, success }
}