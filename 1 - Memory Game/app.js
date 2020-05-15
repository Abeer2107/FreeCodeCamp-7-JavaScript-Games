document.addEventListener('DOMContentLoaded', () => {

    //Cards
    const cards = [
        {
            name: 'Crystal',
            img: 'Images/protection_crystal.png'
        },
        {
            name: 'Gift',
            img: 'Images/gift_box.png'
        },
        {
            name: 'Drum',
            img: 'Images/super_charge_drum.png'
        },
        {
            name: 'Food',
            img: 'Images/Super_pet_food.png'
        },
        {
            name: 'Lens',
            img: 'Images/advance_lens.png'
        },
        {
            name: 'Structure',
            img: 'Images/Ship_structure.png'
        },
        {
            name: 'Crystal',
            img: 'Images/protection_crystal.png'
        },
        {
            name: 'Gift',
            img: 'Images/gift_box.png'
        },
        {
            name: 'Drum',
            img: 'Images/super_charge_drum.png'
        },
        {
            name: 'Food',
            img: 'Images/Super_pet_food.png'
        },
        {
            name: 'Lens',
            img: 'Images/advance_lens.png'
        },
        {
            name: 'Structure',
            img: 'Images/Ship_structure.png'
        }
    ]

    cards.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWon = [];

    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'Images/Treasure_map.png');
            card.setAttribute('data-id', i);
            card.setAttribute('width', '100px');
            card.setAttribute('height', '100px');
        
            card.addEventListener('click', flipCard);

            grid.appendChild(card);
        }
    }


    function checkForMatch(){
        var cards = document.querySelectorAll('img');

        const optionOneID = cardsChosenID[0];
        const optionTwoID = cardsChosenID[1];

        if(cardsChosen[0] === cardsChosen[1]){
            cards[optionOneID].setAttribute('src', 'Images/Empty.png');
            cards[optionTwoID].setAttribute('src', 'Images/Empty.png');
            cards[optionOneID].removeEventListener('click', flipCard);
            cards[optionTwoID].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneID].setAttribute('src', 'Images/Treasure_map.png')
            cards[optionTwoID].setAttribute('src', 'Images/Treasure_map.png')
        }
        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cards.length / 2){
            resultDisplay.textContent = 'Congratulations! you won';
        }
    }
    
    function flipCard(){
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cards[cardID].name);
        cardsChosenID.push(cardID);
        this.setAttribute('src', cards[cardID].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

})
