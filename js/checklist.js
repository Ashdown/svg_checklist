(function($, utils){

    //detect checks and update button accordingly

    if (utils.svgSupported()) {

        $('.submit-button').addClass('hidden');

        //grab the house

        //var house = Raphael($('#house')[0]);
//        var circle = house.circle(100,100,100);
//        circle.attr("fill", "#f00");
//        circle.attr("stroke", "#fff");

        var param = {stroke: "#fff", "stroke-width": 30};

        var R = 200;

//        house.customAttributes.arc = function (value, total, R) {
//            var alpha = 360 / total * value,
//                a = (90 - alpha) * Math.PI / 180,
//                x = 300 + R * Math.cos(a),
//                y = 300 - R * Math.sin(a),
//                color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)"),
//                path;
//            if (total == value) {
//                path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
//            } else {
//                path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
//            }
//            return {path: path, stroke: color};
//        };

        //var sec = house.path().attr(param).attr({arc: [30, 60, R]});


        //convert svg to raphael
        //http://www.readysetraphael.com/
        //http://parall.ax/blog/view/2985/tutorial-creating-an-interactive-svg-map

        //load svg

        //http://raphaeljs.com/reference.html#Raphael


    } else {

        $('.numbered-radio-container').click(function(event) {
            if ($(event.currentTarget) !== $('.numbered-radio-container.selected')) {
                $('.numbered-radio-container.selected').removeClass('selected');
                $(event.currentTarget).addClass('selected');
            }

        });

        $('.nothing-radio-container').click(function() {
            $('.numbered-radio-container.selected').removeClass('selected');
        });
    }


})(jQuery, window.utils);