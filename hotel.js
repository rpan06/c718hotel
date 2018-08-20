

class Hotel{
	constructor(){
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer( name ){
		var newCustomer = new Customer( name );
		this.rooms[checkForEmptyRoom()].addOccupant( newCustomer );
	}
	checkOutCustomer(){

	}
	//make a room and add to rooms array
	addRoom(){

	}
	//add staff to the hotel
	hireStaff( name ) {

	}
	getVacantRooms(){

	}
	getKitchenService(){
		
	}

}
//checkin