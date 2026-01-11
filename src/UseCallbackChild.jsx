import { memo } from "react";

const UseCallbackChild = memo(function child({ onClick }) {
    console.log("Child Rendred")
    return (
        <>
            <button onClick={onClick}>Click me</button>
        </>
    )
});
export default UseCallbackChild;