let fizetes={
    Anna:2100,
    Cecil:1890,
    Emil:2050,
    Gerald:2920
}




window.onload=()=>{
    let sum=0;
    for(person in fizetes){
        console.log(person+": "+fizetes[person]);
        sum+=fizetes[person];

    }
    console.log(sum);
}