function isAlive (health) {
    return health > 0;
}

function getSumOfFeature (arr, feature) {
    let result = 0;

    arr.forEach(function (item) {
        result += item[feature];
    });

    return result;
}