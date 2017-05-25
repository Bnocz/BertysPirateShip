var rating =  document.getElementById("userRating");
var subRating = document.getElementById("submitRating");
var totalRating = document.getElementById("actualRating2");

var firebaseRef = firebase.database().ref();

(function() {
    var stars = $('.rating');
    var submit = $('#submitRating');
    var firebaseRef = firebase.database().ref();
    var recipeRef = firebaseRef.child("Recipes").child("RicePudding").child("Ratings").push();

    submit.click(function() {
        recipeRef.set(stars.val());
        window.alert('Thanks for rating :)');
    });

    var numRatings = 0;
    var cumulativeRating = 0;
    var averageRating;
    firebaseRef.child("Recipes").child("RicePudding").child("Ratings").on("child_added", function(ratingSnapshot) {
        var uid =  ratingSnapshot.key;
        var ratingValue = ratingSnapshot.val();
        numRatings++;
        cumulativeRating += ratingValue;
        averageRating = cumulativeRating / numRatings;
        totalRating.innerHTML = averageRating;
    });
})();
/*(function() {
    var firebaseRef = firebase.database().ref();
    var itemRef = firebaseRef.child("Recipes").child("RicePudding");		//Define itemRef as the variable for itemId in firebase
    var stars = $('.rating');
    var submit = $('#submitRating');
    var numRatings;

    stars.click(function() {
        itemRef.child("ratings").child("numRatings").set($(this).val());
    });

    var cumulativeRating;
    var averageRating;
    itemRef.child("ratings").on("value", function(ratingsSnapshot) {
        var ratingsData = ratingsSnapshot.val();
        if (ratingsData) {
            numRatings = ratingsData.numRatings;
            cumulativeRating = ratingsData.cumulativeRating;
            averageRating = cumulativeRating / numRatings;
        }
        totalRating.innerText = averageRating;
    });
})();*/