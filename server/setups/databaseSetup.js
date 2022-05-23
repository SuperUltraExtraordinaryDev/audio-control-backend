// node_modules
const mongoose = require("mongoose");

// config
const { DATABASE_CONFIG } = require("../config");

// consts
const { MESSAGES } = require("../consts");

// utils
const { LOGGER } = require("../utils");

const databaseSetup = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DATABASE_CONFIG.MONGODB_URL)
            .then(() => {
                resolve();

                console.log(MESSAGES.DATABASE_CONNECTION_SUCCESS);
                LOGGER.log(MESSAGES.DATABASE_CONNECTION_SUCCESS);
            })
            .catch((error) => {
                console.log(MESSAGES.DATABASE_CONNECTION_FAILURE);
                console.log(error.message);
                LOGGER.log(MESSAGES.DATABASE_CONNECTION_FAILURE);
                console.log(error.message);

                reject(error);
            });
    });
};

module.exports = databaseSetup;
