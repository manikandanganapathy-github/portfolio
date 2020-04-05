var wt, journey = "My journey as a developer started at the age of 18 during my bachelors, where my passion for development started. This has helped me to widen the knowledge and explored through various disciplines such as front-end development, mobile development, videography, and many more. ",
    work = "My work is something I do with lot of passion, honesty and commitment. Over the past years I had the opportunity to drive and do hands-on work for some amazing mobile and web projects.",
    achievement = "As part of achievement, I have been awarded as a Stellar performer by Virtusa Software Services. At my university & high school, I have been given many awards for an outstanding contribution in various disciplines.",
    now = "I’m working as an " + degn + " at " + org + ". In my spare time you’ll find me exploring new tech gadgets, music, books, and I do game at my Xbox One. I love new adventures, meeting new people and mostly love playing outdoor games.",
    writing= "<b><a href='" + medium + "' target='_blank'>Medium, </a></b><b><a href='" + blogger + "' target='_blank'>Blogger.</a></b>",
    reachout = "Feel free to reach out at <b><a href=mailto:" + mail + ">Mailbox</a></b> or follow me on <b><a href='" + fb + "' target='_blank'>Facebook</a></b>,<b> <a href='" + tweet + "' target='_blank'> Twitter</a></b>, <b><a href='" + inst + "' target='_blank'>Instagram.</a></b>",
    about = ["<h2>" + welcome + "</h2>", "<h3>Journey</h3><p id='journey'>" + journey + "</p>", "<h3>Work</h3><p id='work'>" + work + "</p>", "<h3>Achievement</h3><p id='achievement'>" + achievement + "</p>", "<h3>Now,</h3><p id='now'>" + now + "</p>","<h3>I'm writing in</h3><p id='read'>" + writing + "</p>", "<p id='reachout'>" + reachout + "</p>", "<hr><p id='footer'>&copy; Manikandan Ganapathy <span id='cYear'></span></p>"],
    d = new Date,
    h = d.getHours(),
    careerExp = d.getFullYear() - 2015,
    t1 = "Good",
    content = '<h1><div class="text"><div id="textHolder01" class="text-holder"></div></div><div class="text"><div id="textHolder02" class="text-holder"></div></div></h1>',
    container = '<div class="content"><div id="mode"></div></div><div class="about"><div id="heroFigure"><img src="./asset/img/hero-w.png" id="heroAvatar"></div></div>',modeON=0;
switch ($("body").append(container), $(".content").append(content), $(".about").addClass("animate"), $.each(about, function(e, t) {
    $(".about").append(t)
}), $(".careerExp").text(careerExp), $("#cYear").html(d.getFullYear()), !0) {
    case h >= 0 && h <= 6 || h >= 20 && h <= 23:
        wt = "Hi!";
        darkMode();
        break;
    case h > 6 && h < 12:
        wt = t1 + " Morning!";
        break;
    case h >= 12 && h <= 16:
        wt = t1 + " Afternoon!";
        break;
    case h > 16 && h <= 19:
        wt = t1 + " Evening!"
}
$("#textHolder01").text("Hey,").addClass("animate delay02"), $("#textHolder02").text(wt).addClass("animate delay01"), setTimeout(function() {
    $(".text-holder").removeClass("animate delay02"), setTimeout(function() {
        $("#textHolder01").text("Nice to meet you!").addClass("animate delay02"), $("#textHolder02").text("").addClass("animate delay01"), setTimeout(function() {
            $(".text-holder").removeClass("animate delay02"), setTimeout(function() {
                $("#textHolder01").text("I'm Manikandan").addClass("animate delay02"), $("#textHolder02").text("Ganapathy").addClass("animate delay01"), setTimeout(function() {
                    $("html").animate({
                        scrollTop: 600
                    }, 3e3)
                    if(modeON==1){
                        var x = document.getElementById("mode");
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
                    }
                }, 2e3)
            }, 1e3)
        }, 1e3)
    }, 1e3)
}, 1e3);

function darkMode() {
    $("p,h1,h2,h3,body,div,a").css({ "background-color": "black", "color": "white" });
    $("#heroAvatar").attr("src", "./asset/img/hero-b.png");
    $("#mode").html("Dark mode on.");
    modeON=1;
}

