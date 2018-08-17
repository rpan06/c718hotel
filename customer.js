

class Customer{
	constructor( customerName ){
		this.name = customerName;
		this.room = null; //room we are currently
		this.isHungry = false; // Always
	}
	orderRoomService( food ){
		this.room.getRoomService(food);
	}
	eat( food ){
	}
		
}
