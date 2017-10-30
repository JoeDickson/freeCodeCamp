/******************************************
 *  Author : Joe Dickson
 *  Created On : Sun Oct 29 2017
 *  File : localWeather.js
 *******************************************/

$(document).ready((function() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
        }

        function successFunction(position) {
            var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
            var WEATHER = 'https://fcc-weather-api.glitch.me/api/current?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;

            $.getJSON(GEOCODING).done(function(location) {
                $(".location").html(location.results[1].address_components[2].long_name + ", " + location.results[1].address_components[4].short_name);
            })

            $.getJSON(WEATHER).done(function(weather) {
                var tempC = weather.main.temp;
                var tempF = tempC * 9 / 5 + 32;
                $(".weather").html(weather.weather[0].main + "<img height='40px' width='100px' src=" + weather.weather[0].icon + ">");
            })

        }

        function errorFunction() {
            // error haandler
        }





    })) // end document ready