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
                  
                  //slides con actividad.
                  sym.acts = new Array ();
                  sym.acts[6]=1;
                  // No tocar sym.actual
                  sym.actual = 1;
                  sym.ant = 0;
                  //Cantidad de slides.
                  sym.total = 3;
                  sym.$("txt_contador").html(sym.actual+' / '+sym.total);
                  sym.aparecern = function(){
         					 sym.$("next").show();
         					 sym.$("i_next").show();
                  			}
         
                  sym.aparecerb = function(){
         					sym.$("back").show();
         					sym.$("i_prev").show();
                  		}
                  sym.adelante=function(){
                  	sym.$(".slide").not(sym.$("slide_"+sym.actual)).fadeOut(500);
                  	sym.$("slide_"+sym.actual).fadeIn(500,function(){sym.getSymbol("slide_"+sym.actual).play()});
                  	//sym.getSymbol(".slide").not(sym.getSymbol("slide_"+sym.actual)).stop(0);
                  	sym.$("txt_contador").html(sym.actual+' / '+sym.total);
                  	sym.$('cuenta').fadeIn();
                  	setTimeout(function(){
                  		sym.$('cuenta').fadeOut();
                  	},750);
         
                  	if(sym.acts[sym.actual]==1){
                  		sym.$("b_act").fadeIn();
                  	}else{
                  		sym.$("b_act").fadeOut();
                  	}
                  };
         
                  sym.atras=function(){
                  	sym.$(".slide").not(sym.$("slide_"+sym.actual)).fadeOut(500);
                  	sym.$("slide_"+sym.actual).fadeIn(500);
                  	sym.$("txt_contador").html(sym.actual+' / '+sym.total);
                  	sym.$('cuenta').fadeIn();
                  	setTimeout(function(){
                  		sym.$('cuenta').fadeOut();
                  	},500);
                  	if(sym.acts[sym.actual]==1){
                  		sym.$("b_act").fadeIn();
                  	}else{
                  		sym.$("b_act").fadeOut();
                  	}
                  };
         
         
                  sym.$("next").click(function(){
         			if(sym.actual < sym.total){
         				 sym.actual = parseInt(sym.actual)+1;
         				 console.log(sym.actual, sym.total, 1)
                  		sym.adelante();
                  		sym.aparecerb();
         			 }
         			 if(sym.actual == sym.total){
         				sym.actual = sym.total;
         				sym.$("next").hide();
         				sym.$("i_next").hide();
         				sym.$("txt_contador").html(sym.actual+' / '+sym.total);
                  	}
                  	if(sym.$("slide_"+sym.actual).is(":visible")){
                  		sym.getSymbol("slide_"+sym.actual).play(0);
                  	}else{
                  		sym.getSymbol("slide_"+sym.actual).stop(0);
                  	}
                  });
         
                  sym.$("back").click(function(){
                  	if(sym.actual!=1){
                  		sym.actual=parseInt(sym.actual)-1;
                  		sym.atras();
                  		sym.aparecern();
                  		if(sym.$("slide_"+sym.actual).is(":visible")){
                  			sym.getSymbol("slide_"+sym.actual).play(0);
                  		}else{
                  		sym.getSymbol("slide_"+sym.actual).stop(0);
                  	}
         			 }
         			 if(sym.actual == 1){
                  		sym.actual = 1;
                  		sym.$(".slide").not(sym.$("slide_1")).fadeOut(500);
                  		sym.$("slide_1").fadeIn(500);
                  		sym.$("txt_contador").html(sym.actual+'   /   '+sym.total);
         				sym.$("back").hide();
         				sym.$("i_prev").hide();
                  	}
                  });
         
         
                  sym.$("bts2").click(function(){
                  	sym.actual=1;
                  	sym.aparecern();
                  	sym.$("txt_contador").html(sym.actual+'   /   '+sym.total);
                  	sym.$(".slide").not(sym.$("slide_"+sym.actual)).fadeOut(500);
                  	sym.$("slide_"+sym.actual).fadeIn(500);
                  	if(sym.$("slide_"+sym.actual).is(":visible")){
                  		sym.getSymbol("slide_"+sym.actual).play(0);
                  	}else{
                  		sym.getSymbol("slide_"+sym.actual).stop(0);
                  	}
                  	if(sym.acts[sym.actual]==1){
                  		sym.$("b_act").fadeIn();
                  	}else{
                  		sym.$("b_act").fadeOut();
                  	}
                  });
         
         
         
         
                  sym.$(".bt").click(function(){
                  	var name = sym.$(this).attr("id").split("_")[4];
                  	sym.$(".img").not(sym.getSymbol("slide_"+sym.actual).$("i_"+name)).hide();
                  	sym.getSymbol("slide_"+sym.actual).$("i_"+name).show("slow");
                  	sym.getSymbol("slide_"+sym.actual).$("bc_"+name).show("slow")
                  	//alert(name)
                  	sym.$(".cerrar").show();
                  });
         
                  sym.$(".cerrar").click(function(){
                  	var name = sym.$(this).attr("id").split("_")[4];
                  	sym.$(".img").hide();
                  	sym.$(".cerrar").hide();
                  });
         
         
         
                  sym.$("b_act").click(function(){
                  	sym.$('b_cerrar').show();
                  	sym.$("act").html("<iframe width='1280' height='800' marginwidth='0' marginheight='0' frameborder='0' scrolling='no' src='composiciones/slide_"+sym.actual+"/index.html'>");
                  	sym.$("g_act").show();
                  });
         
                           sym.$(".b_ir").click(function(){
                           	sym.actual=sym.$(this).attr("id").split("_")[4];
                           	sym.aparecern();
                           	sym.$("txt_contador").html(sym.actual+' / '+sym.total);
                           	sym.$(".slide").not(sym.$("slide_"+sym.actual)).fadeOut(500);
                           	sym.$("slide_"+sym.actual).fadeIn(500);
                           	if(sym.$("slide_"+sym.actual).is(":visible")){
                           		sym.getSymbol("slide_"+sym.actual).play(0);
                           	}else{
                           		sym.getSymbol("slide_"+sym.actual).stop(0);
                           	}
                           	if(sym.acts[sym.actual]==1){
                           		sym.$("b_act").fadeIn();
                           	}else{
                           		sym.$("b_act").fadeOut();
                           	}
         
                           		if(sym.actual==sym.total){
                           	sym.stop();
                           	sym.$("next").hide();
                           	}
         
                           });
         

      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.getSymbol("slide_"+sym.actual).play();
         
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
         
              //Stage dimensions.
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

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${vAct}", "click", function(sym, e) {
         sym.$("g_act").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_rei}", "mousedown", function(sym, e) {
         sym.$("bts22").css('transform','skewY(8deg)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_rei}", "mouseup", function(sym, e) {
         sym.$("bts22").css('transform','skewY(0deg)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_rei}", "touchstart", function(sym, e) {
         sym.$("bts22").css('transform','skewY(8deg)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_rei}", "touchend", function(sym, e) {
         sym.$("bts22").css('transform','skewY(0deg)');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'Slide_5'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'Hot_Spot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Hot_Spot");
   //Edge symbol end:'Hot_Spot'

   //=========================================================
   
   //Edge symbol: 'bg_defecto_simbolo'
   (function(symbolName) {   
   
   })("bg_defecto_simbolo");
   //Edge symbol end:'bg_defecto_simbolo'

   //=========================================================
   
   //Edge symbol: 'bt_inicio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot_area_backCopy}", "mouseover", function(sym, e) {
         // detener la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.stop('over');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot_area_backCopy}", "mousedown", function(sym, e) {
         // detener la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.stop('down');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot_area_backCopy}", "mouseup", function(sym, e) {
         // detener la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.stop('up');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot_area_backCopy}", "mouseout", function(sym, e) {
         // detener la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.stop('normal');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot_area_backCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_inicio");
   //Edge symbol end:'bt_inicio'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${b_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("i_24").show();
         
         // Mostrar un elemento 
         sym.$("i_25").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("i_23").show();
         
         // Mostrar un elemento 
         sym.$("i_26").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("i_21").show();
         
         // Mostrar un elemento 
         sym.$("i_27").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("i_22").show();
         
         // Mostrar un elemento 
         sym.$("i_28").show();
         

      });
      //Edge binding end

      })("slide_2");
   //Edge symbol end:'slide_2'

   //=========================================================
   
   //Edge symbol: 'slide_3'
   (function(symbolName) {   
   
      

      

      

      

      

      })("slide_3");
   //Edge symbol end:'slide_3'

   //=========================================================
   
   //Edge symbol: 'slide_4'
   (function(symbolName) {   
   
      

      

      

      })("slide_4");
   //Edge symbol end:'slide_4'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      

      })("slide_5");
   //Edge symbol end:'slide_5'

   //=========================================================
   
   //Edge symbol: 'slide_6'
   (function(symbolName) {   
   
      

      })("slide_6");
   //Edge symbol end:'slide_6'

   //=========================================================
   
   //Edge symbol: 'slide_7'
   (function(symbolName) {   
   
      

      })("slide_7");
   //Edge symbol end:'slide_7'

   //=========================================================
   
   //Edge symbol: 'slide_8'
   (function(symbolName) {   
   
      

      })("slide_8");
   //Edge symbol end:'slide_8'

   //=========================================================
   
   //Edge symbol: 'slide_9'
   (function(symbolName) {   
   
      

      })("slide_9");
   //Edge symbol end:'slide_9'

   //=========================================================
   
   //Edge symbol: 'slide_10'
   (function(symbolName) {   
   
      

      })("slide_10");
   //Edge symbol end:'slide_10'

   //=========================================================
   
   //Edge symbol: 'slide_11'
   (function(symbolName) {   
   
      

      })("slide_11");
   //Edge symbol end:'slide_11'

   //=========================================================
   
   //Edge symbol: 'slide_12'
   (function(symbolName) {   
   
      

      })("slide_12");
   //Edge symbol end:'slide_12'

   //=========================================================
   
   //Edge symbol: 'slide_13'
   (function(symbolName) {   
   
      

      })("slide_13");
   //Edge symbol end:'slide_13'

   //=========================================================
   
   //Edge symbol: 'slide_14'
   (function(symbolName) {   
   
      

      })("slide_14");
   //Edge symbol end:'slide_14'

   //=========================================================
   
   //Edge symbol: 'slide_15'
   (function(symbolName) {   
   
      

      })("slide_15");
   //Edge symbol end:'slide_15'

   //=========================================================
   
   //Edge symbol: 'slide_16'
   (function(symbolName) {   
   
      

      })("slide_16");
   //Edge symbol end:'slide_16'

   //=========================================================
   
   //Edge symbol: 'slide_17'
   (function(symbolName) {   
   
      

      })("slide_17");
   //Edge symbol end:'slide_17'

   //=========================================================
   
   //Edge symbol: 'slide_18'
   (function(symbolName) {   
   
      

      })("slide_18");
   //Edge symbol end:'slide_18'

   //=========================================================
   
   //Edge symbol: 'slide_19'
   (function(symbolName) {   
   
      

      })("slide_19");
   //Edge symbol end:'slide_19'

   //=========================================================
   
   //Edge symbol: 'slide_20'
   (function(symbolName) {   
   
      

      })("slide_20");
   //Edge symbol end:'slide_20'

   //=========================================================
   
   //Edge symbol: 'popup'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${b_cerrar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getComposition().getStage().$("popup").hide();
         
         sym.getComposition().getStage().getSymbol("slide_"+sym.actual).play(0);

      });
      //Edge binding end

   })("popup");
   //Edge symbol end:'popup'

   //=========================================================
   
   //Edge symbol: 'recurso'
   (function(symbolName) {   
   
   })("recurso");
   //Edge symbol end:'recurso'

   //=========================================================
   
   //Edge symbol: 'tierra'
   (function(symbolName) {   
   
   })("tierra");
   //Edge symbol end:'tierra'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5531445");