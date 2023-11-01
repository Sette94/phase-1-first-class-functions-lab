// Code your solution in this file!

function returnFirstTwoDrivers(arr) {
    return arr.slice(0, 2)
}

function returnLastTwoDrivers(arr) {
    return arr.slice(1).slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(elint) {
    return function (multipler) {
        return elint * multipler
    }
}

console.log(createFareMultiplier(5.03)(2))

const fareDoubler = function doubleFare(fare) {
    return createFareMultiplier(fare)(2)
}

const fareTripler = function triplerFare(fare) {
    return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(arr, func) {
    return func(arr)
}

