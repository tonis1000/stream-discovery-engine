import fs from "fs/promises";

export async function generatePlaylist(streams){

let playlist = "#EXTM3U\n";

for(const s of streams){

playlist+=`#EXTINF:-1,${s.name}\n`;

playlist+=`${s.url}\n`;

}

await fs.writeFile("./output-data/playlist.m3u",playlist);

}
