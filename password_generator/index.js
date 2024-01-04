const pwdlength = 8;
const includelowercase = false;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;

function generate_pwd(pwdlength, includelowercase,includeuppercase, includesymbols, includenumbers){
    const low_char = "abcdefghigklmnopqrstuvwxyz";
    const upper_char = low_char.toUpperCase();
    const num = "0123456789";
    const symbol = "@%!?;:.()+-*/~_";
    let allow_char = "";
    let pwd = "";
    allow_char += includelowercase? low_char: "";
    allow_char += includeuppercase? upper_char: "";
    allow_char += includenumbers? num: "";
    allow_char += includesymbols? symbol: "";
    if (pwdlength <= 0){
        return "password must be at least 1";
    }
    if (allow_char.length === 0){
        return "at least select one set of characters";
    }
    for (let index = 0; index < pwdlength; index++) {
        const randomindex = Math.floor(Math.random() * allow_char.length);
        pwd += allow_char[randomindex];
    }
    return pwd;
}

const password =  generate_pwd(pwdlength,
    includelowercase,
    includeuppercase,
    includesymbols,
    includenumbers);
console.log(`Generated password: ${password}`);