//Creating an array of Colors
var colors = ['red', 'blue', 'green', 'maroon','Crimson','Teal','Sienna']

//Setting the index value of 0
 i = 0;

//Whenever the Button with ID [change-colour] is clicked,
//the Function is triggered 
$("#change-colour").click(function()
{
    //The Division [wrapper] with Background color will switch to the color's index value
    $("#wrapper").css("backgroundColor", colors[i]);
    //If the index of the array [colors] is pointing at the previous array value
    //and does not equal 0 which is the index for [Red Color]
    //then jump to the next index value wich is 1 [Blue Color]
    i = (i==colors.length-1) ? 0 : (i+1);

    //If the indext of the array [i] equals 
});