// React imports
import { useContext, useState } from "react";

// Helper functions
import { URLValidation } from "../utils/helper.js";

// Context API
import { UrlContext } from "../context/urlContext.jsx";

// Services
import { ConvertURLService } from "../services/urlServices.jsx";

function URLInputCard() {
    const [link, setLink] = useState("");
    const [error, setError] = useState("");

    const { setLoading, setShortURL } = useContext(UrlContext);  // extracting loading setter through context

    // Function to handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();  // preventing default behaviour form

        // Validating URL before converting
        const errors = URLValidation(link);

        // If errors found
        if (Object.keys(errors).length > 0) {
            setError(errors.url);
            return;
        }

        try {
            setLoading(true);
            const convert = await ConvertURLService(link);

            if (convert.success) {
                setShortURL(convert.data.convertedURL);

                // Cleanup after a successful conversion
                setLink("");
                setError("");
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className={"w-full max-w-3xl"}>
            <div className={"flex flex-col space-y-6 h-fit w-full px-4 py-6 rounded-3xl bg-card border border-stroke"}>
                {/* Title */}
                <h3 className={"text-2xl text-center"}>Convert your URL</h3>

                {/* Field & Submit button */}
                <div className={"flex flex-col space-y-3 w-full"}>
                    {/* Link Field */}
                    <div className={"input-container"}>
                        <label htmlFor={"link"} className={"input-label"}>Provide a link</label>
                        <input
                            id={"link"}
                            type={"text"}
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className={"input-field"}
                            placeholder={"e.g. www.prathmesh.dev"}
                        />
                    </div>

                    {/* Error */}
                    {error?.length > 0 && <p className={"font-thin text-sm text-red-500"}>{error}</p>}

                    {/* Submit button */}
                    <button type={"submit"} className={"btn-primary"}>Convert</button>
                </div>
            </div>
        </form>
    );
}

export default URLInputCard;