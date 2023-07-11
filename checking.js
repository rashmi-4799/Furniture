const data=
[
    {
        pic:"./Image/sofa4.jpg",
        type:'Sofa',
        price:"$56"
    },
    {
        pic:"./Image/dtable4.jpg",
        type:'Dtable',
        price:"$30"
    },
    {
        pic:"./Image/chair1.jpg",
        type:'Chair',
        price:"$48"
    },
    {
        pic:"./Image/dtable3.jpg",
        type:'Dtable',
        price:"$18"
    },
    {
        pic:"./Image/wardrobe.jpg",
        type:'Wardrobe',
        price:"$98"
    },
    {
        pic:"./Image/Sofa101.jpg",
        type:'Sofa',
        price:"$88" 
    },
    {
        pic:"./Image/chair2.jpg",
        type:'Chair',
        price:"$48" 
    },
    {
        pic:"./Image/wardrobe2.jpg",
        type:'Wardrobe',
        price:"$108"
    },
    {
        pic:"./Image/dtable2.jpg",
        type:'Dtable',
        price:"$30"
    },
    {
        pic:"./Image/sofa3.jpg",
        type:'Sofa',
        price:"$88" 
    },
    {
        pic:"./Image/wardrobe3.jpg",
        type:'Wardrobe',
        price:"$108"
    },
    {
        pic:"./Image/dtable1.jpg",
        type:'Dtable',
        price:"$30"
    },
    {
        pic:"./Image/chair504.jpg",
        type:'Chair',
        price:"$48" 
    },
    {
        pic:"./Image/sofa001.jpg",
        type:'Sofa',
        price:"$88" 
    },
    {
        pic:"./Image/wardrobe4.jpg",
        type:'Wardrobe',
        price:"$108"
    },
    {
        pic:"./Image/chair505.jpg",
        type:'Chair',
        price:"$48" 
    }
]
const mainHead=document.getElementById('check')
console.log(mainHead)
let data1=``
data.map((val)=>
{
    data1+=`<div class="card">
    <img src=${val.pic} alt="Product Photo">
    <h3>${val.type}</h3>
    <p>${val.price}</p>
    </div>`
    
})
mainHead.innerHTML=data1;
const list=document.getElementById("listing")
list.addEventListener('click',(e)=>
{
    e.preventDefault()
    if(e.target.value=="All")
    {
        mainHead.innerHTML=data1;
    }
    else
    {
        let data2=``
        data.map((val)=>
        { 
           if(val.type===e.target.value)
           {
              data2+=`<div class="card">
              <img src=${val.pic} alt="Product Photo">
              <h3>${val.type}</h3>
              <p>${val.price}</p>
              </div>`
           }
        })
        mainHead.innerHTML=data2;
    }
})

const menu=document.getElementById('menu')
menu.addEventListener('click',(e)=>
{
    const center=document.getElementById('head-center');
    center.classList.toggle('show-center')
})