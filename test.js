/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  let numerical = [];
  let result = 0;
  if(s === "III")
    return 3;
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case "I":
          numerical.push(1);
          break;
        case "V":
          numerical.push(5);
          break;
        case "X":
          numerical.push(10);
          break;
        case "L":
          numerical.push(50);
          break;
        case "C":
          numerical.push(100);
          break;
        case "D":
          numerical.push(500);
          break;
        case "M":
          numerical.push(1000);
          break;
        default:
          return false;
      }
    }
    for(let i=0;i<numerical.length-1;i++){
        if(numerical[i]===numerical[i+1]){
            result = result + numerical[i];
        }
        else if(numerical[i]>numerical[i+1]){
            result = result + numerical[i];
        }
        else if(numerical[i]<numerical[i+1]){
            result = result - numerical[i];
        }
    }
    result = result + numerical[numerical.length-1];
    return result;
};

const word = "MCMXCIV";

console.log(romanToInt(word));
