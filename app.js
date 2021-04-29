document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{

        name: 'fries',
        img: 'image/fries_100x100.jpg'
    }, {
        name: 'fries',
        img: 'image/fries_100x100.jpg'
    }, {
        name: 'icecream',
        img: 'image/Ice-cream.jpg'

    }, {
        name: 'icecream',
        img: 'image/Ice-cream.jpg'

    }, {
        name: 'pizza',
        img: 'image/pizza_100x100.jpg'

    }, {
        name: 'pizza',
        img: 'image/pizza_100x100.jpg'

    }, {
        name: 'burger',
        img: 'image/burger_100x100.jpg'

    }, {
        name: 'burger',
        img: 'image/burger_100x100.jpg'

    }, {
        name: 'pancake',
        img: 'image/pancake_100x100.jpg'

    }, {
        name: 'pancake',
        img: 'image/pancake_100x100.jpg'

    }, {
        name: 'Chowmin',
        img: 'image/Chowmin_100x100.jpg'

    }, {
        name: 'Chowmin',
        img: 'image/Chowmin_100x100.jpg'

    }]

    cardArray.sort(
        () => 0.5 - Math.random()
    )

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'image/rainbow_100x100.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)


        }

    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match")
            cards[optionOneId].setAttribute('src', 'image/Color-white_100x100.jpg')
            cards[optionTwoId].setAttribute('src', 'image/Color-white_100x100.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'image/rainbow_100x100.jpg')
            cards[optionTwoId].setAttribute('src', 'image/rainbow_100x100.jpg')
            alert('Sorry, Try Again')

        }

        cardsChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulation! You found them all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }


    }

    createBoard()

})