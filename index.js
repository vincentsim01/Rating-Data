var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ] 




    // a. Calculate the Average rating for all the restaurants. 

    var countrating=0;

    for (var i = 0; i <ratingData.length; i++){

        countrating=countrating+ratingData[i].rating;   

    }

    console.log(countrating);



    // b. List of all restaurants with average rating greater than or equal to 4. 


   var thefour=ratingData.filter((bigfour)=>{
    {return bigfour.rating>4}
});

   console.log(thefour);

