

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
		var isOccupied = null;
		if(this.occupant){
			isOccupied = true;
		} else {
			isOccupied = false;
		}
		return isOccupied;
	}
	removeOccupant() {
		customer.checkOutOfRoom(this);
		this.occupant = null;
	}
	getRoomService(food) {
		this.hotel.getKitchenService(food,this); //food from this room
	}
}
