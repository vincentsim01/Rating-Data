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





    var listresto=["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"]





    for (var i = 0; i < listresto.length ; i++){

        var theGroup[i]= ratingData.filter((theresto)=>{return theresto.restaurant==listresto[i]});


        console.log(theGroup);


    }



    // ratingData.map((rater)=>{return rater.restaurant=="KFC"})



    // b. List of all restaurants with average rating greater than or equal to 4. 


   var thefour=ratingData.filter((bigfour)=>{
    {return bigfour.rating>=4}
});

   console.log(thefour);

