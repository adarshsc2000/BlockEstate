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
        images: [],
        propertyType: "Apartment",
        priceInBhd: "400",
        location: "Abraj Al Lulu, Manama, Capital Governate",
        bedrooms: "8",
        bathrooms: "8",
        propertyArea: "736",
        postDate: "5/12/2022",
        phoneNumber: "97333344444"
    },
    {
        propertyID: 2,
        titleDeed: "",
        images: [],
        propertyType: "Villa",
        priceInBhd: "600",
        location: "in front of salmania, Manama, Capital Governate",
        bedrooms: "10",
        bathrooms: "14",
        propertyArea: "750",
        postDate: "8/12/2022",
        phoneNumber: "97322222222"
    },
    {
        propertyID: 3,
        titleDeed: "",
        images: [],
        propertyType: "Villa",
        priceInBhd: "600",
        location: "villa 2, Manama, Capital Governate",
        bedrooms: "3",
        bathrooms: "5",
        propertyArea: "751",
        postDate: "8/12/2022",
        phoneNumber: "97333333333"
    },
    {
        propertyID: 4,
        titleDeed: "",
        images: [],
        propertyType: "Apartment",
        priceInBhd: "200",
        location: "in front of salmania, Manama, Capital Governate",
        bedrooms: "10",
        bathrooms: "14",
        propertyArea: "752",
        postDate: "8/12/2022",
        phoneNumber: "97322222222"
    },
    {
        propertyID: 5,
        titleDeed: "",
        images: [],
        propertyType: "Apartment",
        priceInBhd: "300",
        location: "in front of salmania, Manama, Capital Governate",
        bedrooms: "4",
        bathrooms: "6",
        propertyArea: "754",
        postDate: "9/12/2022",
        phoneNumber: "97355555555"
    },
    {
        propertyID: 6,
        titleDeed: "",
        images: [],
        propertyType: "Villa",
        priceInBhd: "500",
        location: "in front of salmania, Manama, Capital Governate",
        bedrooms: "9",
        bathrooms: "11",
        propertyArea: "756",
        postDate: "10/12/2022",
        phoneNumber: "97366666666"
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
      property['images'] = [image1, image2, image3];
    }
    return properties;
}

getProperties();

module.exports = {
    getProperties
};
