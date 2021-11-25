/*const g2 = document.querySelector("#Section2 .group2");
g2.textContent = 'Group 2 za';

let att = document.createAttribute("style");

att.value = "color: red; font-weight: bold;";

g2.setAttributeNode(att);
g2.style.fontSize = "larger";*/

let sec2 = document.getElementById('Section2')
let g2 = sec2.getElementsByClassName('group2')[0];
//g2.innerHTML = '<strong>How deep in your love</strong>';
g2.textContent = '<strong>How deep in your love</strong>'; //ถ้าเป็น textContent tag strong จะไม่ทำงาน
g2.style.color = "red"