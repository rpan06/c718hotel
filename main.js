

var marriot = new Hotel();

for (var roomIndex = 0; roomIndex<5; roomIndex++){
    marriot.addRoom();
}

var nameArray = ["Gerry", "Jon", "Rachel", "Mia"]
for (var nameIndex = 0; nameIndex<4; nameIndex++){
    marriot.checkInCustomer(nameArray[nameIndex]);
}
