// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"];

const holiday = ["birthday"]

function writeCards(names, holiday) {
    const wishes = []
    for (let i = 0; i < names.length; i++) {
        wishes.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    }
    return wishes
}

writeCards(names, holiday);

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}

countDown();