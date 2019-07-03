

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('key'); 
    console.log(myParam);

    
   var displayInfoImg=$('<img>');
   
    if(myParam==="zion"){
      displayInfoImg.attr('src',"./assets/images/zion.jpg");
    $('#displayImageInfo').append(displayInfoImg);

    $('#header').append("Welcome to Zion National Park");

    $('#firstLine').append("Zion National Park is an American national park located in southwestern Utah near the town of Springdale. A prominent feature of the 229-square-mile (590 km2) park is Zion Canyon, which is 15 miles (24 km) long and up to 2,640 ft (800 m) deep. The canyon walls are reddish and tan-colored Navajo Sandstone eroded by the North Fork of the Virgin River. The lowest point in the park is 3,666 ft (1,117 m) at Coalpits Wash and the highest peak is 8,726 ft (2,660 m) at Horse Ranch Mountain. Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert regions, the park has a unique geography and a variety of life zones that allow for unusual plant and animal diversity. Numerous plant species as well as 289 species of birds, 75 mammals (including 19 species of bat), and 32 reptiles inhabit the park's four life zones: desert, riparian, woodland, and coniferous forest. Zion National Park includes mountains, canyons, buttes, mesas, monoliths, rivers, slot canyons, and natural arches");

    $('#activities').append("Guided horseback riding trips, nature walks, and evening programs are available from late March to early November. The Junior Ranger Program for ages 6 to 12 is active from Memorial Day to Labor Day at the Zion Nature Center. Rangers at the visitor centers in Zion Canyon and Kolob Canyons can help visitors plan their stay. A bookstore attached to the Zion Canyon visitor center offers books, maps, and souvenirs. The Grotto in Zion Canyon, the visitor center, and the viewpoint at the end of Kolob Canyons Road have the only designated picnic sites.");

    $('#parkFees').append("Weekly passes are non-transferable and are valid for 7 consecutive days including the date of purchase. Weekly passes may be upgraded to annual passes within 7 days of purchase. Private Vehicle: $35. Valid for 7 days Admits private, non-commercial vehicle (15 passenger capacity or less) and all occupants to Zion National Park, including both the Zion Canyon and Kolob Canyon areas. Motorcycle: $30. Valid for 7 days. Admits one non-commercial motorcycle to Zion National Park, including both the Zion Canyon and Kolob Canyon areas.Per Person: $20. Valid for 7 days. Admits one individual with no car to Zion National Park, including both the Zion Canyon and Kolob Canyon areas. Typically used for bicyclists, hikers and pedestrians. Youth 15 and under are admitted free. Non-Commercial Organized Groups: Valid for 7 days. Organized groups such as Scouts, Rotary, Clubs, Youth Groups, Churches, Reunions, etc. that do not qualify for an Academic Fee Waiver are charged as follows: $35.00 Non-commercial vehicles with a vehicle capacity of 15 or less. $20.00 per person Non-commercial vehicles with a capacity of 16 or greater. Fees will not exceed the commercial fee for the same-sized vehicle. Youth 15 and under are free. Individuals or families with any valid Annual or Lifetime pass may use their pass for entry at the per person rate. Pass and photo ID must be present upon entry.");   
  
  }
  else if(myParam==='bryce'){

    displayInfoImg.attr('src',"./assets/images/bryce.jpg");
    $('#displayImageInfo').append(displayInfoImg);

    $('#header').append("Welcome to Bryce National Park");

    $('#firstLine').append("Bryce Canyon National Park (/braɪs/) is an American national park located in southwestern Utah. The major feature of the park is Bryce Canyon, which despite its name, is not a canyon, but a collection of giant natural amphitheaters along the eastern side of the Paunsaugunt Plateau. Bryce is distinctive due to geological structures called hoodoos, formed by frost weathering and stream erosion of the river and lake bed sedimentary rocks. The red, orange, and white colors of the rocks provide spectacular views for park visitors. Bryce Canyon National Park is much smaller, and sits at a much higher elevation than nearby Zion National Park. The rim at Bryce varies from 8,000 to 9,000 feet (2,400 to 2,700 m).");

    $('#activities').append("Most park visitors sightsee using the scenic drive, which provides access to 13 viewpoints over the amphitheaters. Bryce Canyon has eight marked and maintained hiking trails that can be hiked in less than a day (round trip time, trailhead):[25] Mossy Cave (one hour, State Route 12 northwest of Tropic), Rim Trail (5–6 hours, anywhere on rim), Bristlecone Loop (one hour, Rainbow Point), and Queens Garden (1–2 hours, Sunrise Point) are easy to moderate hikes. Navajo Loop (1–2 hours, Sunset Point) and Tower Bridge (2–3 hours, north of Sunrise Point) are moderate hikes. Fairyland Loop (4–5 hours, Fairyland Point) and Peekaboo Loop (3–4 hours, Bryce Point) are strenuous hikes. Several of these trails intersect, allowing hikers to combine routes for more challenging hikes.The park also has two trails designated for overnight hiking: the 9-mile (14 km) Riggs Spring Loop Trail and the 23-mile (37 km) Under-the-Rim Trail.[26] Both require a backcountry camping permit. In total there are 50 miles (80 km) of trails in the park. Horseriders on a dirt trail going toward pillars of pink rock Horseback riders in the park More than 10 miles (16 km) of marked but ungroomed skiing trails are available off of Fairyland, Paria, and Rim trails in the park. Twenty miles (32 km) of connecting groomed ski trails are in nearby Dixie National Forest and Ruby's Inn. The air in the area is so clear that on most days from Yovimpa and Rainbow points, Navajo Mountain and the Kaibab Plateau can be seen 90 miles (140 km) away in Arizona.[27] On extremely clear days, the Black Mesas of eastern Arizona and western New Mexico can be seen some 160 miles (260 km) away.[27] The park also has a 7.4 magnitude night sky, making it one of the darkest in North America.[28] Stargazers can, therefore, see 7,500 stars with the naked eye, while in most places fewer than 2,000 can be seen due to light pollution, and in many large cities only a few dozen can be seen. Park rangers host public stargazing events and evening programs on astronomy, nocturnal animals, and night sky protection. The Bryce Canyon Astronomy Festival, typically held in June, attracts thousands of visitors. In honor of this astronomy festival, Asteroid 49272 was named after the national park.[29] There are two campgrounds in the park, North Campground and Sunset Campground. Loop A in North Campground is open year-round. Additional loops and Sunset Campground are open from late spring to early autumn. The 114-room Bryce Canyon Lodge is another way to stay overnight in the park.");

    $('#parkFees').append("The entrance fee to Bryce Canyon National Park is $35 per private vehicle. The fee for non-commercial individuals entering by foot or bicycle is $20 per person. Motorcycle entrance is $30 per motorcycle. Additional information regarding fees at Bryce Canyon, including information about commercial .");   

 }
