/* global $ */
var setMagic8BallSize = function(doc, outside, inside) {
    var size = Math.min(doc.width(), doc.height()) * 0.9;
    var topMargin = (doc.height() - size  - $('header').height())/2;
    outside.width(size).height(size).css('margin-top' , topMargin);
    size = size / 2;
    inside.width(size).height(size);
};
var magic8BallAns = function() {
    ansList = ["It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];

    return {
        getAns: function() {
            return ansList[(Math.floor(Math.random() * ansList.length))];
        }
    };
};

var doc, outside, inside, text;
doc = $(document);

doc.ready(function() {
    outside = $('.outside');
    inside = $('.inside');
    text = $('#text');
    setMagic8BallSize(doc, outside, inside);
});
$(window).resize(function() {
    setMagic8BallSize(doc, outside, inside);
});

doc.click(function() {
    var ans = magic8BallAns().getAns();
    text.fadeOut(400, function() {
        text.html(ans);
        text.fadeIn(400);
    });
});
