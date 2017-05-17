$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        verticalCentered: true,
        navigationPosition: 'right',
        navigationTooltips: ['一生唯你心动', '遇見熾熱的愛', 'my Heart系列', 'Forever Love系列', 'Ture Love系列'],
        showActiveTooltips: true,
        afterLoad: function (Link, index) {
            switch (index) {
                case 1:
                    move('.section1 h1').scale(1.3).end();
                    move('.text').set('margin-top', '2%').end();
                    break;
                case 2:
                    move('.section2 hr').scale(3).end();
                  
                    move('.info1').translate(270, 30).end(function () {
                        move('.section2 h1').scale(1.2).end();
                    });
                    break;
                case 3:
                    move('.section3 hr').scale(3).end();
                  
                    move('.info2').set('margin-left', '100px').end();
                    move('.one').rotate(360).end(function () {
                        move('.two').rotate(360).end(function () {
                            move('.three').rotate(360).end(function () {
                                move('.section3 h1').scale(1.2).end();
                            });
                        });
                    });
                    break;
                case 4:
                    move('.section4 hr').scale(3).end();
                    
                    move('.info3').set('margin-left', '100px').end();
                    move('.seven').rotate(360).end(function () {
                        move('.five').rotate(360).end(function () {
                            move('.six').rotate(360).end(function () {
                                move('.section4 h1').scale(1.2).end();
                            });
                        });
                    });
                    break;
                case 5:
                    move('.section5 hr').scale(3).end();
                   
                    move('.info4').set('margin-left', '100px').end();
                    move('.eight').rotate(360).end(function () {
                        move('.nine').rotate(360).end(function () {
                            move('.ten').rotate(360).end(function () {
                                move('.section5 h1').scale(1.2).end();
                            });
                        });
                    });
                    break;
                default:
                    break;
            }
        },/*回调函数，当滚动到某一section时触发一次回调函数*/
        onLeave: function (Link, index) {
            switch (index) {
                case 1:
                    move('.section1 h1').scale(1).end();
                    move('.text').set('margin-top', '0').end();
                    break;
                case 2:
                    move('.section2 hr').scale(1).end();
                   
                    move('.info1').translate(0, 0).end()
                    move('.section2 h1').scale(1).end();

                    break;
                case 3:
                    move('.section3 hr').scale(1).end();
                   
                    move('.info2').set('margin-left', '0').end();
                    move('.one').rotate(-360).end();
                    move('.two').rotate(-360).end();
                    move('.three').rotate(-360).end();
                    move('.section3 h1').scale(1).end();

                    break;
                case 4:
                    move('.section4 hr').scale(1).end();
                   
                    move('.info3').set('margin-left', '0').end();
                    move('.seven').rotate(-360).end();
                    move('.five').rotate(-360).end();
                    move('.six').rotate(-360).end();
                    move('.section4 h1').scale(1).end();

                    break;
                case 5:
                    move('.section5 hr').scale(1).end();
                    
                    move('.info4').set('margin-left', '0').end();
                    move('.eight').rotate(-360).end();
                        move('.nine').rotate(-360).end();
                            move('.ten').rotate(-360).end();
                                move('.section5 h1').scale(1).end();
                       
                    break;
                default:
                    break;
            }
        },


    });

});