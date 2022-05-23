// node_modules
const express = require("express");

// setups
const { backendSetup, databaseSetup } = require("./setups");

databaseSetup().then(() => {
    const app = express();
    backendSetup(app);
});
