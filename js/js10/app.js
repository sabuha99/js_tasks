const url=`https://restcountries.com/v3.1/name/azerbaijan`
const btn=document.getElementById(`btn`)
btn.onclick=()=>{
axios.get(url).then((resp)=>{
console.log(resp.data)

})
}




