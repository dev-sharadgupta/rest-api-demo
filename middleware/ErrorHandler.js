// 404 - Route not found
const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
    });
};

// 500 - Global error handler
const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
};

module.exports = { notFound, errorHandler };