import { memo } from "react";

const MemoziedExample = memo( function Profile ({ name })  {
    console.log("Child called");
    return (
        <div className="p-4 rounded-md bg-gray-100">
            <p>{name}</p>
        </div>
    );
}) ;

export default MemoziedExample;
