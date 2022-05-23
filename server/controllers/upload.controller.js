// config
const { UPLOAD_URL } = require("../config");

// utils
const { RESPONSE } = require("../utils");

const upload = async (req, res, next) => {
    const getBodyFileName = (file) => `${UPLOAD_URL}/${file.filename}`;

    const reqFiles = req.files.map(getBodyFileName);

    RESPONSE(res, 200, {
        url: reqFiles[0],
    });
};

module.exports = { upload };
