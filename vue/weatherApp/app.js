new Vue({

    el: '#weather',

    data: {

        title: 'Weather',

        currentLocation: [
            {
                currentLocationLat: null,
                currentLocationLon: null,
                currentLocation: null,
            }
        ]
    },

    method: {
        getLocation: function () {
            var Key = '53f9d8e4213222cf517d86dc406d67fc';
            $.getJSON('api.openweathermap.org/data/2.5/weather?', function (e) {
                long = e.position.coords.longitude;
                lat = e.position.coords.latitude;
                console.log(this.currentLocation);
            })
        }
    },
    ready() {
        if ('geolocation' in navigator) {
            var gl = navigator.geolocation
            //get long and lat coordinates
            gl.getCurrentPosition(function (position) {
                this.currentLocation = position.coords
                this.currentLocationLon = position.coords.longitude
                this.currentLocationLat = position.coords.latitude
                //logs longitude and altitude to console
                console.log(this.currentLocation)
                
            }.bind(this));
        } else {
            console.log("I donno the location");
        } // bind to `this` so it's the current component.
    }

})

