var today = new Date();
var CurrHour = today.getHours();
var dynamicgreeting = "Welcome";
var UserName = prompt("Please enter your name.")

if (CurrHour >= 18)
{
    dynamicgreeting = "Good Evening "
}
else if (CurrHour >= 12)
{
    dynamicgreeting = "Good Afternoon "
}
else
{
    dynamicgreeting = "Good Morning "
}

document.write (dynamicgreeting + UserName + "!")
