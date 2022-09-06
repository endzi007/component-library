import { useEffect, useState } from "react";
export function useFetchData(url) {
    const [data, setData] = useState();
    const [isDone, setIsDone] = useState(false);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
            if (!data.error) {
                setSuccess(true);
            }
            setData(data);
            setIsDone(true);
        });
    }, [url]);
    return { data, isDone, success };
}
//# sourceMappingURL=useFetchData.js.map