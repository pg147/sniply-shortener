// React imports
import { useContext, useRef } from 'react';

// Context API
import { UrlContext } from "../context/urlContext.jsx";

// Icon libraries
import { Copy01Icon } from "hugeicons-react";

function DisplayURL() {
    const { shortURL, originalURL } = useContext(UrlContext);
    const copyButtonRef = useRef(null);  // copy-button ref

    const handleCopyButtonClick = () => {
        if (copyButtonRef && copyButtonRef.current) {
            navigator.clipboard.writeText(shortURL?.toString()).then(() => {
                copyButtonRef.current.style.backgroundColor = "#1EC997"  // changing copy-button's background
                copyButtonRef.current.children[1].textContent = "Copied"  // changing CTA text
            });
        }
    }

    return (
        <div className={"display-url"}>
            {/* Original & Shortened URL */}
            <div className={"flex flex-col"}>
                <p className={"text-sm font-thin"}>{originalURL || ""}</p>
                <a className={"text-lg font-medium"} href={`${shortURL}`}>{shortURL || ""}</a>
            </div>

            {/* Copy button */}
            <button ref={copyButtonRef} onClick={handleCopyButtonClick} className={"btn-copy"}>
                <Copy01Icon className={"text-white size-6"}/>
                <span>Copy</span>
            </button>
        </div>
    );
}

export default DisplayURL;