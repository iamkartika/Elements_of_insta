var addfrnd=document.querySelector("#btn2")

var stranger=document.querySelector("h4")

var flag=0

//var remove=document.querySelector("#btn1")

addfrnd.addEventListener("click",function(){
    if(flag==0){

    stranger.innerHTML="Friends"
    stranger.style.color="green"
    addfrnd.style.backgroundColor="grey"
    addfrnd.innerHTML="Remove"
    flag=1
}
else{
    stranger.innerHTML="Stranger"
    stranger.style.color="red"
    addfrnd.style.backgroundColor="cadetblue"
    addfrnd.innerHTML="Add Friends"
    flag=0
}
})
//remove.addEventListener("click",function(){
//    stranger.innerHTML="Stranger"
//    stranger.style.color="red"
//    addfrnd.style.backgroundColor="cadetblue"
//})
