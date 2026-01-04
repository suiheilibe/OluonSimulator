import Fraction from 'fraction.js';
import { simulateOluon } from './src/lib/oluonSimulator.js';
const testState1 = {
    prob: new Fraction(1),
    oluonLeft: 3,
    leaders: [6, 1],
    yourFollowers: [],
    opponentFollowers: [
        { health: 1, barrier: "Once", damageCap: Infinity },
    ]
};
const testState2 = {
    prob: new Fraction(1),
    oluonLeft: 3,
    leaders: [20, 7],
    yourFollowers: [],
    opponentFollowers: [
        { health: 10, barrier: "Once", damageCap: 3 },
        { health: 10, barrier: "Once", damageCap: 3 },
        { health: 10, barrier: "Once", damageCap: 3 },
        { health: 10, barrier: "Once", damageCap: 3 },
    ]
};
const testState3 = {
    prob: new Fraction(1),
    oluonLeft: 3,
    leaders: [12, 18],
    yourFollowers: [
        { health: 8, barrier: "None", damageCap: Infinity },
        { health: 5, barrier: "Once", damageCap: Infinity },
        { health: 10, barrier: "None", damageCap: Infinity },
        { health: 3, barrier: "None", damageCap: 3 },
    ],
    opponentFollowers: [
        { health: 9, barrier: "Once", damageCap: Infinity },
        { health: 6, barrier: "None", damageCap: Infinity },
        { health: 1, barrier: "None", damageCap: Infinity },
        { health: 7, barrier: "None", damageCap: 3 },
        { health: 7, barrier: "None", damageCap: Infinity },
    ]
};
const result = simulateOluon(testState2);
console.log("Win      : " + new Fraction(result.Win).valueOf());
console.log("Lose     : " + new Fraction(result.Lose).valueOf());
console.log("Undecided: " + new Fraction(result.Undecided).valueOf());
//# sourceMappingURL=index.js.map