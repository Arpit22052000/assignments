let map = new Map();

map.set("Arpit", "JS");
map.set("Aman", "C++");
map.set("Atishay", "WD");
map.set("Arpit", "Blockchain");

console.log(map.keys());
console.log(map.has("Arpit"));
console.log(map.get("Atishay"));

for (let [k, v] of map) {
    console.log(k, ":", v);
}

map.forEach((v, k) => {
    console.log(k, ":", v)
})