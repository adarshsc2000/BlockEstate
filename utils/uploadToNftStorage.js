// Import the NFTStorage class and File constructor from the 'nft.storage' package
const { NFTStorage, File } = require("nft.storage");
const { getProperties } = require("../constants/properties");
const fs = require("fs");
const mime = require("mime");
const path = require("path");
require("dotenv").config();

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;
let responses = [];

/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
 * @param {string} imagePath the path to an image file
 * @param {string} name a name for the NFT
 * @param {string} description a text description for the NFT
 */
async function storeNFTs(imagesPath) {
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

    if(responses.length == 0)
    {
        for (const property of await getProperties()) {
            const image = await fileFromPath(path.resolve(imagesPath));
            const propertyName = `Property ${property.propertyID}`;
            const response = await nftstorage.store({
                image,
                name: propertyName,
                description: `The Apartment has free high-speed WIFI, fully equipped kitchen with dishwasher, TV with international channels, air-condition and a new modern interior combined with beautifully preserved old wooden floors. Comfortably sleeps 6 guests.`,
                properties: property
            });
            responses.push(response);
        }
    }
    return responses;
}

/**
 * A helper to read a file from a location on disk and return a File object.
 * Note that this reads the entire file into memory and should not be used for
 * very large files.
 * @param {string} filePath the path to a file to store
 * @returns {File} a File object containing the file content
 */
async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath);
    const type = mime.getType(filePath);
    return new File([content], path.basename(filePath), { type });
}

module.exports = {
    storeNFTs
};
