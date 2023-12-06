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



    var listresto=["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"];


    var theGroup=[];


    for (var i = 0; i < listresto.length ; i++){

        let filteredData = ratingData.filter(( restz ) => {return restz.restaurant == listresto[i]});
        theGroup.push(filteredData);

    }

    // console.log(theGroup);



    var theGroup2=[];
    var theGroup3=[];


    for (var j=0;j<theGroup.length;j++){

        let sum=0;

        for (var k=0;k<theGroup[j].length;k++){

                                let values = theGroup[j][k].rating;

                                sum=sum+values;

                                var theavgrating=sum/theGroup[j].length;


        }

        theGroup2=[{
            restaurantname:`${theGroup[j][0].restaurant}`,
            averagerating: `${theavgrating}`

    }]

    theGroup3.push(theGroup2);

}

    
    console.log(theGroup3);






    // b. List of all restaurants with average rating greater than or equal to 4. 


   var thefour=ratingData.filter((bigfour)=>{
    {return bigfour.rating>=4}
});

   console.log(thefour);

