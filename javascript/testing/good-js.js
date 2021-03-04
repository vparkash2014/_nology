const filterOdds = listOfNumbers => {
    return listOfNumbers.filter(n => !(n % 2));
}

module.exports = {
    filterOdds
}