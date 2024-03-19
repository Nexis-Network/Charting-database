const UtilsAddresses = require("../utils/addresses");
const EnumChainId = require("./chain.id");

const EnumContracts = {
    [EnumChainId.NZT]: {
        MAIN_ROUTER: UtilsAddresses.toCheckSum("0x649795E53A9b69CB76A71f1ad1038039F9c65Ab5"), // nexisswap
        MAIN_FACTORY: UtilsAddresses.toCheckSum("0x2c97D1fd450105cc69E05a4127E425bf4b826264") // nexisswap
    }
};

module.exports = EnumContracts