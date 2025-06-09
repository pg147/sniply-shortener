import { createContext, useState } from "react";

export const UrlContext = createContext();

function URLContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [shortURL, setShortURL] = useState("");

    return <UrlContext.Provider value={{ loading, setLoading, shortURL, setShortURL }}>
        {children}
    </UrlContext.Provider>
}

export default URLContextProvider;