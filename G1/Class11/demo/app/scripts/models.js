function SwapiPeopleResponse(total, next, prev, results) {
    this.totalCount = total;
    this.nextPage = next;
    this.prevPage = prev;
    this.results = results;

    this.hasNextPage = function() {
        return this.nextPage !== null;
    }

    this.hasPrevPage = function() {
        return this.prevPage !== null;
    }

    this.getPeopleByName = function(name) {
        for(let person of this.results) {
            if (person.name === name) {
                return person;
            }
        }
        return null;
    }
}