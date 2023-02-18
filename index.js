let number=0

document.getElementById('card1-btn').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card1-name').innerText

    const firstCardInput1String=document.getElementById('card1-input1').value
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card1-input2').value
    const firstCardInput2 =parseFloat(firstCardInput2String);
    if ( typeof firstCardInput2 !== 'number'||firstCardInput2 !== ''||firstCardInput1 !== '' && typeof firstCardInput1 !== 'number' ) {
        alert('input a valid number')
        return
        displayData()
    }
    // console.log(typeof firstCardInput2)

    const totalValue = 0.5*firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})
document.getElementById('second2-button').addEventListener('click',function(e){
    number+=1
    const cardName=e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText
   const car2input1=e.target.parentNode.parentNode.children[2].children[0].value
  const card2input2 =e.target.parentNode.parentNode.children[2].children[1].value
  const totalRectangleValue= parseInt(car2input1)*parseInt(card2input2)
  if ( typeof car2input1 !== 'number'||car2input1 !== ''||card2input2 !== '' && typeof card2input2 !== 'number' ) {
    alert('input a valid number')
    return
    displayData()
}
  
  displayData(cardName,totalRectangleValue)
})

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

document.getElementById('card3-button').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card3-title').innerText

    const firstCardInput1String=document.getElementById('card3Value1').innerText
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card3Value2').innerText
    const firstCardInput2 =parseFloat(firstCardInput2String);
    const totalValue = firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})

document.getElementById('card4-button').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card4-title').innerText

    const firstCardInput1String=document.getElementById('card4-value1').innerText
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card4-value2').innerText
    const firstCardInput2 =parseFloat(firstCardInput2String);
    // console.log(card1Name,firstCardInput1,firstCardInput2)
    const totalValue =0.5* firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})
document.getElementById('card4-button').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card4-title').innerText

    const firstCardInput1String=document.getElementById('card4-value1').innerText
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card4-value2').innerText
    const firstCardInput2 =parseFloat(firstCardInput2String);
    // console.log(card1Name,firstCardInput1,firstCardInput2)
    const totalValue =0.5* firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})


document.getElementById('card5-button').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card5-title').innerText

    const firstCardInput1String=document.getElementById('card5-value1').innerText
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card5-value2').innerText
    const firstCardInput2 =parseFloat(firstCardInput2String);
    // console.log(card1Name,firstCardInput1,firstCardInput2)
    const totalValue =0.5* firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})


document.getElementById('card6-button').addEventListener('click',function(){
    number+=1
    // console.log('clicked')
    const card1Name =document.getElementById('card6-title').innerText

    const firstCardInput1String=document.getElementById('card6-value1').innerText
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)
    

    const firstCardInput2String=document.getElementById('card6-value2').innerText
    const firstCardInput2 =parseFloat(firstCardInput2String);
    // console.log(card1Name,firstCardInput1,firstCardInput2)
    const totalValue =3.141* firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})





