export function bonus(items) {
    let sumBonus = 0;
    const omgBonus = 0.05;
    for (const item of items) {
       const limit = 10000;
       if (item > limit) {
       sumBonus += (item - limit) * omgBonus;
       }
    }
    return sumBonus;
}