function URLValidation(URL) {
    let errors = {};
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?(\?[&\w=.-]*)?(#[\w-]*)?$/i;

    if (!URL) {
        errors.url = "Please provide an URL to continue"
    } else if (!urlRegex.test(URL)) {
        errors.url = "Invalid URL"
    }

    return errors;
}

export { URLValidation };