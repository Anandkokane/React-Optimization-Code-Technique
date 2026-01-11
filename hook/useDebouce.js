import { useEffect, useState } from "react"

const useDebouce = (value, delay = 500) => {
    const [debouceValue, setDebouceValue] = useState(value);

    useEffect(() => {

        const id = setTimeout(() => {
            setDebouceValue(value);
        }, delay)

        console.log("id",id)
        return () => clearTimeout(id);
    }, [value, delay])
    return debouceValue;
}
export default useDebouce;