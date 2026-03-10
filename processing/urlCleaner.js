export function cleanUrl(url){

return url
.split("#")[0]
.split("|")[0]
.trim();

}
