

class Staff{
	constructor(currentHotel){
		this.busy = false;
		this.hotel = currentHotel;
		this.destination = null;
	}
	handleKitchenRequest(food,room){
		console.log("Staff received food request.");
		this.destination = room;
		this.busy = true;
		var cookingFoodTimer = Math.floor(Math.random() * 30000) //30000 is 30 seconds
		//setTimeout(this.completeKitchenRequest, cookingFoodTimer, food)
		var boundFunction = this.completeKitchenRequest.bind(this,food)
		setTimeout(boundFunction, cookingFoodTimer);
	}
	completeKitchenRequest(food){
		console.log("Staff sent food to customer.");
		this.destination.occupant.eat(food)
		this.busy = false;
	}

}
