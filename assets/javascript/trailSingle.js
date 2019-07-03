const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('key');
console.log(myParam);
//const city=urlParams.get('city');
//console.log((myParam==='zion'));

var city = '';
var key='';


var queryURL = "https://www.hikingproject.com/data/get-trails-by-id?ids=" + myParam + "&key=200490960-11dab972d2711188712bdd6413bb06f3";
// var queryURL = "https://www.hikingproject.com/data/get-conditions?ids=" + myParam + "&key=200490960-11dab972d2711188712bdd6413bb06f3";
//var queryURL = "https://www.hikingproject.com/data/get-to-dos?email=swarada.darbhe@gmail.com&startPos=5&key=200490960-11dab972d2711188712bdd6413bb06f3";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.trails[0].url);
    city = response.trails[0].location;
    //$('#displayData').append(JSON.stringify(response));
    var trailName = $('<p>')
    trailName.html(response.trails[0].name);
    $('#displayName').append(trailName)
    var trailImg = $('<image src=' + response.trails[0].imgMedium + ' alt=parkImage>')
    $('#displayImg').append(trailImg);
    var summaryP = $('<p>');
    summaryP.text(response.trails[0].summary);
    $('#displayTrailSummary').append(summaryP);
    var trailP = $('<p>');
    trailP.text(response.trails[0].conditionStatus);
    $('#displayTrailCondition').append(trailP);

    console.log(city);

    displayDetails();

    // var displayA=$('<a>');
    // displayA.attr('href',response.trails[0].url);
    $('#displayLink').append("<a href="+response.trails[0].url+">"+response.trails[0].url+"</a>");

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=166a433c57516f51dfab1f7edaed8413";
    //var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=166a433c57516f51dfab1f7edaed8413&cnt=5";
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);

        //for(var i=0;i<response.list.length;i++){
        // var displayDate=response.list[i].dt_txt;
        // console.log(displayDate);
        // if(''+displayDate+'' === 'yyyy-mm-dd 00:00:00'){
        var weatherImg;
        console.log(moment().format("hh:mm "));
        if ((moment().format("hh:mm ")) < "20:00 ") {
            weatherImg = $('<img src="./assets/images/day_img.jpg">')
        } else {
            weatherImg = $('<img src="./assets/images/night_img.jpg">')
        }

        // var dateP=$('<p>');
        // displayDate=displayDate.slice(0, -9);//replace(/ \d\d:\d\d:\d\d GMT/, '')
        // dateP.html(displayDate);

        var dateP = $('<p>');
        dateP.html("Today");

        var tempDiv = $('<div>');

        var tempMaxP = $('<p>');
        var tempMax = ((response.main.temp_max - 273.15) * 1.80 + 32).toFixed(2);
        tempMaxP.html(tempMax + "F");

        var tempMinP = $('<p>');
        var tempMin = ((response.main.temp_min - 273.15) * 1.80 + 32).toFixed(2);
        tempMinP.html(tempMin + "F");

        console.log(tempMax);
        console.log(tempMin);


        tempDiv.append(dateP);
        tempDiv.append(weatherImg);
        tempDiv.append(tempMaxP);
        tempDiv.append(tempMinP);
        $('#displayTemp').append(tempDiv);
        // }
        //}

    });
});