else if(myParam==='capitolreef'){

  displayInfoImg.attr('src',"./assets/images/capitolreef.jpg");
    $('#displayImageInfo').append(displayInfoImg);

  $('#header').append("Welcome to Capitol Reef National Park");

  $('#firstLine').append("Capitol Reef National Park is an American national park in south-central Utah. The park is approximately 60 miles (97 km) long on its north–south axis and just 6 miles (9.7 km) wide on average. The park was established in 1971 to preserve 241,904 acres (377.98 sq mi; 97,895.08 ha; 978.95 km2) of desert landscape and is open all year, with May through September being the highest visitation months.Partially in Wayne County, Utah, the area was originally named Wayne Wonderland in the 1920s by local boosters Ephraim P. Pectol and Joseph S. Hickman.[3] Capitol Reef National Park was designated a national monument on August 2, 1937, by President Franklin D. Roosevelt to protect the area's colorful canyons, ridges, buttes, and monoliths; however, it was not until 1950 that the area officially opened to the public.[3] Road access was improved in 1962 with the construction of State Route 24 through the Fremont River Canyon.");

  $('#activities').append("Activities in the park include hiking, horseback riding, and driving tours. Mountain biking is prohibited on park trails but allowed on roadways. The orchards planted by Mormon pioneers are maintained by the National Park Service. From early March to mid-October, various fruit—cherries, apricots, peaches, pears, or apples—can be harvested by visitors for a fee.  ");

  $('#parkFees').append("Capitol Reef Entrance fee - Private Vehicle - $20.00 The entrance fee for Capitol Reef National Park is paid into a self-serve tube at the beginning of the Scenic Drive, just past the campground. The cost includes all in a private vehicle. Capitol Reef Entrance fee - Motorcycle - $15.00 The entrance fee for Capitol Reef National Park is paid into a self-serve tube at the beginning of the Scenic Drive, just past the campground. The cost includes all in a private vehicle. Capitol Reef Entrance Fee - Bicycle and Pedestrian - $10.00 The entrance fee for Capitol Reef National Park is paid into a self-serve tube at the beginning of the Scenic Drive, just past the campground. America the Beautiful Interagency passes cover this entrance fee.");  

}
else if(myParam==='canyonlands'){

  displayInfoImg.attr('src',"./assets/images/canyonlands.jpg");
    $('#displayImageInfo').append(displayInfoImg);

  $('#header').append("Welcome to Canyonlands National Park");

  $('#firstLine').append("Canyonlands National Park is an American national park located in southeastern Utah near the town of Moab. The park preserves a colorful landscape eroded into numerous canyons, mesas, and buttes by the Colorado River, the Green River, and their respective tributaries. Legislation creating the park was signed into law by President Lyndon Johnson on September 12, 1964. The park is divided into four districts: the Island in the Sky, the Needles, the Maze, and the combined rivers—the Green and Colorado—which carved two large canyons into the Colorado Plateau. While these areas share a primitive desert atmosphere, each retains its own character.[5] Author Edward Abbey, a frequent visitor, described the Canyonlands as the most weird, wonderful, magical place on earth—there is nothing else like it anywhere.");

  $('#activities').append("Canyonlands is a popular recreational destination. Since 2007, more than 400,000 people have visited the park each year with a record of 776,218 visitors in 2016, representing a 22 percent increase from the prior year. The geography of the park is well suited to a number of different recreational uses. Hikers, mountain bikers, backpackers, and four-wheelers all enjoy traveling the rugged, remote trails within the Park. The White Rim Road traverses the White Rim Sandstone level of the park between the rivers and the Island in the Sky. Since 2015, day-use permits must be obtained before travelling on the White Rim Road due to the increasing popularity of driving and bicycling along it. The park service's intent is to provide a better wilderness experience for all visitors while minimizing impacts on the natural surroundings. The Island in the Sky mesa from the Needles district, As of 2016, the Island in the Sky district, with its proximity to the Moab, Utah area, attracts 76.7 percent of total park visitors. The Needles district is the second most visited, drawing 20.7 percent of visitors. The remote Maze district accounts for only about 1.5 percent of visitors, while river rafters and other river users account for the remaining 1.1 percent of total park visitation. Rafters and kayakers float the calm stretches of the Green River and Colorado River above the Confluence. Below the Confluence, Cataract Canyon contains powerful whitewater rapids, similar to those found in the Grand Canyon. However, since there is no large impoundment on the Colorado River above Canyonlands National Park, river flow through the Confluence is determined by snowmelt, not management. As a result, and in combination with Cataract Canyon's unique graben geology, this stretch of river offers the largest whitewater in North America in heavy snow years. Political compromise at the time of the park's creation limited the protected area to an arbitrary portion of the Canyonlands basin. Conservationists hope to complete the park by bringing the boundaries up to the high sandstone rims that form the natural border of the Canyonlands landscape..");

  $('#parkFees').append("Private Vehicle - $30.00 Admits one private, non-commercial vehicle (15 passenger capacity or less) and all its occupants. Motorcycle - $25.00 Admits a private, non-commercial motorcycle and its riders. Per Person - $15.00 Admits one individual with no car. Typically used for bicyclists, hikers, and pedestrians. Youth 15 and under are admitted free..");

}
else if(myParam==='arches'){

  displayInfoImg.attr('src',"./assets/images/arches.jpg");
    $('#displayImageInfo').append(displayInfoImg);

  $('#header').append("Welcome to Arches National Park");

  $('#firstLine').append("Arches National Park is a national park in eastern Utah, United States. The park is adjacent to the Colorado River, 4 miles (6 km) north of Moab, Utah. More than 2,000 natural sandstone arches are located in the park, including the well-known Delicate Arch, as well as a variety of unique geological resources and formations. The park contains the highest density of natural arches in the world. The park consists of 76,679 acres (119.811 sq mi; 31,031 ha; 310.31 km2) of high desert located on the Colorado Plateau. The highest elevation in the park is 5,653 feet (1,723 m) at Elephant Butte, and the lowest elevation is 4,085 feet (1,245 m) at the visitor center. The park receives an average of less than 10 inches (250 mm) of rain annually. Administered by the National Park Service, the area was originally named a national monument on April 12, 1929, and was redesignated as a national park on November 12, 1971. The park received more than 1.6 million visitors in 2018.");

  $('#activities').append("Climbing Balanced Rock or any named or unnamed arch in Arches National Park with an opening of more than 3 feet is banned by park regulations. Climbing on other features in the park is allowed, but regulated; in addition, slacklining and BASE jumping are banned parkwide. Climbing on named arches within the park had long been banned by park regulations, but following Dean Potter's successful free climb on Delicate Arch in May 2006, the wording of the regulations was deemed unenforceable by the park attorney. In response, the park revised its regulations later that month, eventually imposing the current ban on arch climbing in 2014. Approved recreational activities include auto touring, backpacking, biking, camping, and hiking, some of which require permits. Guided commercial tours and ranger programs are also available. Astronomy is also popular in the park due to its dark skies, despite the increasing light pollution from towns such as Moab.");

  $('#parkFees').append("Private Vehicle Fee - $30.00 Admits one private, non-commercial vehicle (15 passenger capacity or less) and all its occupants. Motorcycle Fee - $25.00 Admits a private, non-commercial motorcycle and its riders. Per Person - $15.00 Admits one individual with no car. Typically used for bicyclists, hikers, and pedestrians. Youth 15 and under are admitted free."); 
}

$('#trails').on('click', function(){
  console.log(myParam);
  window.open('./trails.html?key='+ myParam,'_self');
})
$('#campgrounds').on('click', function(){
  console.log(myParam);
  window.open('./campgrounds.html?key='+ myParam,'_self');
})
$('#reviews').on('click', function(){
  console.log(myParam);
  window.open('./reviews.html?key='+ myParam,'_self');
})


