const text = '   JavaScript is FUN!;  '

const result = text
    .trim()
    .toLowerCase()
    .replace('fun', 'powerful');

    console.log(result);
    console.log(result.includes('script'));
    console.log(result.slice(0, 10));

    const numbers = [4, 8, 15, 16, 23, 42];

    const part = numbers.slice(1, 4);
    numbers.push(99);
    numbers.pop();
    numbers.splice(2, 2);

    console.log(part);
    console.log(numbers);
    console.log(numbers.indexOf(23));

    const game = {
        title: 'Minecraft',
        price: 29.90
    }

    const game2 = { ... game};
    game2.price = 19.90;
    game2.rating = 9.5;

    console.log(game.price);
    console.log(game.rating);
    console.log(game === game2);

    console.log(game2.price);
    console.log(game2.rating);
    console.log(game2 === game2);

    const game1 = {
        title: 'Minecraft',
        genre: 'Sandbox',
        price: 29.90
    };

    const { title, price } = game;
    console.log(title, price);
    const saleGame = { ...game, price: 19.90};

    console.log(title);
    console.log(price);
    console.log(saleGame.price);
    console.log(game.price);
    console.log(game === saleGame);

    function greet(firstName = 'Nobody', lastName){
        return `Hello ${firstName} ${lastName}`;
    }

    console.log(greet('Anna', 'Mayer'));
    console.log(greet('Anna'));
    console.log(greet());
    console.log(greet(undefined, 'Mayer'));