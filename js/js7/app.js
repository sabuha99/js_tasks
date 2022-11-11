const arr=[
    {   username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        img:'qarli_daglar',
        username:'qarli_daglar',
        job:'test5',
    },
    {
       img:'qoca_cinar',
       username:'qoca_cinar',
       job:'test6',
    },
    {
        img:'visselka',
        username:'visselka',
        job:'test7',
    },
    {
       img:'novxani',
       username:'novxani',
       job:'test8',
    }
]
const root=document.getElementById('root')
arr.forEach((obj)=>{
const div=document.createElement(`div`)
div.className=`collection`
const sekil=document.createElement(`img`)
sekil.src=`./${obj.img}.jpg`
const h1=document.createElement(`h1`)
h1.textContent=`${obj.username}`
const p=document.createElement(`p`)
p.textContent=`${obj.job}`
div.append(sekil,h1,p)
root.appendChild(div)
})
