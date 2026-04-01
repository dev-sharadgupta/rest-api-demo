// In-memory dummy data (acts as our "database")
let users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "user" },
    { id: 3, name: "Carol White", email: "carol@example.com", role: "user" },
];

let nextId = 4; // Auto-increment ID counter

module.exports = { users, getNextId: () => nextId++ };