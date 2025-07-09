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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

        
         sym.$('.drags').each(function (){
               sym.contarDrags.push(sym.$(this).attr("id").split("_")[2]);
            });
         sym.$('.drops').each(function (){
               sym.cualDrop.push(sym.$(this).attr("id").split("_")[2]);
            });
 
         

          //sym.arrayCeros()
         
         sym.actualizar = function(){
            sym.$('.drags').each(function (){
               var name = sym.$(this).attr('id').split("_")[2];
               sym.posicionDrags[name] = [sym.$('sym_'+name).position().left,sym.$('sym_'+name).position().top];
               sym.medidasDrags[name] = [sym.$('sym_'+name).width(),sym.$('sym_'+name).height()]; 
            });

            sym.$('.drops').each(function (){
               var name = sym.$(this).attr('id').split("_")[2];
               sym.posicionDrops[name] = [sym.$('box_'+name).position().left,sym.$('box_'+name).position().top];
               sym.medidasDrops[name] = [sym.$('box_'+name).width(),sym.$('box_'+name).height()];
            });
         };
         
         if (sym.masDrops == undefined){
            sym.arrayCeros(sym.contarDrags.length+1)
            console.log('indefi')
         }else{
            sym.arrayCeros(sym.cualDrop.length+1)
            console.log('definido y hay más drops')
            console.log(sym.contarDrops)
         }
         

         
         sym.actualizar();
  
         function touchHandler(event) {
             var touch = event.changedTouches[0];
         
             var simulatedEvent = document.createEvent("MouseEvent");
                 simulatedEvent.initMouseEvent({
                 touchstart: "mousedown",
                 touchmove: "mousemove",
                 touchend: "mouseup"
             }[event.type], true, true, window, 1,
                 touch.screenX, touch.screenY,
                 touch.clientX, touch.clientY, false,
                 false, false, false, 0, null);
         
             touch.target.dispatchEvent(simulatedEvent);
             event.preventDefault();
         }
         
         function init() {
             document.addEventListener("touchstart", touchHandler, true);
             document.addEventListener("touchmove", touchHandler, true);
             document.addEventListener("touchend", touchHandler, true);
             document.addEventListener("touchcancel", touchHandler, true);
         }
         
         init();
         
         sym.$("bien").hide();
         sym.$("mal").hide();
         sym.$("calificacion").hide();
         sym.$("puntaje").hide();
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         
         // Crear .draggable y .droppable
         
         var draggableOptions= {
         	containment: sym.$("#Stage"),
         	opacity: 0.4,
         	iframeFix: true,
         	zIndex: 100,
         	refreshPositions: true,
         	scroll: false,
         	//drag : dragFix,
         	start: function(event, ui){
               var dragId = $(this).attr("id").split("_")[2];
               sym.dragEstaba[dragId] = sym.dragEsta[dragId];
            },
         
         	};
         
         yepnope({nope:['edge_includes/jquery-ui-1.10.4.custom.min.js'], complete: init});
         
         //Puntaje total.
         sym.total = 9;
         
         // Si hay más drops que drags declarar la siguiente variable con la cantidad de respuestas correctas que hay.
       // sym.masDrops = 8;
       
       
         //Declaración de variables.
         sym.correcta = [];
         sym.contarDrops = [];
         sym.dragEstaba = [];
         sym.dragEsta = [];
         sym.contarDrags = [];
         sym.posicionDrags = [];
         sym.posicionDrops = [];
         sym.medidasDrags = [];
         sym.medidasDrops = [];
         sym.cualDrop = [];
         cuentaDropsextra = 0;
       
       
       
         sym.arrayCeros = function(cantidadDrags){
            for (var i = 0; i < cantidadDrags; i++) {
               sym.correcta[i] = 0;
               sym.contarDrops[i] = 0;
               sym.dragEstaba[i] = 0;
               sym.dragEsta[i] = 0;
            };
            console.log('ceros')
         };
       
       
         var alto, ancho, top=0, left;
         var origenX, origenY;
         sym.hijos = $('.drags')
         sym.hijosdrop = $('.drops')
         var contador;
         var total2;
       
         sym.dragarriba = [];
         sym.dragizquierda = [];
         sym.dragwidth = [];
         sym.dragheight = [];
       
         sym.$('.drags').css("cursor","move");
         function init(){
         	$('.drags').draggable(draggableOptions);
         	sym.hijosdrop.each(function(event, ui){
         		datoactual = $(this).attr("id").split("_")[2];
         		sym.$("box_"+datoactual).droppable({
         			drop : function(event, ui){
                        var dropId = $(this).attr("id").split("_")[2];
                        var dragId = $(ui.draggable).attr("id").split("_")[2];
                        sym.correcta[0]=1;
       
                        alto = $(ui.draggable).css("height").split("px")[0];
                        top = $(this).css("top").split("px")[0];
                        alto = parseInt(top) + parseInt(($(this).css("height").split("px")[0] - alto)/2);
                        left = $(this).css("left").split("px")[0];
                        ancho = $(ui.draggable).css("width").split("px")[0];
                        ancho = parseInt(left)+parseInt(($(this).css("width").split("px")[0] - ancho)/2);
                        total2 += ","+ancho;
       
       
       
                        sym.dragEsta[dragId] = dropId;
                        var dragSeQuedo = sym.dragEsta.indexOf(sym.dragEstaba[dragId]);
                        var dropViene = sym.dragEstaba[dragId];
       
                        var revisaRepetido = function (){
                           if(sym.contarDrops[dropId] > 1){
                              sym.correcta[dropId] = 0;
                           }else{
                               if(sym.contarDrops[dropId] == 1 && sym.contarDrops[sym.dragEstaba[dragId]] == 1){
                                 if(dragSeQuedo==dropViene || sym.$('sym_'+dragSeQuedo).attr("class").split(" ")[2]==sym.$('box_'+dropViene).attr("class").split(" ")[2]){
                                       sym.correcta[dropViene] = 1;
                                    }else{
                                       sym.correcta[dropViene] = 0;
       
                                    }
                                 };
                              }; 
       
                        }
       
                        if(sym.dragEstaba[dragId] != sym.dragEsta[dragId]){
                           sym.contarDrops[dropId]++;
                           sym.contarDrops[sym.dragEstaba[dragId]]--;
       
                           sym.correcta[dropViene] = 0;
       
                        }
       
                       	if(dropId==dragId || $(this).attr("class").split(" ")[2]==$(ui.draggable).attr("class").split(" ")[2]){
         						if(sym.correcta[dropId]!=1){
         							sym.correcta[dropId]=1;
                           }else{
                              sym.correcta[dropId]=0;
                           }
         					}
       
                        revisaRepetido();
       
       
                        //console.log('estaba: '+ sym.dragEstaba);
                        //console.log('esta: '+ sym.dragEsta);         
                        //console.log(sym.contarDrops)
       
         					$(ui.draggable).css({"top":alto,"left":ancho});
                       //console.log(sym.correcta);
       
         				},
         		})
         });
       
         };
       
         // Botón revisar.
         sym.$("b_rev").bind('touchstart click', function(){
       	  var listo = true;
       	  var totalregs = sym.correcta.length;
       	  var calificacion = 0;
       
         if (sym.masDrops == undefined){
            for (i = 1; i < parseInt(sym.total)+1; i++) { 
                if(sym.contarDrops[i] == 0){
                  sym.$('aviso').fadeIn();
                  listo = false;
               }
            };
         }else{
            for (i = 1; i < parseInt(sym.cualDrop.length)+1; i++) { 
                if(sym.contarDrops[i] == 1){
                  cuentaDropsextra ++;
               }
            };
            if(sym.total > cuentaDropsextra){
                  console.log(cuentaDropsextra)
                  console.log(sym.contarDrops)
                  sym.$('aviso').fadeIn();
                  listo = false;
               };
         }
       
       
         if(listo){
            sym.$(".drags").draggable( "disable" );
            sym.$( "bts2" ).fadeIn();
            sym.$( "bts1" ).fadeOut();
            sym.$("puntaje").show();
       	  sym.$("puntos").fadeIn();
       
         	for(var i=1; i<totalregs; i++){
               if(sym.contarDrops[i] > 1){
                  sym.correcta[i] = 0;
               }
         		calificacion+=sym.correcta[i];
         		if(sym.correcta[i]==1){
         			sym.$("box_"+i).css("background-color","rgba(50,230,60,0.4)");
         			}else{
         			sym.$("box_"+i).css("background-color","rgba(245,0,0,0.42)");
         			}
         		};
            if(sym.masDrops == undefined){
               console.log('no hay mas drops que drags.');
            }else{
               console.log(sym.contarDrops)
               for (var i = 0; i < sym.contarDrops.length+1; i++) {
                  if(sym.contarDrops[i] == 0){
                     sym.$("box_"+i).css("background-color","rgba(245,0,0,0.0)");
                  }
               };
            }
            sym.$("puntos").html(calificacion + " / " + sym.total).fadeIn();   
         };	
       
       
       
         });
       
       
         //Botón soluciones.
       
         sym.$("b_sol").bind('touchstart click', function(){
       
       
           // sym.actualizar();
            sym.contarDrags.sort();
            sym.cualDrop.sort();
       
       
           // sym.actualizar();
            sym.contarDrags.sort();
            sym.cualDrop.sort();
            console.log(sym.contarDrags)
            console.log(sym.cualDrop)
       
            for (var i = 0; i < sym.contarDrags.length; i++) {
                  var anchoDrag = sym.medidasDrags[i+1][0];
                  var altoDrag = sym.medidasDrags[i+1][1];
       
               if( i < sym.total){
       
                  var posDropX = sym.posicionDrops[i+1][0];
                  var posDropY = sym.posicionDrops[i+1][1];
                  var anchoDrop = sym.medidasDrops[i+1][0];
                  var altoDrop = sym.medidasDrops[i+1][1];
       
       
       
                  var aceptadoX = (posDropX + ( (anchoDrop - anchoDrag)/2 ));
                  var aceptadoY = (posDropY + ( (altoDrop - altoDrag)/2 ));
       
       
                  sym.$("sym_"+(i+1)).css({"top":aceptadoY,"left":aceptadoX})
               }else{
                  var posDragX = sym.posicionDrags[i+1][0];
                  var posDragY = sym.posicionDrags[i+1][1];
                  sym.$("sym_"+(i+1)).css({"top":posDragY,"left":posDragX})
               }
            };
            $(".drops").css("background-color","rgba(255,255,255,0.00)")
            sym.$("btn_check").hide("fast");
       
         });          
       
       
         //Botón reiniciar.
       
         sym.$("b_rei").bind('touchstart click', function(){
            location.reload();
            /*sym.$( ".drags" ).draggable( "enable" );
            sym.arrayCeros(sym.cualDrop.length +1);
            cuentaDropsextra = 0;
            sym.$("puntos").fadeOut();
            console.log(cuentaDropsextra)
            for (var i = 0; i < sym.contarDrags.length; i++) {
               var posDragX = sym.posicionDrags[i+1][0];
               var posDragY = sym.posicionDrags[i+1][1];
               sym.$("sym_"+(i+1)).css({"top":posDragY,"left":posDragX});
       
            }; 
       
            $(".drops").css("background-color","rgba(255,255,255,0.00)")
            sym.$("puntaje").hide();
            sym.$( "bts1" ).fadeIn();
            sym.$( "bts2" ).fadeOut();*/
         });
       
         sym.$(".bt").bind('touchstart click', function(){
         var name = sym.$(this).attr("id").split("_")[2];
         sym.$(".img").not(sym.$("i_"+name)).hide();
         sym.$("i_"+name).show("slow");
         sym.$("bc_"+name).show("slow")
         //alert(name)
         sym.$(".cerrar").show();
         });
         sym.$(".cerrar").bind('touchstart click',function(){
         sym.$(".img").hide();
         sym.$(".cerrar").hide();
         });
       

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${bt_cerrar}", "click", function(sym, e) {
         sym.$("aviso").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cierraPuntaje}", "click", function(sym, e) {
         sym.$("puntaje").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cierraPuntaje}", "touchstart", function(sym, e) {
         sym.$("puntaje").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_cerrar}", "touchstart", function(sym, e) {
         sym.$("aviso").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_amp}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("slideX").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b_amp}", "touchstart", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("slideX").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'slideX'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_contentX}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_contentX}", "touchstart", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("slideX");
   //Edge symbol end:'slideX'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-19938881");