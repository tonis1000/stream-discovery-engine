import fetch from "node-fetch";

export async function validateStream(url){

try{

const res = await fetch(url,{method:"GET"});

const text = await res.text();

if(text.includes("#EXTM3U")) return true;

return false;

}catch{

return false;

}

}
