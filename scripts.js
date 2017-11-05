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
                html += "<article class='user_row' id='_" + user_id + "'>" +
                    "<img src='" + user_data.users[0].logo + "'/>" +
                    "<span class='display_name'><a href='http://www.twitch.tv/" + user_data.users[0].display_name + "' target='_blank'>" +
                    user_data.users[0].display_name + "</a></span>" +
                    "<span class='status' id='" + user_id + "'>Online</span>" +
                    "<span class='status_descr' id='status_descr" + user_id + "'></span>";
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
                        console.log(channel_data.stream);
                        if (channel_data.stream == null) {
                            $("#" + user_data.users[0]._id).html("Offline");
                            $("#_" + user_data.users[0]._id).css("background", "#d5c7c7");
                        } else {
                            $("#" + user_data.users[0]._id).css("color", "green");
                            $("#status_descr" + user_data.users[0]._id).html("<br>" + channel_data.stream.channel.status + "<br>");

                        }

                    }
                });
                html += "</article>";
                $("#main").html(html);
            }

        });

    }



}); // end document ready