'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

let addImg = document.querySelector(".user__avatar").src=userAvatar;
let userAvatar="";

if (useravatar=""){
    addImg = document.querySelector(".user__avatar").src=DEFAULT_AVATAR;
}else{
    addImg = document.querySelector(".user__avatar").src=userAvatar;
}