$('#submit-BMI').on('click', function () {
    $('#displayBmi').empty();
    var userWeight = $('#weight').val();
    var userHeightFt = $('#height-ft').val();
    var userHeightInches = $('#height-inches').val();
    console.log(userWeight, userHeightFt, userHeightInches);

    var finalWeight = (userWeight * 703);
    var inchesHeight = (parseInt(userHeightFt * 12) + parseInt(userHeightInches));
    var finalHeight = (inchesHeight * inchesHeight);
    var BMI = (finalWeight / finalHeight).toFixed(2);
    console.log(finalWeight, inchesHeight, finalHeight, BMI);

    var bmiP = $('<p>');
    //BMI=parseInt(BMI);
    if (BMI < 18.5) {
        console.log("You are Underweight");
        bmiP.text("Your BMI is " + BMI + " You are Underweight. Still you can try it");
    } else if ((BMI > 18.5) && (BMI < 24.99)) {
        console.log("Your Weight is Normal");
        bmiP.text("Your BMI is " + BMI + " Your Weight is Normal. Good to go");
    } else if ((BMI > 25) && (BMI < 29.99)) {
        console.log("You are Overweight");
        bmiP.text("Your BMI is " + BMI + " You are Overweight. Still you can try it");
    } else if (BMI > 30) {
        console.log("You are Obese");
        bmiP.text("Your BMI is " + BMI + " You are Obese. Still you can try it");
    }

    $('#displayBmi').append(bmiP);
});

