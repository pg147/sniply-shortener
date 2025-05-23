import ShortURLModel from "../models/shorturl.model.js";

export async function saveShortURL(shortURL, fullLengthURL, userId) {
    // Creating a new document inside the shortURL collection
    const newURL = new ShortURLModel({
        fullURL: fullLengthURL,
        shortURL: shortURL
    });

    // If userId exists i.e., If User is logged in
    if (userId) {
        newURL.userId = userId;
    }

    await newURL.save();  // saving the document in the collection
}