const express = require("express");
const userRoutes = require("./routes/UserRoutes");
const { notFound, errorHandler } = require("./middleware/ErrorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware -----------------------------------
app.use(express.json()); // Parse JSON request bodies

// --- Welcome Route
app.get("/", (req, res) => {
    res.json({
        message: "REST API Demo",
        endpoints: {
            "GET    /api/users"     : "Get all users (filter: ?role=admin)",
            "GET    /api/users/:id" : "Get user by ID",
            "POST   /api/users"     : "Create new user",
            "PUT    /api/users/:id" : "Replace user (full update)",
            "PATCH  /api/users/:id" : "Update user (partial)",
            "DELETE /api/users/:id" : "Delete one user",
            "DELETE /api/users"     : "Delete all users",
        },
    });
});

app.get("/memory", (req, res) => {
  const mem = process.memoryUsage();
  res.json({
    heapUsed:  (mem.heapUsed  / 1024 / 1024).toFixed(2) + " MB",  // actually used
    heapTotal: (mem.heapTotal / 1024 / 1024).toFixed(2) + " MB",  // allocated
    rss:       (mem.rss       / 1024 / 1024).toFixed(2) + " MB",  // total RAM
    external:  (mem.external  / 1024 / 1024).toFixed(2) + " MB",  // C++ objects
  });
});


// --- Routes -----------------------------------------------
app.use("/api/users", userRoutes);

// --- Error Handling -------------------------------------
app.use(notFound);
app.use(errorHandler);

// --- Start Server --------------------------------------
app.listen(PORT, () => {
    console.log(`Serving running at http://localhost:${PORT}`);
})