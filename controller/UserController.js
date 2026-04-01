const userdata = require("../data/Users");

// --- GET /api/users -----------------------------------------
// Get all users (supports ?role=admin filter)
const getAllUsers = (req, res) => {
    const { role } = req.query;

    let result = userdata.users;
    if (role) {
        result = result.filter((u) => u.role === role);
    }

    res.status(200).json({
        success: true,
        count: result.length,
        data: result,
    });
};

// --- GET /api/users/:id -----------------------------------------
// Get a single user by ID
const getUserById = (req, res) => {

    const userId = parseInt(req.params.id);

    const user = userdata.users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
}

// --- POST /api/users -----------------------------------------
// Create a new user
const createUser = (req, res) => {
    const { name, email, role = "user" } = req.body;

    // Basic Validation
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    // Check duplicate email
    if (userdata.users.find((u) => u.email === email)) {
        return res.status(409).json({
            success: false,
            message: "Email already exists"
        });
    }

    const newUser = { id: userdata.getNextId(), name, email, role };
    userdata.users.push(newUser);

    res.status(200).json({
        success: true,
        message: "User Created Successfully",
        data: newUser
    });
};

// --- PUT /api/users/:id --------------------------------------
// Replace entire user (full update)
const replaceUser = (req, res) => {
    const userId = parseInt(req.params.id);

    const index = userdata.users.findIndex((u) => u.id === userId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const { name, email, role } = req.body;
    if (!name || !email || !role) {
        return res.status(400).json({
            success: false,
            message: "name, email and role are required"
        });
    }

    userdata.users[index] = { id: userdata.users[index].id, name, email, role };

    res.status(200).json({
        success: true,
        data: userdata.users[index]
    });
};

// ---- PATCH /api/users/:id ----------------------------------------------
// Partially update a user (only sent fields)
const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);

    const index = userdata.users.findIndex((u) => u.id === userId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Merge only allowed fields
    const allowedFields = ["name", "email", "role"];
    allowedFields.forEach((field) => {
        if (req.body[field] != undefined) {
            userdata.users[index][field] = req.body[field];
        }
    });

    res.status(200).json({
        success: true,
        data: userdata.users[index]
    });
}

// --- DELETE /api/users/:id ---------------------------------------
// Delete a user
const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);

    const index = userdata.users.findIndex((u) => u.id === userId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deleted = userdata.users.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "User deleted",
        data: deleted
    });
};

// --- DELETE /api/users --------------------------------------------
// Delete ALL users
const deleteAllUsers = (req, res) => {
    const count = userdata.users.length;
    userdata.users.length = 0; // Clear array in-place

    res.status(200).json({
        success: true,
        message: `Deleted ${count} users`
    });
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    replaceUser,
    updateUser,
    deleteUser,
    deleteAllUsers
};