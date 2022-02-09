// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
'use strict';
window.onload=init;
function init(){
    document.getElementById("textBox").addEventListener('submit',function(event){
        event.preventDefault();
        window.location.replace(document.getElementById("url").value.split('.html')[0]+'.html#:~:text=');
    });
}