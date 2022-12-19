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


const title_deed = fileFromPath(
    `${path.resolve("./assets/title_deed")}/title_deed_filler.pdf`
);

const properties = [
    {
        propertyID: 1,
        titleDeed: title_deed,
        images: ["pic1prop1.jpeg", "pic2prop1.jpeg", "pic3prop1.jpeg"],
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
        titleDeed: title_deed,
        images: ["pic4prop2.jpeg", "pic5prop2.jpeg", "pic6prop2.jpeg"],
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
        titleDeed: title_deed,
        images: ["pic7prop3.jpeg", "pic8prop3.jpeg", "pic9prop3.jpeg"],
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
        titleDeed: title_deed,
        images: ["pic10prop4.jpeg", "pic11prop4.jpeg", "pic12prop4.jpeg"],
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
        titleDeed: title_deed,
        images: ["pic13prop5.jpg", "pic14prop5.jpg", "pic15prop5.jpg"],
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
        titleDeed: title_deed,
        images: ["pic16prop6.jpeg", "pic17prop6.jpeg", "pic18prop6.jpeg"],
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

module.exports = {
    properties
};
