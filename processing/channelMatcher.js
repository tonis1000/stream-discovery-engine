import fs from "fs";

const channels = JSON.parse(
fs.readFileSync("./config/channels.json")
);

export function matchChannel(name){

const n = name.toLowerCase();

for(const c of channels){

for(const alias of c.alias){

if(n.includes(alias)){

return c.id;

}

}

}

return "unknown";

}
