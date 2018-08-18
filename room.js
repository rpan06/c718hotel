

class Room{
	constructor(currentHotel){
		this.occupant = null; //a customer
		this.hotel = currentHotel;
	}
	addOccupant(customer) {
		this.occupant = customer;
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

	}
	getRoomService(food) {
		this.hotel.getKitchenService();
	}
}