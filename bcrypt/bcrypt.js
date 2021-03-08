const bcrypt = require('bcrypt')
// one way to this is like this.
//  save the salt rounds into a variable
// and passed that into the hash
const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt)
    console.log(hash)
}

// The other way is,
//  initiate the salt rounds by passing it into the hash.
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);

    console.log(hash)
}

const login = async (pw, hashpw) => {
    const result = await bcrypt.compare(pw, hashpw);
    if (result) {
        console.log(`its a match`)
    } else {
        console.log(`You can't hack me`)
    }
}
