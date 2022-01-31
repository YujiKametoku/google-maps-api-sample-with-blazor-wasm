let map;
let marker;

function load(id, lat, lng, zoom, markerLat, markerLng) {
    var mapElement = document.getElementById(id);
    if (mapElement == null) {
        return;
    }

    var mapLatLng = new google.maps.LatLng(lat, lng);
    var options = {
        zoom: zoom,
        center: mapLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(mapElement, options);

    var markerLatLng = new google.maps.LatLng(markerLat, markerLng);
    marker = new google.maps.Marker({
        position: markerLatLng,
        map: map
    });

    google.maps.event.addListener(map, 'click', mapClickEvent);
}

function mapClickEvent(event) {
    marker.setMap(null);
    map.setCenter(event.latLng);
    marker = new google.maps.Marker({
        position: event.latLng,
        map: map
    });
}

function getMapInfo() {
    return {
        "Zoom": map.getZoom(),
        "Lat": map.getCenter().lat(),
        "Lng": map.getCenter().lng(),
        "MarkerLat": marker.getPosition().lat(),
        "MarkerLng": marker.getPosition().lng()
    };
}