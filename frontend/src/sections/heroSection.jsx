// Components
import { URLInputCard } from "../components";
import { useContext } from "react";
import { UrlContext } from "../context/urlContext.jsx";
import DisplayURL from "../components/displayUrl.jsx";

function HeroSection() {
    const { shortURL } = useContext(UrlContext);

    return (
        <section className={"h-screen w-full flex flex-col space-y-3 items-center justify-center"}>
            <URLInputCard />

            {shortURL && <DisplayURL />}
        </section>
    );
}

export default HeroSection;