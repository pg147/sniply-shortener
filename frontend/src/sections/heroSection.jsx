// React imports
import { useContext } from "react";

// Components
import { URLInputCard, DisplayURL } from "../components";

// Context API
import { UrlContext } from "../context/urlContext.jsx";

function HeroSection() {
    const { shortURL } = useContext(UrlContext);

    return (
        <section className={"h-screen w-full flex flex-col space-y-3 items-center justify-center"}>
            {/* Input card for Original URL */}
            <URLInputCard />

            {/* Shortened URL Display after conversion */}
            {shortURL && <DisplayURL />}
        </section>
    );
}

export default HeroSection;