const show = x => console.log(x);

$(document).ready((function() {
        $(".quote").hide();

        //rndNum = Math.floor(Math.random() * quotes.length);
        //console.log(quotes[rndNum].quoteText);


        $.getJSON("quotes.json").done(function(data) {
            var items = [];
            $.each(data, function(key, val) {
                var strAuth = data[key].quoteAuthor;
                var strQuote = data[key].quoteText;
                show(strQuote + ": " + strAuth);
                //items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
        });



        //{quoteText: "You can't stop the waves, but you can learn to surf.", quoteAuthor: "Jon Kabat-Zinn"}


        // $(".btn-primary").click(function() {
        //     $.getJSON(quotes).done(function(data) {
        //         for (var key in data) {
        //             if (data.hasOwnProperty(key)) {
        //                 var val = data[key];
        //                 console.log(val);
        //             }
        //         }
        //     });
        // });

    })) // end document ready