const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
// Esto nos servira para saber cuantas veces esta la palabra apple
/* 
[
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
]
[
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
]
   */