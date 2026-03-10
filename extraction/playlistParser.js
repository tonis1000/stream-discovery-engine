import fetch from "node-fetch";

export async function parsePlaylist(url){

try{

const res = await fetch(url);

const text = await res.text();

const lines = text.split("\n");

let streams = [];
let current = null;

for (const line of lines){

if(line.startsWith("#EXTINF")){

const name = line.split(",")[1];

current = { name };

}

else if(line.startsWith("http")){

if(current){

streams.push({
name: current.name,
url: line.trim()
});

}

}

}

return streams;

}catch(e){

return [];

}

}
