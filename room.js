

class Room{
	constructor(currentHotel){
		this.occupant = null; //a customer
		this.hotel = currentHotel;
	}
	addOccupant( customer ){

	}
	removeOccupant(){

	}
	getRoomService(food){
		this.hotel.getKitchenService();
	}
}