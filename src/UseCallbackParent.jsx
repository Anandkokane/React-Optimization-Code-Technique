import { useCallback, useState } from 'react';
import UseCallbackChild from './UseCallbackChild';
const UseCallbackParent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("child clicked");
    }, [])
    
    // const handleClick = () => {
    //     console.log("child clicked");
    // }

    console.log("Parent Rendered");
    return (
        <>
            <p className="mb-4 text-lg font-semibold text-gray-700">
                Count is : <span className="text-blue-600">{count}</span>
            </p>

            <button
                onClick={() => setCount(count + 1)}
                className="mb-4 rounded-lg bg-blue-500 px-4 py-2 text-white font-medium 
             hover:bg-blue-600 active:scale-95 transition"
            >
                Increment
            </button>

            <UseCallbackChild
                onClick={handleClick}
                
            />

        </>
    )
};
export default UseCallbackParent;