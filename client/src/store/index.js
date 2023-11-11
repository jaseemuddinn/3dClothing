import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isfullTexture: false,
    // logoDecal: './threejs.png',
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state;