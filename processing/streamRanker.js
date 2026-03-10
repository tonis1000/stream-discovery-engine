export function rankStreams(streams){

return streams.sort((a,b)=>{

let scoreA = score(a);
let scoreB = score(b);

return scoreB-scoreA;

});

}

function score(s){

let score = 0;

if(s.url.includes(".m3u8")) score+=50;

if(s.url.includes("akamaized")) score+=20;

if(s.url.includes("cloudfront")) score+=20;

return score;

}
