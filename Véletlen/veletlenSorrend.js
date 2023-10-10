window.onload;
let napok=["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
let szam=Math.floor(Math.random()*napok.length)+1;
console.log("hello");
let n=[];
function getRandomOrder(){
    console.log("hello2")
    let i=napok.length;
while(i>0){
        n.push(napok[szam]);
        napok.splice(szam,1);
    szam=Math.floor(Math.random()*napok.length);
    console.log(szam)
    //console.log(n)
    console.log(napok)
    i--;
    
}
n.push(napok[0]);
document.getElementById("content").innerHTML+=n;
}
