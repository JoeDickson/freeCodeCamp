const show = x => console.log(x);

$(document).ready((function() {
        $(".quote").hide();

        $(".btn-primary").click(function() {
            $.getJSON("https://codepen.io/dicksonjoe/pen/VrwKRe.html").done(function(data) {
                rndNum = Math.floor(Math.random() * data.length);
                var strAuth = data[rndNum].quoteAuthor;
                var strQuote = data[rndNum].quoteText;
                var html = "";
                html += strQuote;
                if (!strAuth.length)
                    strAuth = "No Author Credited.";
                html += "<br />" + strAuth;

                $(".quote").html("<em>" + strQuote + "</em>" + "<br /><center>" + strAuth + "</center> ");
                $(".quote").show();
            })
        })


    })) // end document ready