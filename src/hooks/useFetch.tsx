import { useEffect, useState } from "react";
import request from "../utils/axiosInterceptors";

const useFetch = <T = unknown>(url: string) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>(null);
    const [error, setError] = useState<string>(null);

    useEffect(() => {
        request({ url })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [url]);
    return { loading, data, error }
}

export default useFetch