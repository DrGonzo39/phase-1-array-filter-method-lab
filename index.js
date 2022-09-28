function findMatching (drivers,name) {
    return drivers.filter(string => string.toUpperCase() === name.toUpperCase());
}; 

function fuzzyMatch (drivers,string) {
    return drivers.filter(name => name.indexOf(string) === 0);
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}