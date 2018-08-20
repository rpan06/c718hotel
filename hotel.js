

class Hotel {
	constructor() {
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer( name ){
		var newCustomer = new Customer( name );
		for( let searchIndex = 0; searchIndex < this.rooms.length; searchIndex++){
			if(!this.rooms[searchIndex].checkIfOccupied()){
				this.rooms[searchIndex].addOccupant( newCustomer );
			}
		}
		
	}
	//make a room and add to rooms array
	addRoom(){
			var newRoom = new Room( this );
			this.rooms.push(newRoom);

	}
	//add staff to the hotel
	hireStaff( name ) {
		var newStaff = new Staff( name )
		this.staff.push(newStaff);
	}
	getKitchenService( food, requestingRoom ){
		for(let staffIndex = 0; staffIndex < this.staff.length; staffIndex++){
			if(!this.staff[staffIndex].busy){
				this.staff[staffIndex].handleKitchenRequest( food, requestingRoom );
				return;
			}
		}
		return console.warn('All staff are busy');

	}

}
//checkin
