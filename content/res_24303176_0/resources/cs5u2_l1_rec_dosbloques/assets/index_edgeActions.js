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
         /*
         var materia = área que se está trabajando. 
         "l" == lenguaje;
         "c" == ciencias;
         "s" == sociales;
         */
         
         var materia = "s";
         
         switch (materia) {
             case 'l':
                 materia = "rgba(51,204,204,1.00)";
                 break;
             case 'c':
                 materia = "rgba(51,204,204,1.00))";
                 break;
             case 's':
                 materia = "rgba(51,204,204,1.00)";
                 break;
         }
         //alert(materia)
         sym.$(".textos").css("color",materia);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-106337430");