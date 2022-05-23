// node_modules
const express = require("express");
const cors = require("cors");

// routes
const appRoutes = require("../routes");

// config
const { ROUTE_VERSION } = require("../config");

// consts
const { MESSAGES } = require("../consts");

// config
const { PORT } = require("../config");

// middleware
const { routeMiddleware } = require("../utils");

const backendSetup = (app) => {
    app.use(express.json());
    app.use(cors());

    app.use(routeMiddleware);

    app.use(`/api/${ROUTE_VERSION}/`, appRoutes);

    app.listen(PORT, () => {
        console.info(MESSAGES.SERVER_START_SUCCESS);
    });
};

module.exports = backendSetup;
