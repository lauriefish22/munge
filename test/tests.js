import './functions.test.js';
test('should return dogs', (expect) => {
    const expected = [
        { name: 'scooter', type: 'dog' },
        { name: 'sassy', type: 'dog' },
    ];

    const actual = getDogs([...otherPets]);

    expect.deepEqual(actual, expected);
});
