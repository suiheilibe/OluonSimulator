import Fraction from 'fraction.js';
type BarrierType = "None" | "Once";
type ResultType = "Win" | "Lose" | "Undecided";
type Result = {
    [K in ResultType]: Fraction;
};
export interface Follower {
    health: number;
    barrier: BarrierType;
    damageCap: number;
}
export interface GameState {
    prob: Fraction;
    oluonLeft: number;
    leaders: number[];
    yourFollowers: Follower[];
    opponentFollowers: Follower[];
}
export declare function simulateOluon(state: GameState): Result;
export {};
//# sourceMappingURL=oluonSimulator.d.ts.map