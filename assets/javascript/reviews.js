

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('key'); 
    console.log(myParam);

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBk6uYp5BL29lImxLs9zna7rR_GPO1E3N4",
    authDomain: "nationalparks-a81c3.firebaseapp.com",
    databaseURL: "https://nationalparks-a81c3.firebaseio.com",
    projectId: "nationalparks-a81c3",
    storageBucket: "nationalparks-a81c3.appspot.com",
    messagingSenderId: "919049440856",
    appId: "1:919049440856:web:4ad41db233e7188f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var review = "";
  var date = "";

  date = moment().format('MMMM Do YYYY');
  console.log(date);

  $("#submit").click(function(){
    
    // $("#dataDisplay").append(moment().format('MMMM Do YYYY, HH:mm'))
    review = $("#reviewTextarea").val() 
    // $("#dataDisplay").append(review)
    console.log(review);
    database.ref().push({
      date: date,
      review: review 
    })
  })

  database.ref().on("child_added", function(childSnapshot){
    $("#dataDisplay").append("<br><h6>" + childSnapshot.val().date + "</h6>");
    $("#dataDisplay").append("<h4>" + childSnapshot.val().review + "</h4><br><hr>");
    console.log(childSnapshot.val().date)
    console.log(childSnapshot.val().review)

    })
    $('#trails').on('click', function(){
      console.log(myParam);
      window.open('./trails.html?key='+ myParam,'_self');
    })
    $('#campgrounds').on('click', function(){
      console.log(myParam);
      window.open('./campgrounds.html?key='+ myParam,'_self');
    })
    $('#paragraphs').on('click', function(){
      console.log(myParam);
      window.open('./paragraphs.html?key='+ myParam,'_self');
    })

