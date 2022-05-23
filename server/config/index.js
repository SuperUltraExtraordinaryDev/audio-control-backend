const DATABASE_CONFIG = require("./database");

const PORT = 8080;
const UPLOAD_URL = "uploads";

const DEBUG = {
    REQUEST_SHOW: true,
    URL: true,
    TOKEN: true,
    PARAMS: true,
    QUERY: true,
    BODY: true,
    RESPONSE: false,
    ERROR: true,
};

const ROUTE_VERSION = "v1";

module.exports = {
    DATABASE_CONFIG,
    PORT,
    DEBUG,
    UPLOAD_URL,
    ROUTE_VERSION,
};
