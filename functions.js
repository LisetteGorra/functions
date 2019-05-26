function hiName(name) {
    console.log("Hi", name +".");
    var welcome = "Welcome to the Intercontinental Hotel.";
}

hiName("Lisette");

function goodBye(name) {
    console.log("Bye", name+ "!");
        var farewell = "Thank you for visiting the Intercontinental/Standard Hotel.";

}
goodBye("Ms. Gorra");

function hotelBill(dailyRate, totalDays){
    var sum = dailyRate * totalDays;
    console.log("Your total bill is: $"+ sum);
}

hotelBill(450, 3);

// Your total bill for 3 days in the Camaro 2ss is $????

function camaroBill (dailyRate, totalDays) {
    var sum = dailyRate * totalDays;
    console.log("Your total bill for 3 days in the Camaro 2ss is $" + sum);
}

camaroBill(235, 3);