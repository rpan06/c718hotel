

class Staff{
	constructor(currentHotel){
		this.busy = false;
		this.hotel = currentHotel;
	}
	handleKitchenRequest(){
		this.busy = true;
		var cookingFoodTimer = Math.floor(Math.random() * 30000) //30000 is 30 seconds
		setTimeout(this.completeKitchenRequest, cookingFoodTimer)
	}
	completeKitchenRequest(){
		this.isHungry = false;
		this.busy = true;
		console.log("Creme Brulee is delivered to the customer!")
	}

}
