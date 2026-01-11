import { useRef } from "react";

const Child = () => {
    const renders = useRef(0);

    renders.current += 1;
    console.log("Child component rendered", renders.current);
    return (
        <div className="p-4 rounded-md bg-gray-100">
            <p>Rendered: {renders.current} times</p>
        </div>
    );
};

export default Child;
