const { File } = require("nft.storage");
const fs = require("fs");
const mime = require("mime");
const path = require("path");

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

const properties = [
    {
        propertyID: 1,
        titleDeed: "",
        propertyImages: [],
        propertyType: "Apartment",
        oldPriceInBhd: 500,
        location: "Abraj Al Lulu, Manama, Capital Governate",
        bedrooms: 3,
        bathrooms: 3,
        area: 400,
        block: 321,
        phone: "97333344444"
    },
    {
        propertyID: 2,
        titleDeed: "",
        propertyImages: [],
        propertyType: "Villa",
        oldPriceInBhd: 800,
        location: "in front of Salmania, Manama, Capital Governate",
        bedrooms: 6,
        bathrooms: 5,
        area: 750,
        block: 321,
        phone: "97322222222",
    },
    {
        propertyID: 3,
        titleDeed: "",
        propertyImages: [],
        propertyType: "Villa",
        oldPriceInBhd: 600,
        location: "Villa 2, Manama, Capital Governate",
        bedrooms: 5,
        bathrooms: 3,
        area: 500,
        block: 318,
        phone: "97333333333"
    },
    {
        propertyID: 4,
        titleDeed: "",
        propertyImages: [],
        propertyType: "Apartment",
        oldPriceInBhd: 200,
        location: "Muharraq, Muharraq Governate, Bahrain",
        bedrooms: 2,
        bathrooms: 2,
        area: 400,
        block: 392,
        phone: "97322222222"
    },
    {
        propertyID: 5,
        titleDeed: "",
        propertyImages: [],
        propertyType: "Apartment",
        oldPriceInBhd: 300,
        location: "East Riffa, Southern Governate, Bahrain",
        bedrooms: 5,
        bathrooms: 4,
        area: 500,
        block: 418,
        phone: "97355555555"
    },
    {
        propertyID: 6,
        titleDeed: "",
        propertyImages: [],
        propertyType: "Villa",
        oldPriceInBhd: 1000,
        location: "Seef Area, Capital Governate, Bahrain",
        bedrooms: 4,
        bathrooms: 3,
        area: 1000,
        block: 319,
        phone: "97366666666"
    }
];

async function getProperties() {
    const title_deed = await fileFromPath(
        `${path.resolve("./assets/title_deed")}/title_deed_filler.pdf`
    );

    const image1 = await fileFromPath(
        `${path.resolve("./assets/images")}/property-image-1.jpg`
    );

    const image2 = await fileFromPath(
        `${path.resolve("./assets/images")}/property-image-2.jpg`
    );

    const image3 = await fileFromPath(
        `${path.resolve("./assets/images")}/property-image-3.jpg`
    );

    for (const property of properties) {
      property['titleDeed'] = title_deed;
      property['propertyImages'] = [image1, image2, image3];
    }
    return properties;
}

getProperties();

module.exports = {
    getProperties
};
