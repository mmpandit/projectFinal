var latCurrent=0;
var lonCurrent=0;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('key');
console.log(myParam);
console.log((myParam==='zion'));

switch (myParam!=="") {
    case (myParam==='zion'):
        latCurrent = 37.2982;
        lonCurrent = 113.0263;
        break;
    case (myParam==='bryce'):
            latCurrent = 37.5930;
            lonCurrent = 112.1677;
        break;
    case (myParam==='arches'):
            latCurrent = 38.7331;
            lonCurrent = 109.5925;
        break;
    case (myParam==='canyonlands'):
            latCurrent = 38.3269;
            lonCurrent = 109.8783;
        break;
    case (myParam==='capitolreef'):
            latCurrent = 38.3670;
            lonCurrent = 111.2615;
        break;
}

var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latCurrent + "&lon=-" + lonCurrent + "&maxResults=2&key=200490960-11dab972d2711188712bdd6413bb06f3";

$.ajax({
url: queryURL,
method: "GET"
}).then(function (response) {
    console.log(response);
    // console.log(JSON.stringify(response))
    for (var i = 0; i < response.trails.length; i++) {
        var tRow = $("<tr>");
        var trailId =response.trails[i].id;
        // var trailsImg = $("<td>").text(response.trails[i].imgSqSmall);
        var trailsName = $("<td>").html(`<a href="trailSingle.html?key=${trailId}">${response.trails[i].name}</a>`);
        var distance = $("<td>").text(response.trails[i].length+"mi");
        var location = $("<td>").text(response.trails[i].location);
        var type = $("<td>").text(response.trails[i].type);
        var stars = $("<td>").text(response.trails[i].stars);
        
        //trailNameNew= (response.trails[i].name).replace(/\s+/g, '');
        console.log(trailId);
        
        //trailsId.push(trailId);

        tRow.append(trailsName, distance, location, type, stars);

        $("tbody").append(tRow);
    }
});

$('#campgrounds').on('click', function(){
    console.log(myParam);
    window.open('./campgrounds.html?key='+ myParam,'_self');
  })
  $('#reviews').on('click', function(){
    console.log(myParam);
    window.open('./reviews.html?key='+ myParam,'_self');
  })
  $('#paragraphs').on('click', function(){
    console.log(myParam);
    window.open('./paragraphs.html?key='+ myParam,'_self');
  })

// $(document).ready(function () {
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);

//             var html='';
//             for (var i = 0; i < response.trails.length; i++) {
//                 var url = response.trails[i].imgSmall;
//                 var name = response.trails[i].name;
//                 var summary=response.trails[i].summary
//                 html += "<div class='card' style='width: 200px;'>" +  name + "</div>";
//                 html +=  "<img class='card-img-top' src='"+url+"'>";
//                 html += "<div class='card-body'></div>";
//                 html += "<p class='card-text' style='width: 200px ;'>" +  summary + "</p>";

//             }
//             $(".container").html(html);

//         // }
//     });
// });