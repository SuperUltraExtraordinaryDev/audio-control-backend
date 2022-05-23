// node_modules
const Types = require("mongoose").Types;

// models
const { AudioModel } = require("../models");

const createAudio = async (audioData) => {
    const newAudio = new AudioModel(audioData);
    const result = await newAudio.save();
    return result._doc;
};

const readAudios = async (searchData, paginations) => {
    return await AudioModel.aggregate([
        {
            $match: searchData,
        },
        {
            $sort: {
                createdAt: -1,
            },
        },
        ...paginations,
    ]);
};

const readAudiosCount = async (searchData) => {
    return await AudioModel.count(searchData);
};

const readCertainAudio = async (id) => {
    const result = await AudioModel.findById(id);
    return result._doc;
};

module.exports = {
    createAudio,
    readAudios,
    readAudiosCount,
    readCertainAudio,
};
