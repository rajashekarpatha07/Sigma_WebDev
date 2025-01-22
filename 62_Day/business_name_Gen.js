
let adjtives = ["Crazy", "Amazing", "Fire"];
let shope_name = ["Engines", "Food", "Clothes"];
let word = ["Bros", "Limited", "Hub"]
for (let index = 0; index < 10; index++) {
    let random1 = Math.floor(Math.random()*3)
    let random2 = Math.floor(Math.random()*3)
    let random3 = Math.floor(Math.random()*3)
    console.log(index)
    console.log(random1,random2, random3)
    console.log(adjtives[random1], shope_name[random2], word[random3]);
}

