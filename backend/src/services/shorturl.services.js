// Utils
import { generateNanoID } from "../utils/Helper.utils.js";

// Models
import ShortURLModel from "../models/shorturl.model.js";

// Data-Object-Access
import { saveShortURL } from "../dao/shorturl.dao.js";

export async function createShortURLService(url) {
    let shortenedURL = generateNanoID(7);  // generating unique nanoid string of length 7

    // Saving short URL in the Database with DAO (for better modulation)
    await saveShortURL(shortenedURL, url);

    return shortenedURL;  // returning the shortened URL string
}

export async function fetchShortURL(shortURLId) {
    return ShortURLModel.findOne({ shortURL: shortURLId });
}