var pet = {
    type: 'dog',
    name: 'Sharik',
    sex: 'male',
    age: '4',
    size: {x: 30, y: 60, z: 50},
    hasTail: true,
    legsCount: 4,
    hasWings: false,
    injections: false,
    graft: ['beshenstvo'],
    weight: 12,
    hasChidren: false,
    hairType: 'bald',
    isHungry: true,
    isTired: false,
    isFull: false,
    isBored: true,
    stepsPerDay: 0,
    saySomethink: function(phrase) {
        console.log(`Bob wow! ${phrase}`);
    },
    playWith: function(toy) {
        toy.hp -= 20;
        this.isBored = false;
        return toy;
    },
    walk: function (stepsCount) {
        this.stepsPerDay += stepsCount;
        if (this.stepsPerDay >= 8000)
        this.isTired = true;
    },
    eat: function (food) {
        this.isHungry = false;
        this.isFull = true;
        setTimeout(this.kek, 10000);
    },
    kek: function (damagedPartOfApartments) {
        this.isFull = false;
        this.saySomething(`Ooops! ${damagedPartOfApartments} if dirty`);
    }
};