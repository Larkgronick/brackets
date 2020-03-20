module.exports = function check(str, bracketsConfig) {
let compareConfig =  bracketsConfig.map((item) => item.join(''));
for (let i = 0; i < compareConfig.length; i++) {
    if(str.includes(compareConfig[i])){
        str = str.replace(compareConfig[i], "");
        i =-1
    }
}
return (str) ? false : true;
   
}
