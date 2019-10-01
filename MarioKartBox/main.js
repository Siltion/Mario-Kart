//initates when the "Open The Box" button is pressed
document.getElementById('submit').addEventListener('click', submit);

    //Declating of Variables
    let banana = 0;
    let gShell = 0;
    let star = 0;
    let gMushroom = 0;
    let bulletBill = 0;

function submit() {
    //randomize and collect 
    let randNum = Math.random();
    let item;

    //Banana
    if (randNum <= 0.25) { 
        document.getElementById('banana').innerHTML = banana += 1;
        item = 'Banane';

    //Green Shell
    } else if (randNum > 0.25 && randNum <= 0.50) {
        document.getElementById('gShell').innerHTML = gShell += 1;
        item = 'GreenShell';
        
    //Star
    } else if (randNum > 0.50 && randNum <= 0.65) { 
        document.getElementById('star').innerHTML = star += 1;
        item = 'Star';
    
    //Golden Mushroom
    } else if (randNum > 0.65 && randNum <= 0.80) { 
        document.getElementById('gMushroom').innerHTML = gMushroom += 1;
        item = 'GoldenMushroom';
       
    //Bullet Bill
    } else { 
        document.getElementById('bulletbill').innerHTML = bulletBill += 1;
        item = 'BulletBill';

    }

    //pastes the items name inside of the following code, thus printing the image
    document.getElementById('results').innerHTML += '<img src="images/' + item + '.PNG">';
}