const button = document.getElementById("button")
const good = document.getElementById("good")
let i = 0;
button.addEventListener("click", ()=>{
    console.log(i)
    if(i % 2 == 0){
        good.textContent = "偶数"
    }else{
        good.textContent = "奇数"
    }
    i += 1
    console.log("test")
})