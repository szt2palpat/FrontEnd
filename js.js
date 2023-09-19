let root;
let wid;
let heh;
window.onload(){
root=document.querySelector(":root");
wid=document.getElementById("width").value;
heh=document.getElementById("heh").value;
}
function valt(){
    root.style.setProperty("--ball-width",wid);
    root.style.setProperty("--ball-height",heh);

}
