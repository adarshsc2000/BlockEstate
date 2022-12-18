const { storeNFTs } = require("../client/constants/uploadToNftStorage");

async function main() {
    const responses = await storeNFTs("./assets/images");
    console.log(responses);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
