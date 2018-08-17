

class Customer{
	constructor( name ){
		this.name = name;
		this.room = null; //room we are currently
		this.isHungry = false;
	}
	orderRoomService( food ){
		this.room.getRoomService(food);
	}
	eat( food ){

	}
}
