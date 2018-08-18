

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
	}
	removeOccupant() {

	}
	getRoomService(food) {
		this.hotel.getKitchenService(food,this);
	}
}