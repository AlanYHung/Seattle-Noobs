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

    while (UserName==null || UserName==undefined)
    {
        UserName = prompt("Invalid Response.  Please enter your name.")
    }

    return UserName;
}

function greeting(Who, When){
    return (When + Who + "!")
}

function introImages(){
    var numOfImages = prompt("How many different images of seattle do you want to see? (Max 8)");
    var javaImg = "";
    var imageElement = document.getElementById('Introduction');
    var picWidth = 200;
    var picHeight = 200;
    var imgSrc = 'src ="https://via.placeholder.com/1500x200"';

    while (!(numOfImages > 0 && numOfImages < 9))
    {
        numOfImages = prompt("You can only choose from 1-8.  Please try again.")
    } 

    for (i=1; i<=numOfImages; i++){
        imgSrc = 'src = "images/' + i + '.jpg"';
        javaImg = javaImg + '<img ' + imgSrc + ' width="' + picWidth + '" height="' + picHeight + '" />'
    }
    console.log (javaImg);
    imageElement.innerHTML = javaImg;
}

function food(){
    var userFood = prompt("What is food would you like to explore? Please Choose from Pizza, Noodles, Sushi, & Steak.").toLowerCase();
    var javaImg = "";
    var imageElement = document.getElementById('ImageFood');
    var picWidth = 400;
    var picHeight = 200;
    var imgSrc = 'src ="https://via.placeholder.com/400x200"';

    while ((userFood != "pizza") && (userFood != "sushi") && (userFood != "noodles") && (userFood != "steak"))
    {
        userFood = prompt("You can only choose from Pizza, Steak, Sushi, & Noodles.  Please choose one.")
    } 

    if (userFood == "pizza")
    {
        imgSrc = 'src ="images/Pizza.jpg"';
    }
    else if (userFood == "steak")
    {
        imgSrc = 'src ="images/Steak.jpg"';
    }
    else if (userFood == "noodles")
    {
        imgSrc = 'src ="images/Noodles.jpg"';
    }
    else if (userFood == "sushi")
    {
        imgSrc = 'src ="images/Sushi Platter.jpg"';
    }

    javaImg = '<img ' + imgSrc + ' width="' + picWidth + '" height="' + picHeight + '" />';
    imageElement.innerHTML = javaImg;
}

function company(){
    var userCompany = prompt("What company would you like to explore? Please Choose from Microsoft, Amazon, & Boeing.").toLowerCase();
    var javaImg = "";
    var imageElement = document.getElementById('ImageCompany');
    var picWidth = 400;
    var picHeight = 200;
    var imgSrc = 'src ="https://via.placeholder.com/400x200"';

    while ((userCompany != "microsoft") && (userCompany != "amazon") && (userCompany != "boeing"))
    {
        userCompany = prompt("You can only choose from Microsoft, Amazon, & Boeing.  Please choose one.")
    } 

    if (userCompany == "microsoft")
    {
        imgSrc = 'src ="images/Microsoft.jpg"';
    }
    else if (userCompany == "amazon")
    {
        imgSrc = 'src ="images/Amazon.jpg"';
    }
    else if (userCompany == "boeing")
    {
        imgSrc = 'src ="images/Boeing.jpg"';
    }

    javaImg = '<img ' + imgSrc + ' width="' + picWidth + '" height="' + picHeight + '" />';
    imageElement.innerHTML = javaImg;
}

function hikes(){
    var userHikes = prompt("What company would you like to explore? Please Choose from Rainier or Helens.").toLowerCase();
    var javaImg = "";
    var imageElement = document.getElementById('ImageHikes');
    var picWidth = 400;
    var picHeight = 200;
    var imgSrc = 'src ="https://via.placeholder.com/400x200"';

    while ((userHikes != "rainier") && (userHikes != "helens"))
    {
        userHikes = prompt("You can only choose from Rainier or Helens.  Please choose one.")
    } 

    if (userHikes == "rainier")
    {
        imgSrc = 'src ="https://upload.wikimedia.org/wikipedia/commons/e/eb/Mount_Rainier_from_west.jpg"';
    }
    else if (userHikes == "helens")
    {
        imgSrc = 'src ="images/Mt St Helens.jpg"';
    }

    javaImg = '<img ' + imgSrc + ' width="' + picWidth + '" height="' + picHeight + '" />';
    imageElement.innerHTML = javaImg;
}
