import { proxy } from "valtio";
const state = proxy({
    intro:true,
    color:'#d8001e',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./etoile.png',
    fullDecal:'./etoile.png', 

});
export default state;