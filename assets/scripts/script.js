$(document).ready(function(){
	$("#gmaps_link").attr("src",`https://maps.googleapis.com/maps/api/js?libraries=drawing,geometry&key=${config.GMAPS_API_KEY}&v=3&callback=initMap`);
	console.log("ready");
});
var map;


var initMap = function(){
	map = new google.maps.Map(document.getElementById('map'),{
		center:{lat: 40.7413549, lng: -73.9980244},
		zoom: 13,
		mapTypeControl: false
	});
}