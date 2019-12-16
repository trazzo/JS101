let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        console.log(seatsLeft);
        //console.log(partySize);
        return partySize <= seatsLeft
    },
    seatParty: (partySize) => {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: (partySize) => {
        this.guestCount = this.guestCount - partySize;
    }
}

console.log(restaurant.checkAvailability(4));

//restaurant.seatParty(72);
//console.log(restaurant.checkAvailability(4));
//restaurant.removeParty(5);
//console.log(restaurant.checkAvailability(4));
