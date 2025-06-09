import { useContext } from 'react';
import { UrlContext } from "../context/urlContext.jsx";

function DisplayURL() {
    const { shortURL } = useContext(UrlContext);
    
    return (
        <div className={"display-url"}>
            <a href={`${shortURL}`}>{shortURL || ""}</a>
        </div>
    );
}

export default DisplayURL;