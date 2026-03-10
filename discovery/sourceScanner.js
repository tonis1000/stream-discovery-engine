import fs from "fs/promises";

export async function scanSources(){

const data = await fs.readFile("./config/sources.json","utf8");

return JSON.parse(data);

}
