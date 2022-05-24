const DATABASE_CONFIG = require("./database");

const PORT = 8080;
const UPLOAD_URL = "uploads";

const DEBUG = {
    REQUEST_SHOW: false,
    URL: false,
    TOKEN: false,
    PARAMS: false,
    QUERY: false,
    BODY: false,
    RESPONSE: false,
    ERROR: false,
};

const ROUTE_VERSION = "v1";

module.exports = {
    DATABASE_CONFIG,
    PORT,
    DEBUG,
    UPLOAD_URL,
    ROUTE_VERSION,
};
