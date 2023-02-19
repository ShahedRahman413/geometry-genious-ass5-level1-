let number = 0
// card 1
document.getElementById('card1-btn').addEventListener('click', function () {
    number += 1
    // console.log('clicked')
    const card1Name = document.getElementById('card1-name').innerText

    const firstCardInput1String = document.getElementById('card1-input1').value
    const firstCardInput1 = parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)


    const firstCardInput2String = document.getElementById('card1-input2').value
    const firstCardInput2 = parseFloat(firstCardInput2String);

    if (isNaN(firstCardInput1String) || isNaN(firstCardInput2String) || firstCardInput1String == '' || firstCardInput2String == '') {
        alert('please input a valid number')
        return
        displayData()
    }
    const totalValue = 0.5 * firstCardInput1 * firstCardInput2
    displayData(card1Name, totalValue)
})


// card 2
document.getElementById('card2-button').addEventListener('click', function () {

    number += 1
    // console.log('clicked')
    const card1Name = document.getElementById('card2-name').innerText

    const firstCardInput1String = document.getElementById('card2-input1').value
    const firstCardInput1 = parseFloat(firstCardInput1String);
    // console.log(typeof firstCardInput1)


    const firstCardInput2String = document.getElementById('card2-input2').value
    const firstCardInput2 = parseFloat(firstCardInput2String);

    if (isNaN(firstCardInput1String) || isNaN(firstCardInput2String) || firstCardInput1String == '' || firstCardInput2String == '') {
        alert('please input a valid number')
        return
        displayData()
    }
    const totalValue = firstCardInput1 * firstCardInput2
    displayData(card1Name, totalValue)
})
// function 1
function displayData(card1Name, totalValue) {
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${number}</td>
    <td>${card1Name}</td>
    <td>${totalValue}</td>
    <td> <button > Convert to m<sup>2</sup></button> </td>
    `
    tableContainer.appendChild(tr)
}
// function 2
function valueById(valueId) {
    const value1String = document.getElementById(valueId).innerText
    const value1 = parseInt(value1String)
    return value1
}

// function3
function valueById(nameId) {
    const name = document.getElementById(nameId).innerText
    return name
}
// const ee=valueById('card3Value1')
// console.log(ee)


// card3
document.getElementById('card3-button').addEventListener('click', function () {
    number += 1
    const idName = valueById('card3-title')
    const value1 = valueById('card3Value1')
    const value2 = valueById('card3Value2')
    const totalValue = value1 * value2
    displayData(idName, totalValue)
})


// card 4
document.getElementById('card4-button').addEventListener('click', function () {
    number += 1
    const idName = valueById('card4-title')
    const value1 = valueById('card4-value1')
    const value2 = valueById('card4-value2')
    const totalValue = 0.5 * value1 * value2
    displayData(idName, totalValue)
})


// card 5
document.getElementById('card5-button').addEventListener('click', function () {
    number += 1
    const idName = valueById('card5-name')
    const value1 = valueById('card5-value1')
    const value2 = valueById('card5-value2')
    const totalValue = 0.5 * value1 * value2
    displayData(idName, totalValue)
})

// card 6
document.getElementById('card6-button').addEventListener('click', function () {
    number += 1
    const idName = valueById('card6-name')
    const value1 = valueById('card6-value1')
    const value2 = valueById('card6-value2')
    const totalValue = 3.14 * value1 * value2
    displayData(idName, totalValue.toFixed(2))
    random_bg_color()
})

// random color with mouse over
randomColor = function (e) {
    e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}
document.get


