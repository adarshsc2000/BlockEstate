// Import the NFTStorage class and File constructor from the 'nft.storage' package
const { NFTStorage, File } = require("nft.storage");
const mime = require("mime");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;

/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
 * @param {string} imagePath the path to an image file
 * @param {string} name a name for the NFT
 * @param {string} description a text description for the NFT
 */
async function storeNFTs(imagesPath) {
    const fullImagesPath = path.resolve(imagesPath);
    const files = fs.readdirSync(fullImagesPath);
    let responses = [];
    for (fileIndex in files) {
        const title_deed = await fileFromPath(`${path.resolve("./assets/title_deed")}/title_deed_filler.pdf`)
        const image = await fileFromPath(
            `${fullImagesPath}/${files[fileIndex]}`
        );
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });
        const dogName = files[fileIndex].replace(".jpg", "");
        const response = await nftstorage.store({
            image,
            name: dogName,
            description: `Sea view apartment with many....slice method used to truim the string to 11 chars, so 2 lines on md screen. otherwise img does not fit card`,
            properties: {
                property_id: 1,
                title_deed: title_deed,
                images: ["pic1prop1.jpeg", "pic2prop1.jpeg", "pic3prop1.jpeg"],
                propertyType: "Apartment",
                priceInBhd: "400",
                location: "Abraj Al Lulu, Manama, Capital Governate",
                bedrooms: "8",
                bathrooms: "8",
                propertyArea: "736",
                postDate: "5/12/2022",
                phoneNumber: "97333344445"
            }
        });
        responses.push(response);
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
