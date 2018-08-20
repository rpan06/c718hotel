

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
		//this.occupant.checkOutOfRoom();
		this.occupant = null;
	}
	getRoomService(food) {
		console.log("Room sent food request to the hotel.");
		this.hotel.getKitchenService(food,this); //food from this room
	}
}
