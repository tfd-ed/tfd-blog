const express = require("express");
const app = express();

// Health check endpoint - returns 200 if server is running
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// Readiness check endpoint - returns 200 if server is ready to accept requests
app.get("/ready", (req, res) => {
    res.status(200).json({
        status: "ready",
        timestamp: new Date().toISOString(),
    });
});

// Liveness check endpoint - simple ping
app.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

module.exports = app;
