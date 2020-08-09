

//Switch case:

var age = 48;
var message = '';

switch (age) {

    case 18:
        message = 'Your can Drink beer :D';
        break;
    case 25:
        message = 'Congrats, You are a grow up man :)';
        break;
    case 30:
        message = 'Seems like you are too late for everything :('
        break;
    case 14:
        message = 'you should be at schoolg rigth now! >:|'
        break;
}

//For loop
var top = 100;
for (var i = 0; i < top; i++) {
    console.log(i);
}

//while loop

while (top > 1) {
    console.log(top);
    top--;
}

//Do while loop
var money = 10;
do {
    console.log(money);
    money++;
} while (money < 19000);


// for each
var language = new Array('PHP', 'Java', 'JS', 'C#');
language.forEach(lan => alert(lan));

//for in

for( let lang in language) {
    console.log(lenag);
}

//matrices

var categories = new Array('Horror', 'Comedy', 'thriller')
var movies = new Array('Freddy', 'The simpson', 'Uncharted')

cinema = new Array(categories, movies);

