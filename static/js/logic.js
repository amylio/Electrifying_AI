// Add console.log to check to see if our code is working.
console.log("working");


// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [-20.523413, -67.376815],
	zoom: 13,
	layers: [satelliteStreets]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};

// 1. Add a 2nd layer group for the tectonic plate data.
let tectonicplates = new L.layerGroup();
let global = new L.layerGroup();
// let myTriangle = new L.LayerGroup();


// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "U.S. lithium Mines": tectonicplates,
  "Global Lithium Mines": global,
  // "The Lithium Triangle": myTriangle
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// // Retrieve the earthquake GeoJSON data.
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {

//   // This function returns the style data for each of the earthquakes we plot on
//   // the map. We pass the magnitude of the earthquake into two separate functions
//   // to calculate the color and radius.
//   function styleInfo(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: getColor(feature.properties.mag),
//       color: "#000000",
//       radius: getRadius(feature.properties.mag),
//       stroke: true,
//       weight: 0.5
//     };
//   }

//   // This function determines the color of the marker based on the magnitude of the earthquake.
//   function getColor(magnitude) {
//     if (magnitude > 5) {
//       return "#ea2c2c";
//     }
//     if (magnitude > 4) {
//       return "#ea822c";
//     }
//     if (magnitude > 3) {
//       return "#ee9c00";
//     }
//     if (magnitude > 2) {
//       return "#eecc00";
//     }
//     if (magnitude > 1) {
//       return "#d4ee00";
//     }
//     return "#98ee00";
//   }

//   // This function determines the radius of the earthquake marker based on its magnitude.
//   // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
//   function getRadius(magnitude) {
//     if (magnitude === 0) {
//       return 1;
//     }
//     return magnitude * 4;
//   }

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     	// We turn each feature into a circleMarker on the map.
//     	pointToLayer: function(feature, latlng) {
//       		console.log(data);
//       		return L.circleMarker(latlng);
//         },
//       // We set the style for each circleMarker using our styleInfo function.
//     style: styleInfo,
//      // We create a popup for each circleMarker to display the magnitude and location of the earthquake
//      //  after the marker has been created and styled.
//      onEachFeature: function(feature, layer) {
//       layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Date: " + feature.properties.time);
//     }
//   }).addTo(allEarthquakes);

//   // Then we add the earthquake layer to our map.
//   allEarthquakes.addTo(map);

//   // Here we create a legend control object.
// let legend = L.control({
//   position: "bottomright"
// });

// // Then add all the details for the legend
// legend.onAdd = function() {
//   let div = L.DomUtil.create("div", "info legend");

//   const magnitudes = [0, 1, 2, 3, 4, 5];
//   const colors = [
//     "#98ee00",
//     "#d4ee00",
//     "#eecc00",
//     "#ee9c00",
//     "#ea822c",
//     "#ea2c2c"
//   ];
// div.innerHTML = 'Eathquake<br>Magnitude<br><hr>'
// // Looping through our intervals to generate a label with a colored square for each interval.
//   for (var i = 0; i < magnitudes.length; i++) {
//     console.log(colors[i]);
//     div.innerHTML +=
//       "<i style='background: " + colors[i] + "'></i> " +
//       magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
//     }
//     return div;
//   };

//   // Finally, we our legend to the map.
//   legend.addTo(map);


  // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
  d3.json("https://raw.githubusercontent.com/RussellShelley/Energy_Analysis/main/Data/lithium/US_mines.json")
  .then(function(plates){
      console.log(plates);
    L.geoJson(plates, {
      color: "brown",
      weight: 10,
      onEachFeature: function(features, layer) {
        layer.bindPopup("Lithium Mine in : " + features.properties.County + ", " + features.properties.State);
      }
    })
    .addTo(tectonicplates);

      // Then we add the earthquake layer to our map.
  tectonicplates.addTo(map);
  });

    // // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
    // d3.json("https://raw.githubusercontent.com/RussellShelley/Energy_Analysis/main/Data/lithium/critical_mins.json")
    // .then(function(zone){
    //     console.log(zone);
    //   L.geoJson(zone, {
    //     color: "yellow",
    //     weight: 10,
    //     onEachFeature: function(features, layer) {
    //       layer.bindPopup("Deposit Name: " + features.properties.DEPOSIT_NA + "<br>Primary Critical Mineral: " + features.properties.CRITICAL_M + "<br>Location: " + features.properties.LOCATION);
    //     }
    //   })
    //   .addTo(zones);
  
    //     // Then we add the earthquake layer to our map.
    // zones.addTo(map);
    // });

    // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
    d3.json("https://raw.githubusercontent.com/RussellShelley/Energy_Analysis/main/Data/lithium/global_lithiumjson.json")
    .then(function(globe){
        console.log(globe);
      L.geoJson(globe, {
        color: "yellow",
        weight: 10,
        onEachFeature: function(features, layer) {
          layer.bindPopup("Deposit Name: " + features.properties.DEPOSIT_NA + "<br>Primary Critical Mineral: " + features.properties.CRITICAL_M + "<br>Location: " + features.properties.LOC_DETAIL + ", " + features.properties.LOCATION);
        }
      })
      .addTo(global);
  
        // Then we add the earthquake layer to our map.
    global.addTo(map);
  });
    d3.json("https://raw.githubusercontent.com/RussellShelley/Energy_Analysis/r_verhofste/Data/lithium/Lithium_Triangle.json")
    .then(function(li_triangle){
        console.log(li_triangle);
      L.geoJson(li_triangle, {
        color: "yellow",
        weight: 10,
        onEachFeature: function(features, layer) {
          layer.bindPopup(features.attributes.descr);
        }
      })
      .addTo(triangle);
  
        // Then we add the earthquake layer to our map.
    triangle.addTo(map);
  
    });

    // var marker = L.marker([-20.561884, -67.377676])
    //   .addTo(map)
    //   .bindPopup("<h1> Bolivian Salt Miners Shovel Lithium Salts </h1> <p> 60% of global lithium reserves are located in the salt flats of the 'Lithium Triangle' which spans portions of Bolivia, Chile, and Argentina. Here, you're looking at salt miners shoveling lithium-rich salt in the Salar de Uyuni mine in Altiplano, Bolivia. Zoom out to explore this salt flat and the others in the region.  </p> <img src='./Images/Lithium_1.jpg' />")
    //   .maxWidth(2000)
    //   .minWidth(1000)

      var marker = L.popup()
      .setLatLng([-20.561884, -67.377676])
      .setContent("<h4> Bolivian Salt Miners Shovel Lithium Salts </h4> <h5> 60% of global lithium reserves are located in the salt flats of the 'Lithium Triangle' which spans portions of Bolivia, Chile, and Argentina. Here, you're looking at salt miners shoveling lithium-rich salt in the Salar de Uyuni mine in Altiplano, Bolivia. </h5> <p> Zoom out to explore this salt flat and the others in the region.  </p> <img src='https://github.com/RussellShelley/Energy_Analysis/blob/main/Visualization/WebMockup/images/Lithium_1.jpg?raw=true', />")
      .openOn(map)
      .maxWidth(10000)
      .minWidth(200);
      
      var myTriangle = L.polygon([[-25.581712, -65.920559], [-23.215772, -70.561488], [-18.576316, -66.032667]], {color: "blue", weight: 8, fillColor: "blue", fillOpacity: 1});
      var buttons = document.getElementsByName("geometry");
		
      function paintGeometry(event) {
  
        var geometry = event.target.value;
  
        if (geometry === "myTriangle") {
          myTriangle.addTo(map);
        }
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("change", paintGeometry);
        }}

        