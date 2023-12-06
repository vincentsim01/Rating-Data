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

    // var countrating=0;

    // for (var i = 0; i <ratingData.length; i++){

    //     countrating=countrating+ratingData[i].rating;   

    // }

    // console.log(countrating);











    var listresto=["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"];


    var theGroup=[];


    for (var i = 0; i < listresto.length ; i++){

        let filteredData = ratingData.filter(( restz ) => {return restz.restaurant == listresto[i]});
        theGroup.push(filteredData);

    }

    console.log(theGroup);



    var theGroup2=[];


    for (var j=0;j<theGroup.length;j++){


        console.log(theGroup[j][0].rating);

    theGroup2=[{
            restaurantname:`${theGroup[j][0].restaurant}`,


        // for (var k=0; k < Object.keys(theGroup[j]).length; k++){

            
        //             let values = Object.values(theGroup[j][k].rating);

        //             let sum = values.reduce((accumulator, value) => {
        //               return accumulator + value;
        //             }, 0);

        //             var theavgrating=sum/Object.keys(theGroup[j][k]).length;


        //     }

            averagerating:`(${theGroup[j][0].rating}+${theGroup[j][1].rating})/2`

    }]}

    

    
    console.log(theGroup2);






    // b. List of all restaurants with average rating greater than or equal to 4. 


   var thefour=ratingData.filter((bigfour)=>{
    {return bigfour.rating>=4}
});

   console.log(thefour);

