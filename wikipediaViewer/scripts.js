/******************************************
 *  Author : Joe Dickson   
 *  Created On : Wed Nov 01 2017
 *  File : scripts.js
 *******************************************/


$(function() {


    function getExtract(title, id) {
        title = title.replace(' ', '_');

        $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exchars=200&titles=' + title + '&callback=?', function(result) {
            $.each(result.query.pages, function(j, myval) {
                console.log(myval.pageid);
                $("#" + id).html(myval.extract);
                //return myval.extract;
            });
        });
    };


    $(".close-icon").on('click', function() {
        $(".results").css('visibility', 'hidden');
    })

    $('#wikiForm').on('submit', function(e) {
        e.preventDefault();
        myStr = this.searchText.value;
        $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=extract&exchars=170&gsrsearch=' + myStr + '&callback=?', function(data) {

            $(data.query.pages).each(function(i, val) {


                var html = "<ul>";
                $.each(val, function(key, val) {
                    console.log(val);
                    var url = "<a href='http://wikipedia.org/wiki/" + val.title + "' target='_blank'>";
                    html += "<li>" + url + val.title + "</a>";
                    html += "<p id='" + val.pageid + "'></p>"
                    html += "</li>";
                    getExtract(val.title, val.pageid);
                });
                html += "</ul>";
                $(".wrapper").css('height', 'auto');
                $(".results").css('visibility', 'visible');
                $(".results").html(html);

            });
        });
    });
});