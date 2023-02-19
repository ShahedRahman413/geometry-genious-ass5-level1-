let number=0
// card 1
document.getElementById('card1-btn').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card1-name').innerText

    const firstCardInput1String=document.getElementById('card1-input1').value
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card1-input2').value
    const firstCardInput2 =parseFloat(firstCardInput2String);

    if (typeof firstCardInput1String =='string'|| typeof firstCardInput2String == 'string') {
        alert('please input a valid number')
    }
    // if ( typeof firstCardInput2 !== 'number'||firstCardInput2 !== ''&&firstCardInput1 !== ''||typeof firstCardInput1 !== 'number' ) {
    //     alert('input a valid number')
    //     return
    //     displayData()
    // }
    // console.log(typeof firstCardInput2)

    const totalValue = 0.5*firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})
document.getElementById('card2-button').addEventListener('click',function(){

number+=1
// console.log('clicked')
const card1Name =document.getElementById('card2-name').innerText

const firstCardInput1String=document.getElementById('card2-input1').value
const firstCardInput1 =parseFloat(firstCardInput1String);
// console.log(typeof firstCardInput1)


const firstCardInput2String=document.getElementById('card2-input2').value
const firstCardInput2 =parseFloat(firstCardInput2String);

if (firstCardInput1 != 'number') {
    alert('input a valid number')
    return alert
    displayData()
}
else{
    displayData(card1Name,totalValue)
}
const totalValue = firstCardInput1*firstCardInput2
  displayData(card1Name,totalValue)
})
// function 1
function displayData(card1Name,totalValue ){
    const tableContainer =document.getElementById('table-container')
    const tr =document.createElement('tr')
    tr.innerHTML=`
    <td>${number}</td>
    <td>${card1Name}</td>
    <td>${totalValue}</td>
    <td> <button > Convert to m<sup>2</sup></button> </td>
    `
    tableContainer.appendChild(tr)
}
// function 2
function valueById(valueId){
   const value1String= document.getElementById(valueId).innerText
   const value1=parseInt(value1String)
   return  value1
}

// function3
function valueById(nameId){
   const name= document.getElementById(nameId).innerText
   return name
}
// const ee=valueById('card3Value1')
// console.log(ee)


// card3
document.getElementById('card3-button').addEventListener('click',function(){
    number+=1
  const idName=  valueById('card3-title')
 const value1= valueById('card3Value1')
 const value2= valueById('card3Value2')
 const totalValue = value1*value2
  displayData(idName,totalValue)
})


// card 4
document.getElementById('card4-button').addEventListener('click',function(){
    number+=1
  const idName=  valueById('card4-title')
 const value1= valueById('card4-value1')
 const value2= valueById('card4-value2')
 const totalValue =0.5* value1*value2
  displayData(idName,totalValue)
})


// card 5
document.getElementById('card5-button').addEventListener('click',function(){
    number+=1
  const idName=  valueById('card5-name')
 const value1= valueById('card5-value1')
 const value2= valueById('card5-value2')
 const totalValue =0.5* value1*value2
  displayData(idName,totalValue)
})

// card 6
document.getElementById('card6-button').addEventListener('click',function(){
    number+=1
  const idName=  valueById('card6-name')
 const value1= valueById('card6-value1')
 const value2= valueById('card6-value2')
 const totalValue =3.14* value1*value2
  displayData(idName,totalValue.toFixed(2))
  random_bg_color()
})

// document.getElementById('card6-button').addEventListener('mouseup',function(){
//    const hello= document.getElementById('card6')
//     function rg(m, n) {
//         return Math.floor( Math.random() * (n - m + 1) ) + m;
//     }
    
//     function hex(i) {
//         return i.toString(16);
//     }
    
//     function randColor() {
//         return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
//             hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
//     }
    
//     $(".subContent").mouseover(function() {
//         $(this).css("background-color",randColor());
//     });
// })



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();






// document.getElementById('card3-button').addEventListener('click',function(){
//     number+=1
//     // console.log('clicked')
//     const card1Name =document.getElementById('card3-title').innerText

//     const firstCardInput1String=document.getElementById('card3Value1').innerText
//     const firstCardInput1 =parseFloat(firstCardInput1String);
//     // console.log(typeof firstCardInput1)
    

//     const firstCardInput2String=document.getElementById('card3Value2').innerText
//     const firstCardInput2 =parseFloat(firstCardInput2String);
//     const totalValue = firstCardInput1*firstCardInput2
//     displayData(card1Name,totalValue)
// })

// document.getElementById('card4-button').addEventListener('click',function(){
//     number+=1
//     // console.log('clicked')
//     const card1Name =document.getElementById('card4-title').innerText

//     const firstCardInput1String=document.getElementById('card4-value1').innerText
//     const firstCardInput1 =parseFloat(firstCardInput1String);
//     // console.log(typeof firstCardInput1)
    

//     const firstCardInput2String=document.getElementById('card4-value2').innerText
//     const firstCardInput2 =parseFloat(firstCardInput2String);
//     // console.log(card1Name,firstCardInput1,firstCardInput2)
//     const totalValue =0.5* firstCardInput1*firstCardInput2
//     displayData(card1Name,totalValue)
// })
// document.getElementById('card4-button').addEventListener('click',function(){
//     number+=1
//     // console.log('clicked')
//     const card1Name =document.getElementById('card4-title').innerText

//     const firstCardInput1String=document.getElementById('card4-value1').innerText
//     const firstCardInput1 =parseFloat(firstCardInput1String);
//     // console.log(typeof firstCardInput1)
    

//     const firstCardInput2String=document.getElementById('card4-value2').innerText
//     const firstCardInput2 =parseFloat(firstCardInput2String);
//     // console.log(card1Name,firstCardInput1,firstCardInput2)
//     const totalValue =0.5* firstCardInput1*firstCardInput2
//     displayData(card1Name,totalValue)
// })


// document.getElementById('card5-button').addEventListener('click',function(){
//     number+=1
//     // console.log('clicked')
//     const card1Name =document.getElementById('card5-title').innerText

//     const firstCardInput1String=document.getElementById('card5-value1').innerText
//     const firstCardInput1 =parseFloat(firstCardInput1String);
//     // console.log(typeof firstCardInput1)
    

//     const firstCardInput2String=document.getElementById('card5-value2').innerText
//     const firstCardInput2 =parseFloat(firstCardInput2String);
//     // console.log(card1Name,firstCardInput1,firstCardInput2)
//     const totalValue =0.5* firstCardInput1*firstCardInput2
//     displayData(card1Name,totalValue)
// })


// document.getElementById('card6-button').addEventListener('click',function(){
//     number+=1
//     // console.log('clicked')
//     const card1Name =document.getElementById('card6-title').innerText

//     const firstCardInput1String=document.getElementById('card6-value1').innerText
//     const firstCardInput1 =parseFloat(firstCardInput1String);
//     // console.log(typeof firstCardInput1)
    

//     const firstCardInput2String=document.getElementById('card6-value2').innerText
//     const firstCardInput2 =parseFloat(firstCardInput2String);
//     // console.log(card1Name,firstCardInput1,firstCardInput2)
//     const totalValue =3.141* firstCardInput1*firstCardInput2
//     displayData(card1Name,totalValue)
// })





