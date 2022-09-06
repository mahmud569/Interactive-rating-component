function clickHandler(){
    var NumbersRating =(document.querySelector('input[name="NumbersRating"]:checked'));
    if(NumbersRating !== null){
        document.getElementById("card-img").style.display='none';
        document.getElementById("tnxCard").style.display='flex'
        document.getElementById("RatingRev").innerHTML = `You selected ${NumbersRating.value} out of 5`
     }
}





