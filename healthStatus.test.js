const getHealthStatus = require('./healthStatus');

describe('Health status tests', () => {
    test('returns healthy if health > 50', () => {
        expect(getHealthStatus({name: 'Mage', health: 90})).toBe('healthy');
    });

    test('returns wounded if health is between 15 and 50', () => {
        expect(getHealthStatus({name: 'Warrior', health: 30})).toBe('wounded');
    });

    test('returns critical if health < 15', () => {
        expect(getHealthStatus({name: 'Rogue', health: 10})).toBe('critical');
    });
});
