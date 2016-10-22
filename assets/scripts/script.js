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

var addLocations = function(){
	locations.push({desc: $('#Desc').val(), location: {lat: $('#Lat').val(), lng: $('#Lon').val()}});
		//{title: "Park Ave", location: {lat: 40.7713024, lng: -73.9632393}},
}

var initMap = function(){
	map = new google.maps.Map(document.getElementById('map'),{
		center:{lat: 50, lng: 0},
		zoom: 6,
		mapTypeControl: false
	});
}