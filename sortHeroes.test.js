const sortHeroes = require('./sortHeroes');

describe('Sorting heroes by health', () => {
    test('sorts heroes in descending order by health', () => {
        const heroes = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ];
        const sortedHeroes = sortHeroes(heroes);
        const expected = [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ];

        expect(sortedHeroes).toEqual(expected); // использование toEqual для глубокого сравнения
    });
});
