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
      
      
      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${bt_cerrar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$("aviso").fadeOut();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${gp}", "click", function(sym, e) {
         sym.$("gp").fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$(".slide").not(sym.$("slide_1")).hide();
         sym.$("pagina").html(sym.actual +" / "+sym.total);
         sym.$(".check").each(function(){
         	var namec1 = $(this).attr("id").split("_")[2];
         	sym.resultados[namec1]=0;
         });
         
         for (i = 0; i < parseInt(sym.cantidad1)+1; i++) {
         			$("#i_"+i).css({'background-color':'rgba(255,225,255,0.00)', 
         							'border-color':'rgba(255,225,255,0.00)',
         							'border-radius':'10px',
         							'border-bottom-right-radius':'0px',
         							'width': sym.$("in_"+i).css("width"),
         							'height':sym.$("in_"+i).css("height"),
         							'font-size':'18px',
         							'text-align':'center',
         						   'padding-left': '0px',
         						   'border-left-width': '0px',
         						   'padding-right': '0px',
         						   'border-right-width': '0px',
         						   'border-top-width': '0px',
         						   'border-bottom-width': '0px',
         						   'padding-bottom':'0px',
         						   'padding-top':'0px'
         
         						 });
         				$("#c_"+i).css({'background-color':'rgba(255,225,255,0.00)', 
         							'border-color':'rgba(255,225,255,0.00)',
         							'border-radius':'10px',
         							'border-bottom-right-radius':'0px',
         							'width': sym.$("co_"+i).css("width"),
         							'height':sym.$("co_"+i).css("height"),
         							'font-size':'18px',
         							'text-align':'center',
         						   'padding-left': '0px',
         						   'border-left-width': '0px',
         						   'padding-right': '0px',
         						   'border-right-width': '0px',
         						   'border-top-width': '0px',
         						   'border-bottom-width': '0px',
         						   'padding-bottom':'0px',
         						   'padding-top':'0px'
         
         						 });
         
         		}

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         //Número total de slides.
         sym.total = 2;
         
         //Número de elementos en la actividad.
         sym.cantidad1 = 1;
         sym.completas = [];
         //Array soluciones
sym.soluciones  = [0,3,1,0,1,1,1,1,1,0,1,0,0,1,1,0,3,2,4,1,3,8,1,6,9,0,0,0,0,0,0,0,0,0];
         
         
         //Control de páginas
         sym.actual=1;
         
         
         sym.botones = function(){
         	if(sym.actual == 1){
         
         	}else if(sym.actual > 1){
         
         	}else if (sym.actual == sym.total){
         
         	}
         };
         
         sym.contador = function(){
         	sym.$("txt_contador").html(sym.actual+' / '+sym.total);
         	sym.$('cuenta').fadeIn();
         	setTimeout(function(){
         		sym.$('cuenta').fadeOut();
         	},750);
         	sym.$(".slide").not(sym.$("slide_"+sym.actual)).fadeOut();
         	sym.$("slide_"+sym.actual).fadeIn();
         };
         
         sym.$("b_next").click(function(){
         	if(sym.actual < sym.total){
         		sym.actual = sym.actual+1;
         		sym.$('b_back').fadeIn();
         		sym.$('b_next').fadeIn();
         		sym.$('i_prev').fadeIn();
         		sym.$('i_next').fadeIn();
         		console.log(sym.actual)
         	}else{
         		sym.actual = sym.total
         	}
         
         	if(sym.actual == sym.total){
         		sym.actual = sym.total
         		sym.$('b_back').fadeIn();
         		sym.$('b_next').fadeOut();
         		sym.$('i_prev').fadeIn();
         		sym.$('i_next').fadeOut();	
         	};
         	sym.contador();
         });
         
         sym.$("b_back").click(function(){
         	if(sym.actual != 1){
         		sym.actual = sym.actual-1;
         		sym.$('b_back').fadeIn();
         		sym.$('b_next').fadeIn();
         		sym.$('i_prev').fadeIn();
         		sym.$('i_next').fadeIn();
         		console.log(sym.actual)
         	}
         	if(sym.actual == 1){
         		sym.actual =1;
         		console.log(sym.actual)
         		sym.$('b_back').fadeOut();
         		sym.$('b_next').fadeIn();
         		sym.$('i_prev').fadeOut();
         		sym.$('i_next').fadeIn();
         	}
         	sym.contador();
         });
         
         
         
         //Array resultados
         sym.resultados = [];
         
         //input texto
         sym.$(".inp").html("<input type='text'>");
         sym.$("input").each(function(){
                  	sym.$(this).attr("id","i_"+sym.$(this).parent().attr("id").split("_")[2]);
                 });
         
         //combobox  
         var titulo = "Elige una";	
         //sym.$(".combo").html("<select><option value='1'>5x</option><option value='2'>x+5</option></select>");	  
         
         
         var titulo = "Elige una";		  
         sym.$("co_1").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Definición de cuadrilátero.</option><option value='2'>Hipótesis.</option><option value='3'>Definición de ángulo.</option></select>");;
         sym.$("co_2").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Definición de diagonal.</option><option value='2'>Definición de segmento.</option><option value='3'>Definición de cuadrilátero.</option></select>");;
         sym.$("co_3").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Definición de ángulo.</option><option value='2'>Definición de diagonal.</option><option value='3'>Definición de triángulo.</option></select>");;
         sym.$("co_4").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Suma de los ángulos internos de ☐ABCD.</option><option value='2'>Suma de los ángulos internos del ∆ABC y del ∆CDA.</option><option value='3'>Propiedad de la igualdad.</option></select>");;
         sym.$("co_5").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Suma de ángulos adyacentes.</option><option value='2'>Suma de ángulos complementarios.</option><option value='3'>Suma de ángulos suplementarios.</option></select>");;
         sym.$("co_6").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Suma de la medida de ángulos.</option><option value='2'>Suma de los números naturales.</option><option value='3'>Suma de fracciones.</option></select>");;
         sym.$("co_7").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Propiedades de los reales.</option><option value='2'>Propiedades de la igualdad en 4 y 6.</option><option value='3'>Propiedad de la monotonía en 3 y 4.</option></select>");;
         sym.$("co_8").html("<select><option value='0' selected='selected'>"+titulo+"</option><option value='1'>Suma de los números irracionales.</option><option value='2'>Suma de los ángulos internos de ☐ABCD.</option><option value='3'>Propiedad de la igualdad en 5 y 7.</option></select>");;
         
         sym.$("select").each(function(){
         	sym.$(this).attr("id","c_"+sym.$(this).parent().attr("id").split("_")[2]);
         });
         
         //radio button
         sym.$(".radio").click(function(){
         	sym.resultados[0]=1;
         	var name = sym.$(this).attr("id").split("_")[3];
         	var clase = sym.$(this).attr("id").split("_")[2];
         	sym.$(".r_"+clase).not(sym.$("b_"+clase+'_'+name)).css("background-color","rgba(255,255,255,1.00)")
         	sym.$("b_"+clase+'_'+name).css("background-color","#33cccc")
         	sym.resultados[clase]=name
         });
         
         //checkbox
         sym.$(".check").click(function(){
         	var name = $(this).attr("id").split("_")[2];
         	sym.resultados[0] = 1
         	if (sym.$("check_"+name).is(":hidden")) {
         		sym.$("check_"+name).show();
         		sym.resultados[name]=1;
         	} else {
         		sym.$("check_"+name).hide();
         		sym.resultados[name]=0;
         	};
         	if(sym.soluciones[name]==0){
         
         	}
         });
         
         //registro puntos input y combo
         sym.$("input").change(function(){
         	sym.resultados[0] = 1
         	var name =  sym.$(this).attr("id").split("_")[1];
         	sym.resultados[name]=sym.$('#i_'+name).val();
         	});
         sym.$("select").change(function(){
         	sym.resultados[0] = 1
         	var name =  sym.$(this).attr("id").split("_")[1];
         	sym.resultados[name]=sym.$('#c_'+name).val();
         });
         
         
         //botón revisar.
         sym.$("b_rev").click(function(){
         var puntaje = 0;
         var todas = 0;
         var unchecked = 0;
         	for (i = 1; i < parseInt(sym.cantidad1)+1; i++) {	
         		if(sym.resultados[i] != null){
         			sym.completas[i] = 1;
         		}else{
         			sym.completas[i] = 0;
         		}
         		//todas += sym.completas[i];
         	}
         	sym.$(".check").each(function(){
         	var namec = $(this).attr("id").split("_")[2];
         	sym.completas[namec]=1;
         	if(sym.soluciones[namec]==0){
         		sym.soluciones[namec]='a';
         		unchecked += 1;
         		sym.completas[namec]=1;
         	};
         })
         for (i = 1; i < parseInt(sym.cantidad1)+1; i++) {
         	if(sym.completas[i] == 1){
         		todas += 1;
         	}
         }
         	//alert(todas + ' - ' + sym.completas)
         
         	if(todas === sym.cantidad1){
         		for (i = 1; i < parseInt(sym.cantidad1)+1; i++) {	
         				if(sym.resultados[i]==sym.soluciones[i]){
         				puntaje = puntaje+1;
         				sym.$('#i_'+i).css("background-color","rgba(142,255,142,0.50)");
         				sym.$('#c_'+i).css("background-color","rgba(142,255,142,0.50)");
         				sym.$('ca_'+i).css("background-color","rgba(142,255,142,0.50)");
         				sym.$(".r_"+i).children().not(sym.$("b_"+i+'_'+sym.resultados[i])).css("background-color","rgba(255,255,255,1.00)");
         				sym.$("b_"+i+'_'+sym.resultados[i]).css("background-color","rgba(18,165,55,0.50)");
         				sym.$( "bts1" ).fadeOut();
         				sym.$( "bts2" ).fadeIn();
         
         			}else if (sym.soluciones[i] == 'a' && sym.resultados[i] == 0){
         				sym.$('#c_'+i).css("background-color","rgba(142,255,142,0.50)");
         			}
         			else{
         				sym.$('#i_'+i).css("background-color","rgba(216,0,46,0.39)");
         				sym.$('#c_'+i).css("background-color","rgba(216,0,46,0.39)");
         				sym.$('ca_'+i).css("background-color","rgba(216,0,46,0.39)");
         				sym.$(".r_"+i).children().not(sym.$("b_"+i+'_'+sym.resultados[i])).css("background-color","rgba(255,255,255,1.00)");
         				sym.$("b_"+i+'_'+sym.resultados[i]).css("background-color","rgba(216,0,46,0.39)");
         			}
         		}
         		sym.$("gp").fadeIn();
         		sym.$("puntos").html('Has respondido correctamente '+ puntaje + ' de ' + parseInt(sym.cantidad1-unchecked) + ' posibles');
         		sym.$("bts1").fadeOut();
         		sym.$("bts2").fadeIn();
         	}else{
         		sym.$("aviso").fadeIn();
         	}
         
         	sym.$("comp").html(sym.completas);
         	todas = 0;
         });
         
         //bt_cerrar
         sym.$("bt_cerrar").click(function(){
         	sym.$("aviso").fadeOut();
         });
         
         //botón soluciones.
         
         sym.$("b_sol").click(function(){
         		for (i = 1; i < parseInt(sym.cantidad1+1); i++) {
         			sym.$('#i_'+i).css("background-color","rgba(142,255,142,0.00)");
         			sym.$('#c_'+i).css("background-color","rgba(142,255,142,0.00)");
         
         			sym.$('#i_'+i).val(sym.soluciones[i]);
         			sym.$('#c_'+i).val(sym.soluciones[i]);
         			sym.$('ca_'+i).css("background-color","rgba(16,164,52,0.30)");
         			sym.$(".r_"+i).not(sym.$("b_"+i+'_'+sym.soluciones[i])).css("background-color","rgba(255,255,255,1.00)");
                  sym.$("b_"+i+'_'+sym.soluciones[i]).css("background-color","rgba(16,164,52,0.30)");
                  if(sym.soluciones[i]==1){
                  			sym.$("check_"+i).show();
                  		}else{
         						sym.$("check_"+i).hide();
                  		}
         	}
         });
         
         //botón reiniciar.
         sym.$("b_rei").click(function(){
         	location.reload();
         
         /*		for (i = 1; i < parseInt(sym.cantidad1+1); i++) {
         			sym.$('#i_'+i).css("background-color","rgba(142,255,142,0.00)");
         			sym.$('#c_'+i).css("background-color","rgba(142,255,142,0.00)");
         
         			sym.$('check_'+i).fadeOut();
         			sym.$('#i_'+i).val("");
         			sym.$('#c_'+i).val(0);
         			sym.$('ca_'+i).css("background-color","rgba(0,105,180,0.50)");
         			sym.$(".r_"+i).not(sym.$("b_"+i+'_'+sym.soluciones[i])).css("background-color","rgba(255,255,255,1.00)");
                  sym.$("b_"+i+'_'+sym.soluciones[i]).css("background-color","rgba(132,203,255,0.00)");
         	}
         	sym.$( "bts1" ).animate({left: "0px"}, 2000);	
         	sym.$( "bts2" ).animate({left: "-90px"}, 2000);
         	sym.soluciones = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
         	sym.$("pagina").text("1" +"/" +sym.total);
         	sym.$(".slide").not(sym.$("slide_1")).fadeOut();
         	sym.$("slide_1").fadeIn();*/
         });
         
         
         
         
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

      Symbol.bindElementAction(compId, symbolName, "${fondoo}", "click", function(sym, e) {
         sym.$("aviso").fadeOut();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bts1}", "mousedown", function(sym, e) {
         // introducir código para que se ejecute cuando el botón del ratón esté presionado
         sym.$('bt1').css('box-shadow', '3px 3px 3px rgba(0,0,0,0.00)')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bts1}", "mouseout", function(sym, e) {
         sym.$('bt1').css('box-shadow', '3px 3px 3px rgba(0,0,0,0.30)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_sol}", "mousedown", function(sym, e) {
         // introducir código para que se ejecute cuando el botón del ratón esté presionado
         sym.$('bts21').css('box-shadow', '3px 3px 3px rgba(0,0,0,0.00)')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_sol}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$('bts21').css('box-shadow', '3px 3px 3px rgba(0,0,0,0.30)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_rei}", "mousedown", function(sym, e) {
         // introducir código para que se ejecute cuando el botón del ratón esté presionado
         sym.$('bts22').css('box-shadow', '3px 3px 3px rgba(0,0,0,0.00)')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_rei}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$('bts21').css('box-shadow', '3px 3px 3px rgba(0,0,0,0.30)')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.$("gp").fadeOut();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gp}", "touchstart", function(sym, e) {
         sym.$("gp").fadeOut();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "touchstart", function(sym, e) {
         sym.$("gp").fadeOut();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_cerrar}", "touchstart", function(sym, e) {
         sym.$("gp").fadeOut();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fondoo}", "touchstart", function(sym, e) {
         sym.$("gp").fadeOut();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-24482691");