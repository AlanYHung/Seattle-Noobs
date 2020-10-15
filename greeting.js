function timeofday(){
    var today = new Date();
    var CurrHour = today.getHours();
    var dynamicgreeting = "";

    if (CurrHour >= 18)
    {
        dynamicgreeting = "Good Evening "
    }
    else if (CurrHour >= 12)
    {
        dynamicgreeting = "Good Afternoon "
    }
    else if (CurrHour > 0)
    {
        dynamicgreeting = "Good Morning "
    }
    else
    {
        dynamicgreeting = "Error"
    }

    return dynamicgreeting;
}

function getUserName(){
    var UserName = prompt("Please enter your name.")

    return UserName;
}

function greeting(Who, When){
    return (When + Who + "!")
}