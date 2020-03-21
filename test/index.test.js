const { getObjectEntries, getObjectKeys, getObjectValues } = require('../src/index');

const testUser = {
    firstName: 'Alex',
    lastName: 'Ivanov',
    age: 36,
    sex: 'male',
    hight: 180,
    weight: 90
};

test(`Test User object entries equal [['firstName', 'Alex'], ['lastName', 'Ivanov'], ['age', 36], ['sex', 'male'], ['hight', 180], ['weight', 90]]`, () => {
    expect(getObjectEntries(testUser)).toStrictEqual(
        [['firstName', 'Alex'], ['lastName', 'Ivanov'], ['age', 36], ['sex', 'male'], ['hight', 180], ['weight', 90]]
    );
});

test(`Test User object keys equal ['firstName', 'lastName', 'age', 'sex', 'hight', 'weight']`, () => {
    expect(getObjectKeys(testUser)).toStrictEqual(
        ['firstName', 'lastName', 'age', 'sex', 'hight', 'weight']
    );
});

test(`Test User object values equal ['Alex', 'Ivanov', 36, 'male', 180, 90]`, () => {
    expect(getObjectValues(testUser)).toStrictEqual(
        ['Alex', 'Ivanov', 36, 'male', 180, 90]
    );
});