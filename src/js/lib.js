export function bonus(items) {
    let sumBonus = 0;
    for (const item of items) {
       const limit = 10000;
       if (item > limit) {
       sumBonus += (item - limit) * 0.05;
       }
    }
    return sumBonus;
}