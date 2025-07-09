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
            "edge_includes/jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0', '0', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'slide_2',
                            type: 'group',
                            rect: ['-20px', '0px', '1280', '800', 'auto', 'auto'],
                            userClass: "slide",
                            c: [
                            {
                                id: 'i_content_2',
                                type: 'image',
                                rect: ['8px', '0', '1280px', '800px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"i_content_2.png",'0px','0px']
                            },
                            {
                                id: 'b_1_1',
                                type: 'ellipse',
                                rect: ['147px', '261px', '16', '16', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgba(51,204,204,1.00)","solid"],
                                userClass: "radio r_1"
                            },
                            {
                                id: 'b_1_2',
                                type: 'ellipse',
                                rect: ['147px', '368px', '16', '16', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgba(51,204,204,1.00)","solid"],
                                userClass: "radio r_1"
                            },
                            {
                                id: 'b_1_3',
                                type: 'ellipse',
                                rect: ['147px', '475px', '16', '16', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgba(51,204,204,1.00)","solid"],
                                userClass: "radio r_1"
                            },
                            {
                                id: 'b_1_4',
                                type: 'ellipse',
                                rect: ['147px', '581px', '16', '16', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgba(51,204,204,1.00)","solid"],
                                userClass: "radio r_1"
                            },
                            {
                                id: 'enunciadoCopy',
                                type: 'text',
                                rect: ['67px', '111px', '984', '54', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Completa el texto anterior, de acuerdo con las siguientes ideas:​</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'slide_1',
                            type: 'group',
                            rect: ['-12px', '0px', '1280', '800', 'auto', 'auto'],
                            userClass: "slide",
                            c: [
                            {
                                id: 'i_content',
                                type: 'image',
                                rect: ['0px', '0', '1280px', '800px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"i_content.png",'0px','0px']
                            },
                            {
                                id: 'enunciado',
                                type: 'text',
                                rect: ['67px', '112px', '984', '54', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Lee el atentamente el siguiente texto:​</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                            }]
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
                            rect: ['14px', '616px', '91', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'bt1',
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
                            id: 'header',
                            type: 'group',
                            rect: ['0px', '0px', '1280', '82', 'auto', 'auto'],
                            c: [
                            {
                                id: 'azul',
                                type: 'rect',
                                rect: ['0px', '0px', '1280px', '82px', 'auto', 'auto'],
                                fill: ["rgba(51,204,204,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'amarillo',
                                type: 'rect',
                                rect: ['1030px', '0px', '250px', '82px', 'auto', 'auto'],
                                fill: ["rgba(226,103,74,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'tipo',
                                type: 'text',
                                rect: ['1094px', '22px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">Actividad</p>",
                                align: "left",
                                font: ['neosans', [30, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'titulo',
                                type: 'text',
                                rect: ['44px', '16', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">La Guerra de Vietnam​​</p>",
                                align: "left",
                                font: ['neosans', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'cuenta',
                            display: 'none',
                            type: 'group',
                            rect: ['0px', '0', '1280', '800px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'fondoCuenta',
                                type: 'rect',
                                rect: ['0px', '82px', '1280px', '718px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0.40)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'pagina',
                                type: 'text',
                                rect: ['591px', '387px', '98px', '27', 'auto', 'auto'],
                                text: "0",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'contieneCuenta',
                                type: 'ellipse',
                                rect: ['522px', '281px', '236px', '236px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50% 50%"],
                                fill: ["rgba(255,204,103,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'txt_contador',
                                type: 'text',
                                rect: ['416px', '366px', '448px', '67px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​1</p>",
                                align: "center",
                                font: ['neosans', [60, "px"], "rgba(80,80,80,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'i_next',
                            type: 'image',
                            rect: ['1212px', '400px', '68px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_next2.svg",'0px','0px']
                        },
                        {
                            id: 'i_prev',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '400px', '68px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_prev2.svg",'0px','0px']
                        },
                        {
                            id: 'b_next',
                            type: 'rect',
                            rect: ['1212px', '400px', '68px', '93px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(238,153,183,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'b_back',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1px', '397px', '69px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(238,153,183,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'gp',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            c: [
                            {
                                id: 'fondoo2',
                                type: 'rect',
                                rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0.40)"],
                                stroke: [2,"rgb(211, 0, 74)","none"]
                            },
                            {
                                id: 'dialogo3',
                                type: 'image',
                                rect: ['460px', '318px', '362px', '139px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"dialogo.png",'0px','0px']
                            },
                            {
                                id: 'puntos',
                                display: 'block',
                                type: 'text',
                                rect: ['517', '354px', '247', '61px', 'auto', 'auto'],
                                text: "0",
                                align: "center",
                                font: ['neosans', [24, ""], "rgba(51,51,51,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['771px', '307px', '59px', '61px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(0,0,0,0.498)"],
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
                                id: 'dialogo2',
                                type: 'image',
                                rect: ['458px', '330px', '362px', '139px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"dialogo.png",'0px','0px']
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['491px', '371px', '276px', '83px', 'auto', 'auto'],
                                text: "Debes responder todas las preguntas antes de revisar la actividad.",
                                align: "center",
                                font: ['neosans', [22, "px"], "rgba(51,51,51,1.00)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'bt_cerrar',
                                type: 'ellipse',
                                rect: ['777px', '326px', '55px', '54px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0.498)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '800px', 'auto', 'auto'],
                            sizeRange: ['','1280px','',''],
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
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_prev}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "left",
                            0,
                            0,
                            "linear",
                            "${puntos}",
                            '517px',
                            '517px'
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_back}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cuenta}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            0,
                            "linear",
                            "${puntos}",
                            '354px',
                            '354px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bts1}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid29",
                            "height",
                            0,
                            0,
                            "linear",
                            "${bts2}",
                            '156px',
                            '156px'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bts2}",
                            '607px',
                            '607px'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bts2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid19",
                            "color",
                            0,
                            0,
                            "linear",
                            "${puntos}",
                            'rgba(51,51,51,1.00)',
                            'rgba(51,51,51,1.00)'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bts2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aviso}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bts1}",
                            '616px',
                            '616px'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bts1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${puntos}",
                            'block',
                            'block'
                        ],
                        [
                            "eid35",
                            "height",
                            0,
                            0,
                            "linear",
                            "${puntos}",
                            '61px',
                            '61px'
                        ],
                        [
                            "eid18",
                            "width",
                            0,
                            0,
                            "linear",
                            "${puntos}",
                            '247px',
                            '247px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-24482691");
