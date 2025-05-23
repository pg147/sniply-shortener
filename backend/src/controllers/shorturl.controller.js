// Utils
import { APIError, APISuccess } from "../utils/ResponseHandler.utils.js";
import { generateNanoID } from "../utils/Helper.utils.js";

// Services
import { createShortURLService, fetchShortURL } from "../services/shorturl.services.js";

// Models
import ShortURLModel from "../models/shorturl.model.js";

// Function to convert an original URL into Short URL
export async function convertToShortURL(req, res) {
    const { URL } = req.body;  // extracting URL from request body

    // If URL isn't provided return
    if (!URL) return APIError(res, 400, "URL is required!");

    let appendedfullURL = "";

    // If fullURL doesn't start with http:// or https://, add http:// by default
    if (!/^https?:\/\//i.test(URL)) {
        appendedfullURL = 'http://' + URL;
    } else appendedfullURL = URL;

    try {
        // Creating short url with service
        const shortenedURL = await createShortURLService(appendedfullURL);

        // If Shortened URL is created successfully
        if (shortenedURL) {
            const convertedURL = process.env.APP_URL + shortenedURL; // appending with BASE URL For app (e.g. sniply.me/SjaphUY)
            return APISuccess(res, 201, { convertedURL });
        }
    } catch (error) {
        console.log("Error converting URL : ", error.message);
        APIError(res, 500, error.message);
    }
}

// Function to redirect to the original URL using shortened ID through params
export async function redirectToOriginalURL(req, res) {
    const { id } = req.params;  // extracting ID from params

    // If ID wasn't present
    if (!id) return APIError(res, 400, "Shortened URL ID is required!");

    try {
        const shortURLDoc = await fetchShortURL(id);  // fetching ShortenedURL Doc from Database

        // If not found
        if (!shortURLDoc) return APIError(res, 404, "URL not found!");

        // If found, redirecting to the original (full) URL present with the shortened URL in the doc
        res.redirect(shortURLDoc.fullURL);
    } catch (error) {
        console.log("Error redirecting : ", error.message);
        APIError(res, 500, "Internal Server Error!");
    }
}