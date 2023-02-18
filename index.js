document.getElementById('card1-btn').addEventListener('click',function(){
    // console.log('clicked')
    const card1Name =document.getElementById('card1-name').innerText

    const firstCardInput1String=document.getElementById('card1-input1').value
    const firstCardInput1 =parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)

    const firstCardInput2String=document.getElementById('card1-input2').value
    const firstCardInput2 =parseFloat(firstCardInput2String);
    // console.log(typeof firstCardInput2)

    const totalValue = 0.5*firstCardInput1*firstCardInput2
    displayData(card1Name,totalValue)
})
document.getElementById('second2-button').addEventListener('click',function(e){
    const cardName=e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText
   const car2input1=e.target.parentNode.parentNode.children[2].children[0].value
  const card2input2 =e.target.parentNode.parentNode.children[2].children[1].value
  const totalRectangleValue= parseInt(car2input1)*parseInt(card2input2)
  
  displayData(cardName,totalRectangleValue)
})

function displayData(card1Name,totalValue ){
    const tableContainer =document.getElementById('table-container')
    const tr =document.createElement('tr')
    tr.innerHTML=`
    <td>${1}</td>
    <td>${card1Name}</td>
    <td>${totalValue}</td>
    <td> <button > Convert to m<sup>2</sup></button> </td>
    `
    tableContainer.appendChild(tr)
}