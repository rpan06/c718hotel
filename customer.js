class Customer {
	constructor( customerName ) {
		this.name = customerName;
		this.room = null;
		this.isHungry = false;
		this.ThingsIveEaten = [];
		this.AmIHungry = setInterval(this.checkIfHungry.bind(this), 10000);
		this.stayDuration = setInterval(this.checkOutOfRoom.bind(this),(Math.floor(Math.random() * 5) + 1)  * 60000);

	}
	assignRoom ( room ) {
		this.room = room;
	}
	orderRoomService ( food ){
		console.log(this.name + " ordered food.");
		this.room.getRoomService(food);
	}
	eat( food ){
		console.log(this.name + " ate food.");
		this.thingsIveEaten.push(food)

		this.isHungry = false;
		this.amIHungry = setInterval(this.checkIfHungry.bind(this), 10000);
	}
	checkIfHungry () {
		var misoHungry = Math.floor(Math.random() * 2)  //result is either 0 or 1
		if (misoHungry) {
			this.isHungry = true;
			console.log(this.name + " is hungry.");
			clearInterval(this.amIHungry);
			this.orderRoomService("creme brulee");
		}
		console.log(this.isHungry);
	}
	checkOutOfRoom () {
		if (is.isHungry === false) {
			room.removeOccupant();
			this.room = null;
			return this;
		}
	}
}
