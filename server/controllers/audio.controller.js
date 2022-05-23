// services
const { audioService } = require("../services");

// utils
const { RESPONSE, errorHandler } = require("../utils");

const createAudio = async (req, res, next) => {
    try {
        const { name, extension, description, url } = req.body;
        const audioData = { name, extension, description, url };

        const newAudio = await audioService.createAudio(audioData);
        RESPONSE(res, 200, { audio: newAudio });
    } catch (error) {
        errorHandler(error);
    }
};

const readAudios = async (req, res, next) => {
    try {
        const { name, page, count } = req.query;
        const filename = name ? new RegExp(name) : undefined;
        const pageIndex = page ? parseInt(page) : 0;
        const itemCount = count ? parseInt(count) : 5;

        let searchData = {};
        if (filename) searchData.name = filename;

        let paginations = [
            {
                $skip: itemCount !== -1 ? pageIndex * itemCount : 0,
            },
        ];
        if (itemCount !== -1) {
            paginations.push({ $limit: itemCount });
        }

        const audios = await audioService.readAudios(searchData, paginations);
        const totalCount = await audioService.readAudiosCount(searchData);
        RESPONSE(res, 200, {
            count: totalCount,
            audios,
        });
    } catch (error) {
        errorHandler(error);
    }
};

const readCertainAudio = async (req, res, next) => {
    try {
        const { id } = req.params;

        const audio = await audioService.readCertainAudio(id);
        RESPONSE(res, 200, { audio });
    } catch (error) {
        errorHandler(error);
    }
};

module.exports = {
    createAudio,
    readAudios,
    readCertainAudio,
};
