import { scanSources } from "./discovery/sourceScanner.js";
import { parsePlaylist } from "./extraction/playlistParser.js";
import { validateStream } from "./validation/hlsValidator.js";
import { cleanUrl } from "./processing/urlCleaner.js";
import { matchChannel } from "./processing/channelMatcher.js";
import { rankStreams } from "./processing/streamRanker.js";
import { generatePlaylist } from "./output/playlistGenerator.js";

async function run() {

console.log("🔍 Starting stream discovery");

const sources = await scanSources();

let streams = [];

for (const source of sources) {

const parsed = await parsePlaylist(source);

streams.push(...parsed);

}

streams = streams.map(s => ({
...s,
url: cleanUrl(s.url)
}));

const validated = [];

for (const stream of streams) {

const ok = await validateStream(stream.url);

if (ok) validated.push(stream);

}

const matched = validated.map(s => ({
...s,
channel: matchChannel(s.name)
}));

const ranked = rankStreams(matched);

await generatePlaylist(ranked);

console.log("✅ Playlist generated");

}

run();
