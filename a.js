const button = document.getElementById("button")
const good = document.getElementById("good")
let i = 0;
button.addEventListener("click", ()=>{
    i += 1
    if(i % 2 == 0){
        good.textContent = "偶数"
    }else{
        good.textContent = "奇数"
    }
    
    console.log("test")
})