export function APIError(res, statusCode, message) {
    return res.status(statusCode).json({
        success: false,
        message
    });
}

export function APISuccess(res, statusCode, data) {
    return res.status(statusCode).json({
        success: true,
        data
    });
}
