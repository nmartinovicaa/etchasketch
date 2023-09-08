let rowOfBoxes = 16;


const pres = document.querySelector('.pres')
const reset = document.querySelector('.reset')
reset.addEventListener('click',pageLoad)

function pageLoad()
{

    while (pres.firstChild)
    {
        pres.removeChild(pres.lastChild)
    }
    rowOfBoxes = prompt('How big should your grid be (8-100?')
    while (rowOfBoxes >100 || rowOfBoxes < 8)
    {
        alert('Enter a number between 8 and 100')
        rowOfBoxes = prompt('How big should your grid be (8-100?')
    }

    resetFn()
}

function resetFn() {

    for (let i = 0; i < rowOfBoxes*rowOfBoxes; i++)
    {
        const div = document.createElement('div')
        pres.appendChild(div)
        div.classList.add('box')
        div.style.width = `${800/rowOfBoxes - 2}px`
        div.style.height = `${800/rowOfBoxes - 2}px`

        div.addEventListener('mouseover',turnBlack)

    }
}



function turnBlack(e) {
   e.target.style.backgroundColor = 'black'
}

pageLoad()
