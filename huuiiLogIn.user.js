// ==UserScript==
// @name         huuiiLogIn
// @namespace    http://tampermonkey.net/
// @version      2024-07-23
// @description  try to take over the world!
// @author       You
// @match        https://member.huuii.cn/Home/Login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huuii.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //var btn=document.querySelectorAll("button.btn-big")[0];
    document.querySelector("#Uid").value = "hjkl427";
    document.querySelector("#Pwd").value = "aabbcc123456";
    var btn=document.querySelector("body > div.home > div.login > div.login_start > form > span");
    btn.click();

    // Your code here...
})();