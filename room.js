

class Room {
	constructor(currentHotel) {
		this.occupant = null; //a customer
		this.hotel = currentHotel;
	}
	addOccupant(customer) {
		this.occupant = customer;
		customer.assignRoom(this);
	}
	checkIfOccupied() {
		//return if occupied, false if not
	}
	removeOccupant() {
		customer.checkOutOfRoom(this);
		this.occupant = null;
	}
	getRoomService(food) {
		this.hotel.getKitchenService(food,this); //food from this room
	}
}