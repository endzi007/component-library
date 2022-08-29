import { useEffect, useState } from "react";
export function useFetchData(url) {
    const [data, setData] = useState();
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
            setData(data);
            setIsDone(true);
        });
    }, [url]);
    return { data, isDone };
}
//# sourceMappingURL=useFetchData.js.map