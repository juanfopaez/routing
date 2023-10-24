import { useRouteError } from "react-router-dom";

export function Error(){
    const error = useRouteError();
    console.error(error);
    return <div>my error...</div>;
}