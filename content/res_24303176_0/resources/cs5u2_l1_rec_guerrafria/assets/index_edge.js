/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'neosans': '<link rel=\"stylesheet\" href=\"font/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.4.custom.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'content',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_content.png",'0px','0px']
                        },
                        {
                            id: 'box_1',
                            type: 'rect',
                            rect: ['741px', '404px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'b_amp',
                            type: 'image',
                            rect: ['1191px', '717px', '52px', '52px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b_amp.png",'0px','0px']
                        },
                        {
                            id: 'box_9',
                            type: 'rect',
                            rect: ['732px', '343px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_8',
                            type: 'rect',
                            rect: ['1051px', '480px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_4',
                            type: 'rect',
                            rect: ['880px', '371px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_3',
                            type: 'rect',
                            rect: ['873px', '316px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_7',
                            type: 'rect',
                            rect: ['1045px', '414px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_2',
                            type: 'rect',
                            rect: ['844px', '338px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_6',
                            type: 'rect',
                            rect: ['1051px', '379px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'box_5',
                            type: 'rect',
                            rect: ['926px', '395px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "0px", "10px 10px"],
                            fill: ["rgba(238,153,183,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drops"
                        },
                        {
                            id: 'sym_1',
                            type: 'image',
                            rect: ['511px', '228px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_11.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_2',
                            type: 'image',
                            rect: ['511px', '280px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_12.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_3',
                            type: 'image',
                            rect: ['511px', '324px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_13.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_4',
                            type: 'image',
                            rect: ['511px', '371px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_14.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_5',
                            type: 'image',
                            rect: ['511px', '419px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_15.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_6',
                            type: 'image',
                            rect: ['511px', '468px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_16.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_7',
                            type: 'image',
                            rect: ['511px', '516px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_17.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_8',
                            type: 'image',
                            rect: ['512px', '578px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_18.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'sym_9',
                            type: 'image',
                            rect: ['511px', '646px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sym_19.png",'0px','0px'],
                            userClass: "drags"
                        },
                        {
                            id: 'slideX',
                            symbolName: 'slideX',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '2', '1280', '802', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['994px', '732px', '194px', '52px', 'auto', 'auto'],
                            text: "Mapa ampliado",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(51,204,204,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'titulo',
                            type: 'text',
                            rect: ['39px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​​Bloques de poder durante la Guerra Fría</p>",
                            align: "left",
                            font: ['neosans', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'enunciado',
                            type: 'text',
                            rect: ['39px', '102px', '1199px', '32px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​​Ubica el número de cada casilla de información según corresponda.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'tipo',
                            type: 'text',
                            rect: ['1103px', '21px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Actividad</p>",
                            align: "left",
                            font: ['neosans', [30, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'bts2',
                            display: 'none',
                            type: 'group',
                            rect: ['15px', '607px', '90', '156px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bts21',
                                type: 'image',
                                rect: ['9px', '0px', '72px', '72px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50% 50%"],
                                fill: ["rgba(0,0,0,0)",im+"bts21.svg",'0px','0px'],
                                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.30)"]
                            },
                            {
                                id: 'bts22',
                                type: 'image',
                                rect: ['9px', '84px', '72px', '72px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50% 50%"],
                                fill: ["rgba(0,0,0,0)",im+"bts22.svg",'0px','0px'],
                                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.30)"]
                            },
                            {
                                id: 'b_rei',
                                type: 'rect',
                                rect: ['0px', '83px', '90', '73px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(238,153,183,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'b_sol',
                                type: 'rect',
                                rect: ['0px', '0px', '90', '74px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(238,153,183,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'bts1',
                            display: 'block',
                            type: 'group',
                            rect: ['14px', '616px', '91', '61', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'bts12',
                                type: 'image',
                                rect: ['10px', '-9px', '72px', '72px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50% 50%"],
                                fill: ["rgba(0,0,0,0)",im+"bt1.svg",'0px','0px'],
                                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.30)"]
                            },
                            {
                                id: 'b_rev',
                                type: 'rect',
                                rect: ['1px', '-13px', '90', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(238,153,183,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'aviso',
                            display: 'none',
                            type: 'group',
                            rect: ['1', '0', '1280', '801', 'auto', 'auto'],
                            c: [
                            {
                                id: 'fondoo',
                                type: 'rect',
                                rect: ['0', '0px', '1280px', '801px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'dialogo',
                                type: 'image',
                                rect: ['458', '330px', '362px', '139px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"dialogo2.png",'0px','0px']
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['476px', '372px', '309px', '74px', 'auto', 'auto'],
                                text: "<p style=\"margin:0px\"><span style=\"font-family: neosans; font-size: 21px;\">Debes solucionar todas <br>las actividades antes de <br>verificar las respuestas.​</span></p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'bt_cerrar',
                                type: 'ellipse',
                                rect: ['773', '323', '55px', '54px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0.498)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'puntaje',
                            display: 'none',
                            type: 'group',
                            rect: ['607', '387px', '66', '25', 'auto', 'auto'],
                            c: [
                            {
                                id: 'fondoPuntaje',
                                display: 'block',
                                type: 'rect',
                                rect: ['-607px', '-387px', '1280px', '798px', 'auto', 'auto'],
                                opacity: '0.53237410071942',
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgb(0, 105, 180)","none"]
                            },
                            {
                                id: 'dialogo2',
                                type: 'image',
                                rect: ['-145px', '-59px', '362px', '139px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"dialogo3.png",'0px','0px']
                            },
                            {
                                id: 'puntos',
                                display: 'block',
                                type: 'text',
                                rect: ['-55px', '25px', '160px', '20', 'auto', 'auto'],
                                text: "",
                                align: "center",
                                font: ['neosans', [25, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text5',
                                type: 'text',
                                rect: ['-127px', '-13px', '304px', '21px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Tu puntaje ha sido:</p>",
                                align: "center",
                                font: ['neosans', [25, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cierraPuntaje',
                                display: 'block',
                                type: 'ellipse',
                                rect: ['171px', '-60px', '48px', '45px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '0',
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgb(0, 105, 180)","solid"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '800', 'auto', 'auto'],
                            sizeRange: ['null','1280px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aviso}",
                            'none',
                            'none'
                        ],
                        [
                            "eid311",
                            "width",
                            0,
                            0,
                            "linear",
                            "${fondoPuntaje}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bts2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slideX}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "height",
                            0,
                            0,
                            "linear",
                            "${fondoPuntaje}",
                            '798px',
                            '798px'
                        ],
                        [
                            "eid309",
                            "display",
                            0,
                            0,
                            "linear",
                            "${puntaje}",
                            'none',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fondoPuntaje}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "slideX": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,0.50)', 'none'],
                            rect: ['0px', '2px', '1280px', '800px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            id: 'i_contentX',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_contentX.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '802px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid310",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,0,0,0.50)',
                            'rgba(0,0,0,0.50)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-19938881");
