/******************************************
 *  Author : Joe Dickson   
 *  Created On : Sat Nov 04 2017
 *  File : scripts.js
 *******************************************/

var channelArr = ["freecodecamp", "javascripttt", "test_channel", "ESL_SC2"];

const CLIENT_ID = "yydoedmea2zjqg739jvlfhsfyzjcmd";
var user_id;

$(function() {

    for (i = 0; i < channelArr.length; i++) {
        var html = "";
        $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/users?login=" + channelArr[i],
            headers: {
                "Client-ID": CLIENT_ID,
                "Accept": "application/vnd.twitchtv.v5+json"
            },

            success: function(user_data) {
                user_id = user_data.users[0]._id;
                console.log(user_data);
                html += "<article class='user_row' id='" + user_id + "'>" +
                    "<img src='" + user_data.users[0].logo + "'/>" +
                    user_data.users[0].display_name;
                if (user_data.users[0].bio != null)
                    html += "<span class='bio'>" + user_data.users[0].bio + "</span>";

                $.ajax({

                    type: "GET",
                    url: "https://api.twitch.tv/kraken/streams/" + user_id,
                    headers: {
                        "Client-ID": CLIENT_ID,
                        "Accept": "application/vnd.twitchtv.v5+json"
                    },

                    success: function(channel_data) {
                        console.log(channel_data);
                        // if (channel_data.stream == null)
                        //     $ += "<span class='offline'>Offline</span>";



                    }
                });
                html += "</article>";
                $("#main").html(html);
            }

        });

    }


}); // end document ready