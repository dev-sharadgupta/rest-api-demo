const express = require("express");
const router = express.Router();
const userRoute = require("../controller/UserController");

// Collection routes  →  /api/users
router.get("/", userRoute.getAllUsers);         // GET      - fetch all (supports ?role= filter)
router.post("/", userRoute.createUser);         // POST     - Create new user
router.delete("/", userRoute.deleteAllUsers);   // DELETE   - Remove all users

// Single resource routes  →  /api/users/:id
router.get("/:id", userRoute.getUserById);      // GET      - Fetch user by id
router.put("/:id", userRoute.replaceUser);      // PUT      - Full replace
router.patch("/:id", userRoute.updateUser);     // PATCH    - Partial Update
router.delete("/:id", userRoute.deleteUser);     // DELETE   - Remove User

module.exports = router;