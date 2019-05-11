const button = document.getElementById("button")
const good = document.getElementById("good")
let i = 0;
button.addEventListener("click", ()=>{
    i += 1
    console.log(i)
    if(i % 2 == 0){
        console.log("branch切った")
        console.log("good")
        good.textContent = "偶数回押しました"
    }else{
        good.textContent = "奇数回押しました"
    }
    i += 1
    console.log("test")
})
