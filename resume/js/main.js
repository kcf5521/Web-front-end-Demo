$(function () {
    $(window).scroll(function () {
        var items = $("#content").find("section");
        var menu = $("#menu");
        var top = $(document).scrollTop();
        // console.log(top);
        var currentId = ""; //滚动条现在所在位置的section id
        items.each(function () {
            var m = $(this);
            //注意：m.offset().top代表每一个section的顶部位置
            if (top > m.offset().top - 300) {
                currentId = "#" + m.attr("id");
            } else {
                return false;
            }
        });

        var currentLink = menu.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            menu.find("[href=" + currentId + "]").addClass("current");
        }

        if (currentId == "#section2") {
            $(".hr2").fadeToggle("1000");

        } else if (currentId == "#section3") {
            $(".hr3").fadeToggle("1000");
        
        } else if (currentId == "#section4") {
            $(".hr4").fadeToggle("1000");
            $(".introduction").slideDown("1000");
        } else if (currentId == "#section5") {
            $(".hr5").fadeToggle("1000");
            $(".panes").fadeIn("1500");
        }
    });
    $(".text").animate({ fontSize: "1.2em", opacity: '1.0' }, 1000);




});
