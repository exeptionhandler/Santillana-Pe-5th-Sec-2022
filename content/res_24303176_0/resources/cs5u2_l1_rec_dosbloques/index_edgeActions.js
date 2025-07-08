/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$('contenedor').html('<iframe width="1280" height="800" frameborder="0" scrolling="no" src="assets/index.html"></iframe>')
         
              //Set origin on the upper left corner.
              $('#Stage').css({
                      '-moz-transform-origin': '0px 0px 0px',
                      'transform-origin': '0px 0px 0px',
                      '-ms-transform-origin': '0px 0px 0px',
                      '-webkit-transform-origin': '0px 0px 0px',
                      'margin-left': '0px'
              });

              // Scale ratio.
              var ratio = 1;

              //Stage dimensions puede ser 1280x800 o 1024x768.
              var sw = 1280;
              var sh = 800;

              //Get the Stage Aspect.
              var aspect = sw / sh;
              var newAspect = 16 / 9;
              var orientation;
              var

                      //Get orientation
                      orientation = Math.abs(window.orientation);
              var device = navigator.platform;


              var i;
              // if user device is iPad.


              var scale = function () {
                      // Window width.
                      var ww = sym.$(window).width();
                      // Window height.
                      var wh = sym.$(window).height();

                      if (device == 'iPad') {
                              i = window.frameElement.parentElement;
                              ww = i.offsetWidth;
                              wh = ww * newAspect;
                      };

                      var frame = window.frameElement;
                      if (!frame) {
                              if (wh < ww / aspect) {
                                      ratio = wh / sh;
                              };

                              if (ww < wh * aspect) {
                                      ratio = ww / sw;
                              };
                      } else {
                              var frameHeight = frame.parentElement.parentElement.parentElement.offsetHeight;
                              ratio = frameHeight / sh;

                              var frameWidth = frame.parentElement.offsetWidth;
                              if (frameHeight * aspect > frameWidth) {
                                      ratio = frameWidth / sw;
                              }
                      }

                      //Landscape center
                      var newLeft = (ww - (sw * ratio)) / 2;
                      if (newLeft < 0) {
                              newLeft = 0;
                      }

                      //Hide scrollbar.
                      $('body').css('overflow', 'hidden');

                      sym.$('#Stage').css({
                              'left': newLeft,
                              '-webkit-transform': 'scale(' + ratio + ')',
                              '-moz-transform': 'scale(' + ratio + ')',
                              '-ms-transform': 'scale(' + ratio + ')',
                              '-o-transform': 'scale(' + ratio + ')',
                              'transform': 'scale(' + ratio + ')',
                              'margin-left': '0px'

                      });

              };


              scale();


              window.top.addEventListener("orientationchange", function () {
                      scale();
              });

              window.top.addEventListener('resize', function () {
                      scale();
              });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-706924085");