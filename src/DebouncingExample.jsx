import { useEffect, useState } from "react";
import useDebouce from '../hook/useDebouce';

const DebouncingExample = () => {

    const [query, setQuery] = useState("");
    const debounceQuery = useDebouce(query,600);

    useEffect(()=>{
        if(!debounceQuery) return;

        console.log("api called",debounceQuery);

    },[debounceQuery])

    return (
        <>
            <h2>Search User</h2>
            <input
            className="border bg-gray-200 p-1"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </>
    )

};
export default DebouncingExample