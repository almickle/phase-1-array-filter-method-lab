
function findMatching(array, string) {
    return array.filter(element => element.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array, string) {
    return array.filter(element => element.startsWith(string))
}

function matchName(array, string) {
    return array.filter(element => element.name === string)
}