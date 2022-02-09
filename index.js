// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
'use strict';
function freeURL(){
    let url=document.getElementById("url").value;
    url.split('.html')
    url=url[0]+'#:~:text='
    window.location.replace(url);
};