const root=document.getElementById(`root`)
const btnone=document.getElementById(`btn1`)
const btnsecond=document.getElementById(`btn2`)

const colors=[`red`,`orange`,`yellow`,`blue`,`purple`]

btnone.addEventListener(`click`,(btn2)=>{
let randomIndex=parseInt(Math.random()*5)
btnsecond.style.backgroundColor=colors[randomIndex] 
})