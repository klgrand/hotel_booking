let json = [
{"name":"Fun", "age":41, "city":"Abidjan"},
{"name":"Have", "age":30, "city":"Ahmedabad"},
{"name":":", "age":55, "city":"Alexandria"},
{"name":"Luck", "age":26, "city":"Ankara"},
{"name":")", "age":70, "city":"Almaty"},
{"name":"Good", "age":10, "city":"Addis Ababa"}]

// JSON.parse() to get tbe array

let alpha = ""
let nonAlpha = ""
let answer = ""

for(let i = json.length - 1; i >= 0; i--) {
  if(json[i].name && (json[i].name).match(/[a-z|A-Z]/)) {
    alpha += `${json[i].name} `
  }
  if(json[i].name && (json[i].name).match(/[^a-z|A-Z]/)) {
    nonAlpha += `${json[i].name} `
  }
}

answer = alpha + nonAlpha

console.log(answer)