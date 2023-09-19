let root;
let oldColor;
let picker;

function valt(){
    numberick=parseInt(document.getElementById("numbi").value)
    if(numberick>0&&numberick<9){
        root.style.setProperty(`--b${numberick}`, picker.value)
        console.log(picker.value,`--b${numberick}`)     
    }

}
