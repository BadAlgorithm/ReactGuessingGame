let testJs = {
    name: "guessing game appliction"
};
class Habitat {
    constructor(location) {
        this.location = location;
    }

    getLocation() {
        return this.location;
    }

    alertLocation() {
        alert(this.location);
    }
}

class City extends Habitat {
    constructor(name, population, blacklist, location) {
        super(location);
        this.name = name;
        this.population = population;
        this.blacklist = blacklist;
    }

    getCityName() {
        return this.name;
    }

    getCityPopulation() {
        return this.population;
    }

    amIWelcome(person) {
        return blacklist.filter((name) => {
            return name === person.getName();
        });
    }
}