import Fraction from 'fraction.js';
;
function followerIsAlive(follower) {
    return follower.health > 0;
}
function getNAliveFollowers(followers) {
    let count = 0;
    for (const follower of followers) {
        if (followerIsAlive(follower)) {
            count++;
        }
    }
    return count;
}
function calculateSub(state, result) {
    const prob = state.prob;
    //console.log(state);
    if (state.leaders[0] <= 0) {
        result.Lose = new Fraction(result.Lose).add(prob);
        return;
    }
    if (state.leaders[1] <= 0) {
        result.Win = new Fraction(result.Win).add(prob);
        return;
    }
    if (state.oluonLeft <= 0) {
        result.Undecided = new Fraction(result.Undecided).add(prob);
        return;
    }
    const yourFollowers = state.yourFollowers;
    const opponentFollowers = state.opponentFollowers;
    const nextProb = new Fraction(prob).div(getNAliveFollowers(yourFollowers) + getNAliveFollowers(opponentFollowers) + 2);
    transitToNextState(state, result, nextProb, { type: "HitYourLeader" });
    transitToNextState(state, result, nextProb, { type: "HitOpponentLeader" });
    for (let i = 0; i < yourFollowers.length; i++) {
        if (followerIsAlive(yourFollowers[i])) {
            transitToNextState(state, result, nextProb, { type: "HitYourFollower", id: i });
        }
    }
    for (let i = 0; i < opponentFollowers.length; i++) {
        if (followerIsAlive(opponentFollowers[i])) {
            transitToNextState(state, result, nextProb, { type: "HitOpponentFollower", id: i });
        }
    }
}
function hitFollower(follower) {
    const damage = Math.min(7, follower.damageCap);
    switch (follower.barrier) {
        case "None":
            follower.health -= damage;
            break;
        case "Once":
            follower.barrier = "None";
            break;
    }
}
function transitToNextState(state, result, nextProb, transition) {
    let nextState = structuredClone(state);
    nextState.prob = nextProb;
    nextState.oluonLeft -= 1;
    switch (transition.type) {
        case "HitYourLeader":
            nextState.leaders[0] -= 7;
            break;
        case "HitOpponentLeader":
            nextState.leaders[1] -= 7;
            break;
        case "HitYourFollower":
            hitFollower(nextState.yourFollowers[transition.id]);
            break;
        case "HitOpponentFollower":
            hitFollower(nextState.opponentFollowers[transition.id]);
            break;
    }
    calculateSub(nextState, result);
}
export function simulateOluon(state) {
    let result = { "Win": new Fraction(0), "Lose": new Fraction(0), "Undecided": new Fraction(0) };
    calculateSub(structuredClone(state), result);
    return result;
}
//# sourceMappingURL=oluonSimulator.js.map