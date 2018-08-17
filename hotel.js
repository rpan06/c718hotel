

class Hotel {
	constructor() {
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer(name) {

	}
	checkOutCustomer() {

	}
	//make a room and add to rooms array
	addRoom() {
		var newRoom = new Room(this); //need to pass hotel object to room, so "this"
		this.rooms.push(newRoom);
	}
	//add staff to the hotel
	hireStaff(name, currentHotel) {
		var newStaff = new Staff('bobby', this);
		this.staff.push(newStaff)

	}
	getVacantRooms() {

	}
	getKitchenService() {

	}

}
