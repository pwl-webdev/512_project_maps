$(document).ready(function(){
	$("#gmaps_link").attr("src",`https://maps.googleapis.com/maps/api/js?libraries=drawing,geometry&key=${config.GMAPS_API_KEY}&v=3&callback=initMap`);
	console.log("ready");
	$('#POIButton').click(function(event){
		event.preventDefault();
		console.log("Lon: "+$('#Lon').val()+" Lat "+$('#Lat').val() + " Desc "+$('#Desc').val());

		if($.isNumeric($('#Lon').val()) && $.isNumeric($('#Lon').val())){
			if($('#Lon').val() >= -180 && $('#Lon').val() <= 180 && $('#Lat').val() >= -90 && $('#Lat').val() <= 90){
				addLocation();
			} else{
				alert("Longitude is <-180;180> Latitude is <-90;90>");
			}
		} else {
			alert("Use numbers for Longitude and Latitude");
		}
		$("#Lon").val("");
		$("#Lat").val("");
		$("#Desc").val("");
	});
});
var map;
var locations = [];
var InfoWindow;
var markers = [];
var bounds;

var addLocation = function(){
	locations.push({title: $('#Desc').val(), location: {lat: parseFloat($('#Lat').val()), lng: parseFloat($('#Lon').val())}});
		//{title: "Park Ave", location: {lat: 40.7713024, lng: -73.9632393}},
	var position = locations[locations.length-1].location;
	var title = locations[locations.length-1].title;
	var marker = new google.maps.Marker({
		map: map,
		position: position,
		title: title,
		animation: google.maps.Animation.DROP,
		id: locations.length-1
	});
	markers.push(marker);
	marker.addListener('click',function(){
		populateInfoWindow(this, InfoWindow);
	});
	bounds.extend(markers[markers.length-1].position);
	map.setCenter(position);
}

var populateInfoWindow = function(marker, infowindow) {
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          infowindow.addListener('closeclick',function(){
            infowindow.setMarker(null);
        });
    }
}


var initMap = function(){
	map = new google.maps.Map(document.getElementById('map'),{
		center:{lat: 50, lng: 0},
		zoom: 2,
		mapTypeControl: false
	});
	InfoWindow = new google.maps.InfoWindow();
	bounds = new google.maps.LatLngBounds()
}