// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// Function to return the last two drivers
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Function that returns an array containing other functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Function to double a fare
const fareDoubler = createFareMultiplier(2);

// Function to triple a fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on another function
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