function displayDetails() {
    var elevationDiv = $('<div>');
    var overviewDiv = $('<div>');
    var descriptionDiv = $('<div>');
    var trailP = $('<p>');
    var elevationHigh = $('<p>');
    var elevationLow = $('<p>');
    var dogP = $('<p>');
    var overviewP = $('<p>');
    var overviewNewP = $('<p>');
    var needToKnowP = $('<p>');
    var descriptionP = $('<p>');
    var descriptionNewP = $('<p>');

    if (myParam === "7000108") {
        trailP.text("4.4 mile out and back Intermediate/Difficult");
        console.log(trailP.text());
        elevationHigh.text("High :5,707'");
        elevationLow.text("Low :4,321'");
        dogP.text("No Dogs");
        overviewP.text("Hiking Angel's Landing is a rare experience. The route is as efficient as it is improbable - most of the elevation gain happens on a paved trail leading to an exposed ridge. You'll never forget the view.");
        overviewNewP.text();
        needToKnowP.text("Restrooms at Grotto Trail and there is an outhouse at Scout Lookout. Bring water, food, sunsceen and all necessary clothing. The hike is not long, but it's intense full-value. Bring what you need to be safe and comfortable.");
        descriptionP.text("From the Grotto shuttle drop-off, look for the signed trail on west side of the road. The trail, somewhat sandy but not hard, crosses the beautiful Virgin River, and bends north to largely follow it. Angel's Landing will be staring right at you. Savor this mellow warmup, because you'll be working hard soon." +
            "As the grade increases, the trail becomes paved leading into the 21 grinding switchbacks. You'll then transition into the shady depths of Refrigerator Canyon beneath Angels Landing, then turning back right to enter the final compact switchbacks (called Walters Wiggles) to Scout Lookout, where the pavement ends and the real fun begins. ");
        descriptionNewP.text("Assess conditions and your comfort with the exposed route ahead. If you are game, continue on the final 1/2 mile to Angel's Landing summit. There are chains anchored by posts as optional assistance when the route is exposed. Grab em if you want. Regardless, you'll feel the rush." +
            "When I did Angel's Landing the weekend before Thanksgiving, 2014, it was a magnificent sunny day, but a chilly wind was blowing big gusts on the top section. it doesn't take much to make you realize how vulnerable you are up there, so be careful." +
            "Exposure eases the last few hundred meters to the summit. Take a seat, stretch, and enjoy the divine view. Proceed back to Grotto trailhead exactly the way you came.");
         key="zion";
        }

       if(myParam === "7001726"){
        trailP.text("5.1 mile loop Intermediate");
        elevationHigh.text( "High :4,656'");
        elevationLow.text("Low :4,456'");
        dogP.text("No Dogs");
        overviewP.text("While there are many incredible sights and stops in Zion National Park, few are as well known as The Narrow. Here, the Virgin River has carved a spectacular gorge in the upper reaches of Zion Canyon: 16 miles long, up to 2,000-feet deep, and at times only 20 to 30-feet wide. The Narrows, with its soaring walls, sandstone grottos, natural springs, and hanging gardens can be an unforgettable wilderness experience. ");
        overviewNewP.text("The Narrows is not a hike to be underestimated. Hiking The Narrows means hiking in the Virgin River. At least 60 percent of the way is spent wading, navigating, and sometimes swimming in the river. There is no maintained trail because the route is the river. The current is swift, the water is cold, and the rocks underfoot are slippery. Flash flooding and hypothermia are constant dangers. Appropriate planning, proper equipment, and sound judgment are essential for a safe and successful trip. Your safety is your responsibility."+ 
        "The Narrows is one of the most popular areas in Zion National Park. This route leads from the Temple of Sinawava to Orderville Canyon and back again.");
        needToKnowP.text("Flash floods, often caused by storms miles away, are a real danger and can be life threatening. During a flash flood, the water level rises quickly, within minutes or even seconds. A flash flood can rush down a canyon in a wall of water 12 feet high or more."+ 
        "Continuously evaluate weather conditions. If bad weather threatens, avoid traveling in a slot canyon. Watch for these indications of a flash flood:<br>"+ 
        "-Any deterioration in weather conditions"+ 
        "-Build up of clouds or sounds of thunder"+ 
        "-Sudden changes in water clarity"+ 
        "The Narrows is like navigating on slippery bowling balls. It requires balancing on algae-coated rocks in the middle of a swiftly flowing river. Sturdy footwear is essential. Hiking boots with good ankle support are best. Inappropriate footwear often results in twisted ankles and crushed toes."+ 
        "Lastly, cotton kills! Wear moisture wicking clothing and bring layers. Lower temps in the narrows, coupled with cold water, can have you shivering on a 100° day.");
        descriptionP.text("This is the easiest way to experience The Narrows. Ride the shuttle to the Temple of Sinawava, and use the restroom facilities before embarking - there are no facilities in the Narrows. Start along Riverside Walk, which works its way north, along the shores of the Virgin River. Along the way, hikers will have awesome views of the river itself, as well as some ultra lush hanging gardens Zion is famous for.");
        descriptionNewP.text("At the end of Riverside Walk, begin wading upstream into the Narrows. Use caution as you move upstream given the slippery and uneven nature of the river bottom. There is no formal destination (turn around whenever you feel like it), and you return the same way you came. This route turns back on itself at Orderville Canyon, a tributary creek approximately two hours upstream from the end of Riverside Walk (2.5 miles from the shuttle stop)."+ 
        "Along the way to Orderville Canyon, you will be continuously awestruck by the peculiarity of this narrow and incredibly deep canyon. The sandstone walls of the canyon flow overhead like the water that carved them into existence.");
        key="zion"; 
      }



       if(myParam === "7015185"){
        trailP.text("3.0 mile loop Intermediate");
        elevationHigh.text("High :7,983'");
        elevationLow.text("Low :7,983'");
        dogP.text("No Dogs");
        overviewP.text("This is a very popular way to get off the rim and down into Bryce Canyon. The ease of access, relatively moderate grades, and spectacular views make the loop an all time favorite. Don't be lulled by the short mileage of this trail, be prepared for a steep climb out whether completing the loop in the clockwise or counter clockwise direction.");
        overviewNewP.text("");
        needToKnowP.text("Bring yaktrax or other foot traction for winter travel. Some people with a fear of heights have reported feeling nervous in some parts. Keep kids away from the edges.");
        descriptionP.text("Prepare to be amazed by this magical trip through otherworldly rock formations. This popular trail can be crowded especially near the rim, but the throngs often thin out in the lower canyon reaches. From Sunrise Point, drop into the canyon along a steep but wide trail along a ridgeline. Weave down through towering multicolored spires and past sparsely wooded areas. The most sweeping views occur at the top, but as you descend, the cliffs and hoodoos encroach. After a series of switchbacks and a few man-made tunnels, the descent eases considerably. Proceed through a ravine with multicolored hoodoos galore. Take the short spur to see the Queen Victoria rock formation - she's in the center viewing the spired garden around her. ");
        descriptionNewP.text("Back on the main trail, cross washes and pass through forest over mostly level ground. Contour around the base of a large cliff formation before reaching a trail junction with the Navajo Loop and Peekaboo - Navajo Connector. Take the eastern half of the Navajo Loop Trail northwest (back toward the rim). This eastern half of the Navajo Loop is also called Two Bridges for the double arch visible in the distance. Climb up a wooded slope as the cliff walls get taller and closer as you ascend. After a very steep section of switchbacks, the Thor's Hammer formation appears (big block on a skinny pinnacle). Continue up through open terrain until reaching the junction with the Rim Trail at Sunset Point."+ 
        "To complete the Queens Garden Navajo Loop Trail, turn right on the Rim Trail heading north. After nearly a mile on this flat paved path, your journey ends back at Sunset Point.");
        key="bryce";
    }

       if(myParam === "7015350"){
        trailP.text("8.4 kilometer loop Intermediate/Difficult");
        elevationHigh.text("High : 2,530 m");
        elevationLow.text("Low :2,263 m");
        dogP.text("No Dogs");
        overviewP.text("This steep, roller coaster of a trail has delightful up-close views of hoodoos and natural arch windows. The Peek-A-Boo Loop can be accessed from both Sunrise and Sunset Points, but arguably the most straightforward and scenic route descends the Peek-A-Boo Loop Connector from Bryce Point as described here.");
        overviewNewP.text();
        needToKnowP.text("Don't be fooled by the short total mileage, this is a strenuous outing - bring adequate water, food, sun protection and sturdy shoes.");
        descriptionP.text("Starting from the parking area at Bryce Point, switchback steeply down the Peek-A-Boo Loop Connector from the rim, crossing many cliff bands. Contour below rock walls, crossing ridges and bluffs, all the while steadily losing elevation. The abundance and variety of colorful hoodoo towers are the highlight of this trail. After a relatively level section of trail, plunge into the neighboring canyon by navigating a series of hairpin turns down the hill. The Peek-A-Boo Loop Connector ends at a T intersection with the southern tip of the Peekaboo Loop Trail."+ 
        "The loop can be done in either direction, but aficionados prefer the clockwise way. So, from the T intersection, take the left (western) half of the Peek-A-Boo Loop Trail and pass the seasonal bathrooms. Climb up and down ridges and through steep switchbacks. This is a great treat for intrepid travelers who want close encounters with the colorful surreal spires. Keep an eye out for the named rock formations: Wall of Windows, Hindu Temples, and the Cathedral. After a long downhill section, the western half of the loop ends at the trail's lowest elevation point - which is also the intersection of the Peek-A-Boo - Navajo Connector, Peekaboo Connector and the Peek-A-Boo Loop Trail. ");
        descriptionNewP.text("To complete the Peek-A-Boo Loop Trail, continue southwards along the eastern half of the loop now climbing steeply. Surmount a broad ridge and wind through its saddle next to the Fairly Castle rock formation. Another long descent deposits you back on the canyon bottom at a wide wash. Ascend the valley and the last few switchbacks to arrive at the start of the loop (at its southern tip). At the intersection, rejoin the Peek-A-Boo Loop Connector and retrace your steps for the last 0.5 mile grunt back up to the rim."+ 
        "In case you're wondering, the Peek-A-Boo trail name comes from the natural arch windows formed in the rocks. Note: the loop trail receives heavy use by horse/mule riders - be sure to give them right of way and beware of the poop.");
        key="bryce";
    }


       if(myParam === "7002256"){
        trailP.text("5.0 mile loop Intermediate/Difficult ");
        elevationHigh.text("High :5,493'");
        elevationLow.text("Low :5,040'");
        dogP.text("No Dogs");
        overviewP.text("This second most popular trail in Arches has a well deserved reputation for amazing scenery in a wonderfully remote setting. This is your chance to visit 8 named arches and with keen eyes you'll spot many more.");
        overviewNewP.text();
        needToKnowP.text("Take at least 1 quart (1 liter) of water per person, wear a hat, use sunscreen, take breaks, be self-sufficient. Visit early or late in the day if you want to avoid the crowds on the main part of this extremely popular trail. Late afternoon is thought to be the best time to photograph the fins in Devils Garden for the best color. No bikes are allowed on this trail.");
        descriptionP.text("This featured hike consists of first taking the busy Devils Garden Main Trail, then escaping the hordes by completing the Devils Garden Primitive Loop in the clockwise direction and returning to the parking lot on the Devils Garden Main Trail. The distances listed do not include additional mileage from the numerous spur trails which are among the highlights of this outing."+ 
        "From the Devils Garden trailhead, take the initially paved path over mostly level ground between rock fins. Almost immediately, a signed fork announces the turnoff for Tunnel Arch Trail and Pine Tree Arch Trail. These short, easy detours are highly recommended. Return to the Devils Garden Main Trail, heading northwest through more widely spaced rock fin valleys."+ 
        "At the next trail junction, stay left on the Devils Garden Main Trail towards Landscape Arch Trail, for now ignoring the Devils Garden Primitive Loop trail that heads north. From here, take the paved path to Landscape Arch Trail and its spectacular viewpoint (more details about this impressive arch can be found on the Landscape Arch Trail trail page). The part of the Devils Garden Main Trail to Landscape arch is non-taxing and very family-friendly, but past this point be advised to keep kids under close supervision."+ 
        "Back on the Devils Garden Main Trail, expect increased challenges as your route climbs over sandstone slabs and traverses narrow ledges with some exposure to heights. Follow rock pile cairns to stay on the correct route. Soon, you have the option to take the short spurs Partition Arch Trail and Navajo Arch Trail to the southwest. These arches often have shade and make worthwhile detours, but if you're out of stamina or time it is OK to bypass them. ");
        descriptionNewP.text("Further along the undulating Devils Garden Main Trail, cross more fins hiking over exposed, sun-baked ground. After a sharp hairpin bend around the end of a fin, the Devils Garden Main Trail ends at a 3 way junction with the Dark Angel Trail and the Devils Garden Primitive Loop. If you've got lots of time and energy left, visit Dark Angel and then tackle the more rugged Devils Garden Primitive Loop. If you're already down for the count, better retrace your steps back to the parking area."+ 
        "The start of the Devils Garden Primitive Loop Trail is marked with a Caution: Primitive Trail, Difficult Hiking warning sign. It is worth evaluating your water levels and experience over the last half of the Devils Garden Main Trail: if you were terrified, don't do the Primitive Loop. If you still feel energetic and successfully conquered the challenges of the Main Trail with aplomb, then you'll likely find the Primitive Loop to be similarly enjoyable."+ 
        "From the 3-way junction with Devils Garden Main Trail and the Dark Angel Trail, the Devils Garden Primitive Loop Trail begins with a moderately steep descent of Fin Canyon. About halfway down, and about 0.4 miles from the beginning of the loop, look for the Private Arch Trail on the right (leading south/southeast). This detour is easy and visits an infrequently seen, isolated arch. Once back on the Devils Garden Primitive Loop Trail, continue downhill over rock spines, through sandy washes and slickrock sections, threading between mesmerizing fin canyons."+ 
        "Some parts in this area become treacherous when the rock is wet or snowy. There is one rock face that must be navigated via a ledge and another tricky spot where a depression often fills with water and must be circumnavigated. Most hikers with grippy shoes report excitement without dunkings. (If you are concerned about these obstacles, you can visit Private Arch and then retrace your steps back to the Devils Garden Main Trail.) The remainder of the trail covers more open ground, ascending gradually to the junction with the Devils Garden Main Trail at the Landscape Arch area. Rejoin the masses on your return to the parking lot via the Devils Garden Main Trail.");
        key="arches";
    }

       if(myParam === "7002254"){
        trailP.text("3.1 mile out and back Intermediate");
        elevationHigh.text("High :4,816'");
        elevationLow.text("Low :4,307'");
        dogP.text("No Dogs");
        overviewP.text("Delicate Arch is a magnificent, free-standing arch recognized the world over. This trail to its base is fun-filled and unique- visiting petroglyphs and a smaller arch, climbing slickrock hillsides and traversing an exciting, exposed ledge.");
        overviewNewP.text("");
        needToKnowP.text("Just before you get to Delicate Arch, the trail goes along a rock ledge for about 200 yards. This part is not scary for those without an extreme fear of heights, but a stumble here could have consequences.");
        descriptionP.html("It is a given that everyone wants to see the Delicate Arch with their own eyes, right? But not everyone has the same time available or physical abilities. So there are 3 good options:<br>"+ 
        "- Lower Delicate Arch Viewpoint Trail: short, flat, paved, wheelchairs OK.<br>"+ 
        "- Upper Delicate Arch Viewpoint Trail: moderate half mile climb to viewpoint on cliffs across from the arch <br>"+ 
        "- Delicate Arch Trail: more strenuous, 3 mile round trip to the base of Delicate Arch (described in detail below) <br>"+ 
        "This is a trail description for the Delicate Arch Trail (to the base of the arch): starting from the parking lot at Wolfe Ranch, head northeast on the wide trail over mostly level ground. Almost immediately on the left, you'll pass the Old Wolfe Ranch log cabin, root cellar, and corral used in the late 1800's. A bridge over the overgrown Salt Wash brings you to the Petroglyph Interpretive Trail. This easy loop visits a small panel of carved Ute Indian petroglyphs thought to be created after these native people acquired horses in the 1600's."+ 
        "Continue on the Delicate Arch trail through dry desert terrain, occasionally passing stunted trees or rock piles providing welcome shade. Take these rare opportunities when you can, there is hardly any shade on this trail. Start ascending up red dirt hillsides before arriving at enormous tan slickrock slabs. This part of the trail crosses open rock with the route marked only with cairns. Keep an eye out for these rock piles, but if you lose the trail it helps to look for others on the trail or simply head uphill- you are likely to come across the path again.");
        descriptionNewP.text("Finally, the grade eases a bit and you leave the crevassed slickrock behind to climb smooth sandstone on the final approach to the arch. Follow the airy stone ramp on a slight incline as it contours around the backside of an imposing rock tower. This exposed part lasts about 200 yards but the path surface is about 3 feet wide at it's narrowest, so don't let this discourage you from completing this superlative trail."+ 
        "Emerge through a break in the formation to be dazzled by the Delicate Arch in all its glory. One of the best features of this trail is the surprise reveal saved for the very end! Delicate Arch presides over an amphitheater-like bowl that can become over-run with admirers. It used to be part of the upper Entradea sandstone fin before erosion and wind weathered away the sandstone to leave what we see today. When you are finished ogling the arch, retrace your steps back to Wolfe Ranch. Unless you are more observant than most, you likely missed Frame Arch just around the corner (on the main path to Delicate Arch). This is worth looking for on the return trip and is also a favorite place to frame pictures of Delicate Arch through its window."+ 
        "Some words to the wise: take at least 1 quart (1 liter) of water per person, wear a hat, use sunscreen, take breaks. Visit early or late in the day if you want to avoid the crowds on this extremely popular trail. Late afternoon is thought to be the best time to photograph Delicate Arch for the best color. Note: no bikes allowed on this trail.");
        key="arches";
    }

       if(myParam === "7002685"){
        trailP.text("4.1 mile loop Easy/Intermediate");
        elevationHigh.text("High :4,295'");
        elevationLow.text("Low :3,998'");
        dogP.text("Leashed");
        overviewP.text("The Grandstaff Hiking Trail features a perennial stream in its scenic canyon. Morning Glory Natural Bridge, which has a span of 243 feet, is the sixth longest natural rock span in the United States.");
        overviewNewP.text("");
        needToKnowP.text("Plenty of water");
        descriptionP.text("From the parking area next to Utah 128, follow the trail up the left side of the stream. Keep going upstream for about 1.5 miles.");
        descriptionNewP.text("Morning Glory Natural Bridge is located at the end of the second side canyon on the right. The trail forks just below this canyon. Follow the trail to the right, cross the stream and ascend a steep slope. Morning Glory Bridge is located at the end of the trail about 0.5 miles up the canyon from the stream.");
        key="capitolreef";
    }

       if(myParam === "7002257"){
        trailP.text("0.5 mile loop Easy");
        elevationHigh.text("High : 5,156'");
        elevationLow.text("Low : 5,125'");
        dogP.text("No Dogs");
        overviewP.text("This short out-and-back features one of the most interesting pieces of geology in the park, the famed Double Arch");
        overviewNewP.text("");
        needToKnowP.text("A short, flat out and back to some stunning geology that's easily done with the whole clan!");
        descriptionP.text("A flat, sandy trail leads to the base of this stunning twin arch formation. At 112-foot tall, with a 144-foot wide span, the larger of these two arches is the tallest in the park and the third widest. The smaller of the two is 67 feet wide and 86 feet tall. As you can get up close and even under these arches, it is usually possible to wring some shade from the desert here. Take some time to experiment with the angles and lighting to get the perfect photograph. ");
        descriptionNewP.text("Geologists believe this marvelous span began as a pothole of water on the surface overhead. The collected water broke down the rock, forming an alcove, which eventually created both arches. Nice job Mother Nature! On your return to the trailhead, look along the west side of this route for the large formation called Parade of Elephants- recognizable with some imagination and the right viewing angle (line of elephants holding each others tails with small well-placed holes)."+ 
        "This is such an easy, quick approach that you're likely to have to share this special spot with others unless you visit early or late in the day. Early morning is thought to be the best time to photograph Double Arch for the best color. Note: bikes are not allowed on this trail.");
        key="capitolreef";
    }

       if(myParam === "7014744"){
        trailP.text("3.2 mile out and back Intermediate/Difficult");
        elevationHigh.text("High :6,000'");
        elevationLow.text("Low :5,393'");
        dogP.text("Unknown");
        overviewP.text("Don't let the difficulty rating scare you away from this highly trafficked 3-mile round trip out and back trail leading up to an incredible arch overlooking the canyon below.");
        overviewNewP.text("");
        needToKnowP.text("Need plenty of water during summer");
        descriptionP.text("After turning off the scenic drive, you'll continue down a dirt road easily accessible by any car. The road continues for about a mile, ending at the parking area and start point for the Grand Wash Trail."+ 
        "Begin down the Grand Wash Trail from the parking area for a few hundred yards and the sign for Cassidy Arch Trail appears on your left. The trail begins gaining elevation rapidly via well-made switchbacks leading up the canyon wall. The trail is easy to navigate and climb via the well marked and maintained route along the canyon rim. The views along the trail are worth every minute and drop of sweat throughout the trip."+ 
        "As you continue along the trail after the series of switchbacks, the trail will continue skirt the canyon rim until you reach a section of the trail at a dry wash where you must take a sharp left continuing on and up the trail. (Beware of this section because the path appears to continue straight through the soft sand wash, and misleading footprints are common. A few rocks blocking the wash try to prevent you from continuing straight in the wrong direction) ");
        descriptionNewP.text("After taking the left at this wash, you begin a slight climb, and eventually head around a bend to your first breathtaking view of the canyon, surrounding cliffs and in the distance to the right Cassidy Arch. Continue to follow the trail until you reach a sign at a fork for different trails. Follow the directions and arrow for Cassidy Arch trail to the left and down a few steps from the sign for another 0.5 miles."+ 
        "As you continue on the last stretch of the trail you'll begin to notice an increase in cairns and desert wood marking the route. You'll start to lose the distinct dirt trail and begin to ascend slightly across and up slick rock formations. Follow the cairns along the slick rock which eventually guides you to the grand view of the Cassidy Arch. From this incredible view you can also work your way out safely onto the larger more structured arch capturing amazing pictures and views.");
        key="canyonlands";
    }

       if(myParam === "7014773"){
        trailP.text("9.2 mile out and back Intermediate/Difficult");
        elevationHigh.text("High :6,909'");
        elevationLow.text("Low :6,909'");
        dogP.text("Unknown");
        overviewP.text("This is an intermediate out-and-back route that provides an amazing view of the main part of Capitol Reef. At about 9.5 miles round-trip, this trail will take the better part of the day, but it is worth it. While most of the trail follows the mesa/cliff rim, there is very little exposure - just a lot of amazing views to take in. One of the best parts about this trail is that you get a great top-down view of the iconic Castle rock feature.");
        overviewNewP.text("");
        needToKnowP.text("Please stay on trail and do not hike through the extremely delicate cryptobiotic soil. Bacteria in this bumpy soil forms the building blocks for all plant life in the desert. One footstep destroys this and it takes the desert about a decade to recover."+ 
        "Be mindful of the rock cairns the mark the trail. They are there, and you will be able to follow the trail just fine if you keep looking for them.");
        descriptionP.text("This trail beings at Hickman Bridge parking. Follow the trail through about 3 switchbacks as it continues on a steep ascent. You'll reach an intersection with the Hickman Bridge Trail only about a quarter of a mile or less into the trail. At this junction, keep right for the Rim Overlook Trail and Navajo Knobs Trail."+ 
        "The hike is about 9.5 miles round-trip and consists of almost 2,000 ft of elevation gain. The park lists it as strenuous, but while it is challenging it is very do-able to most people. Just a lot of uphill but the views are worth it. You'll get a great view of the main area of the park, Fruita, and the Castle. ");
        descriptionNewP.text("The midpoint overlook aka Radio Tower spur offers a good break spot halfway up the trail. I recommend stopping here for a bit. Just past this point the trail dips slightly an follows the cliff and provides an amazing continuous view the rest of the way up. While it does follow the cliff line, this is by no means a narrow trail at all. You'll have plenty of trail space."+ 
        "You'll follow this cliff side until you join to what I will call a small canyon. You may have a slight difficulty in following the trail, as one might think you would continue straight; however just go left and continue to follow the cliff side as it bends to the left giving you a full view of the trail you were just on."+ 
        "When you approach the Knobs it can be difficult to find the trail. The trail to the top of the Knob approaches from the northeast and may be a bit of a short scramble.");
        key="canyonlands";
    }

    elevationDiv.append(elevationHigh);
    elevationDiv.append(elevationLow);
    overviewDiv.append(overviewP);
    overviewDiv.append(overviewNewP);
    descriptionDiv.append(descriptionP);
    descriptionDiv.append(descriptionNewP);

    $('#trail').append(trailP);
    $('#elevation').append(elevationDiv);
    $('#dogs').append(dogP);
    $('#overview').append(overviewDiv);
    $('#needToKnow').append(needToKnowP);
    $('#description').append(descriptionDiv);
}

$('#campgrounds').on('click', function(){
    console.log(key);
    window.open('./campgrounds.html?key='+ key,'_self');
  })
  $('#reviews').on('click', function(){
    console.log(key);
    window.open('./reviews.html?key='+ key,'_self');
  })
  $('#paragraphs').on('click', function(){
    console.log(key);
    window.open('./paragraphs.html?key='+ key,'_self');
  })