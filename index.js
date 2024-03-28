function move(event){
   event.target.nextElementSibling.style.right="89vh"
    setTimeout(()=>{
        event.target.style.backgroundColor="grey"
    },1500)
}
function reset(event){
    let v=document.getElementsByClassName("content-1")
    let color=["yellow","red","blue","green"]
    let j=0
    for(let i of v){
        if (j<color.length){
        i.lastElementChild.style.right="0vh"
        i.firstElementChild.style.backgroundColor=color[j]
        j=j+1
        }
    }
    
 
}
