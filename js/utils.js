(function(window){

    var isSvgSupported;

    window.utils = {
        svgSupported : function() {

            if(isSvgSupported === undefined) {

                isSvgSupported = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
            }
            return isSvgSupported;
        }
    }

})(window);