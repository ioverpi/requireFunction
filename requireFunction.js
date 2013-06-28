function require(filename){
var scriptElem=document.createElement('script');
scriptElem.src=filename;
document.head.appendChild(scriptElem);
}