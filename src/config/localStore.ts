// Secure local storage

import SecureLS from "secure-ls";

const config = {
    encodingType: "aes",
    isCompression: true,
}

const ls = new SecureLS(config);

export default ls;