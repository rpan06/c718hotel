

class Customer{
	constructor( customerName ){
		this.name = customerName;
		this.room = null; //room we are currently
		this.isHungry = false;
		this.ThingsIveEaten = [];
		this.AmIHungry = setInterval(this.checkIfHungry.bind(this), 10000);
	}
	assignRoom (room) {
		this.room = room;
	}
	orderRoomService ( food ){
		this.room.getRoomService(food);
	}
	eat( food ){
		this.ThingsIveEaten.push(food)
		this.isHungry = false;
	}
	checkIfHungry () {
		var misoHungry = Math.floor(Math.random() * 20) + 1 
		if (misoHungry === 1) {
			this.isHungry = true;
			this.orderRoomService("creme brulee");
		}
	}
	checkOutOfRoom () {
		this.room = null;
	}
	

}
