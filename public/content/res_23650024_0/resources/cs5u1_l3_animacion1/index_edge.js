/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Helvetica': '',
            'neosans': '<link rel="stylesheet" href="font/fonts.css" type="text/css" media="screen" title="" charset="utf-8" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"EdgeCommons.js"
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
                            id: 'slide_20',
                            symbolName: 'slide_20',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_19',
                            symbolName: 'slide_19',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_18',
                            symbolName: 'slide_18',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_17',
                            symbolName: 'slide_17',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_16',
                            symbolName: 'slide_16',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_15',
                            symbolName: 'slide_15',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_14',
                            symbolName: 'slide_14',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_13',
                            symbolName: 'slide_13',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_12',
                            symbolName: 'slide_12',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_11',
                            symbolName: 'slide_11',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_10',
                            symbolName: 'slide_10',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_9',
                            symbolName: 'slide_9',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_8',
                            symbolName: 'slide_8',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_7',
                            symbolName: 'slide_7',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_6',
                            symbolName: 'slide_6',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_5',
                            symbolName: 'slide_5',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_4',
                            symbolName: 'slide_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['-30px', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_3',
                            symbolName: 'slide_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['-30px', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_2',
                            symbolName: 'slide_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-30px', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'slide_1',
                            symbolName: 'slide_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['-30px', '0', '1280', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            userClass: "slide"
                        },
                        {
                            id: 'b_act',
                            display: 'none',
                            type: 'image',
                            rect: ['1185px', '708px', '72px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"b_act3.svg",'0px','0px']
                        },
                        {
                            id: 'bts2',
                            display: 'none',
                            type: 'group',
                            rect: ['1190px', '739px', '90', '60', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bts22',
                                type: 'image',
                                rect: ['27px', '5px', '53px', '53px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"i_prev.svg",'0px','0px']
                            },
                            {
                                id: 'b_rei',
                                type: 'rect',
                                rect: ['25px', '0px', '65px', '60px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'header',
                            type: 'group',
                            rect: ['0', '0', '1280', '82', 'auto', 'auto'],
                            c: [
                            {
                                id: 'amarillo',
                                type: 'rect',
                                rect: ['0px', '0px', '1280px', '82px', 'auto', 'auto'],
                                fill: ["rgba(51,204,204,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'azul',
                                type: 'rect',
                                rect: ['1030px', '0px', '250px', '82px', 'auto', 'auto'],
                                fill: ["rgba(255,204,103,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'tipo',
                                type: 'text',
                                rect: ['1081px', '22px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Ampliación</p>",
                                align: "left",
                                font: ['neosans', [30, "px"], "rgba(80,80,80,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'titulo',
                                type: 'text',
                                rect: ['44px', '16', '921px', '49px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Segunda Guerra Mundial en el pacífico​</p>",
                                align: "left",
                                font: ['neosans', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", ""],
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
                            display: 'block',
                            type: 'image',
                            rect: ['1212px', '400px', '68px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_next.svg",'0px','0px']
                        },
                        {
                            id: 'next',
                            display: 'block',
                            type: 'rect',
                            rect: ['1212px', '400px', '68px', '98px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'i_prev',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '400px', '68px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_prev.svg",'0px','0px']
                        },
                        {
                            id: 'back',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '400px', '68px', '98px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'g_act',
                            display: 'none',
                            type: 'group',
                            rect: ['auto', '0px', '1280px', '800px', '0px', 'auto'],
                            c: [
                            {
                                id: 'act',
                                display: 'block',
                                type: 'rect',
                                rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'vAct',
                                type: 'image',
                                rect: ['1188px', '711px', '72px', '72px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"vAct.svg",'0px','0px']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '800', 'auto', 'auto'],
                            sizeRange: ['320px','1280px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1709",
                            "width",
                            0,
                            0,
                            "linear",
                            "${act}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid1712",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1563",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1701",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g_act}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1651",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1700",
                            "top",
                            0,
                            0,
                            "linear",
                            "${g_act}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1569",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1577",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1568",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1710",
                            "display",
                            0,
                            0,
                            "linear",
                            "${back}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1566",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1703",
                            "height",
                            0,
                            0,
                            "linear",
                            "${g_act}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid1579",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1707",
                            "display",
                            0,
                            0,
                            "linear",
                            "${act}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1715",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bts2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1576",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1575",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1578",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1562",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1565",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1704",
                            "width",
                            0,
                            0,
                            "linear",
                            "${g_act}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid1714",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cuenta}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1713",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_next}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1716",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_act}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1706",
                            "height",
                            0,
                            0,
                            "linear",
                            "${act}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid1711",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_prev}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1574",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1573",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1702",
                            "right",
                            0,
                            0,
                            "linear",
                            "${g_act}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1705",
                            "top",
                            0,
                            0,
                            "linear",
                            "${act}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1572",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1567",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1570",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1561",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1564",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1571",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide_10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1708",
                            "left",
                            0,
                            0,
                            "linear",
                            "${act}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "slide_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_1',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_1.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.60)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrar',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1690",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1691",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Hot_Spot": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 40, 40, 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 40]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "iniciar": 0,
                        "loop": 2000
                    },
                    data: [
                        [
                            "eid694",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid695",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid696",
                            "opacity",
                            1000,
                            1000,
                            "easeInQuad",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "bg_defecto_simbolo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'bg_defecto',
                            rect: [0, 0, 1024, 600, 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', 1024, 600, 'auto', 'auto'],
                                id: 'bg_000',
                                stroke: [0, 'rgba(255,255,255,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', '', 'nowrap'],
                                id: 'txt_medidas',
                                text: '1024px x 600px',
                                type: 'text',
                                rect: [35, '25', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 600]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bt_inicio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'nav_inicio_over',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/bt_inicio_hover.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'nav_inicio',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/bt_inicio.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', 50, 48, 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'hotspot_area_backCopy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "down": 1000,
                        "up": 2000
                    },
                    data: [
                        [
                            "eid1050",
                            "display",
                            0,
                            0,
                            "linear",
                            "${nav_inicio}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1051",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${nav_inicio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1052",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${nav_inicio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1053",
                            "display",
                            0,
                            0,
                            "linear",
                            "${nav_inicio_over}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1054",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${nav_inicio_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1055",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${nav_inicio_over}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "slide_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1281px', '801px', 'auto', 'auto'],
                            id: 'i_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/i_2.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_24',
                            opacity: '1',
                            rect: ['428px', '156px', '154px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_24.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_25',
                            opacity: '1',
                            rect: ['826px', '204px', '305px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_25.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_23',
                            opacity: '1',
                            rect: ['378px', '230px', '108px', '191px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_23.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_26',
                            opacity: '1',
                            rect: ['826px', '247px', '267px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_26.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_21',
                            opacity: '1',
                            rect: ['241px', '414px', '560px', '326px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_21.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_27',
                            opacity: '1',
                            rect: ['826px', '290px', '288px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_27.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_22',
                            opacity: '1',
                            rect: ['1038px', '483px', '95px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_22.png', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            display: 'none',
                            id: 'i_28',
                            opacity: '1',
                            rect: ['826px', '350px', '331px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_28.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            id: 'i_2a',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/i_2a.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_1',
                            rect: ['501px', '250px', '35px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_amp.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_2',
                            rect: ['411', '343', '35px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_amp.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_3',
                            rect: ['317px', '470px', '35px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_amp.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_4',
                            rect: ['1112px', '488px', '35px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_amp.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '800']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1698",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1693",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1694",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1697",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1696",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1692",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1695",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1699",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_28}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_3',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_3.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1686",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1687",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_4',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_4.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1650",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid1685",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1649",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid1684",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_5',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_5.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy3',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1682",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1683",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_6',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_6.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy4',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1680",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1681",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy4}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_7',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_7.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy5',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1679",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1678",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_8',
                            rect: [0, 0, '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_8.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy6',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1676",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1677",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_9',
                            rect: ['0', '0', '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_9.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy7',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1674",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1675",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy7}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_10',
                            rect: ['0', '0', '1281px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_10.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy8',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1673",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1672",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy8}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_11',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_11.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy9',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1670",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1671",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy9}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_12',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_12.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy11',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy11',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1668",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1669",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy11}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_13": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_13',
                            rect: ['0', 0, '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_13.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy12',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy12',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1666",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1667",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy12}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_14": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_14',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_14.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy13',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy13',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1664",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1665",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy13}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_15": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_15',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_15.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy14',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy14',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1662",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1663",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy14}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_16": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_16',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_16.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy15',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy15',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1660",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1661",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy15}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_17": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_17',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_17.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy16',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy16',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1658",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1659",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy16}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_18": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_18',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_18.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy17',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy17',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1657",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy17}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_19": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_19',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_19.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy18',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy18',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy18}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "slide_20": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'i_20',
                            rect: ['0', '0', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i_20.png', '0px', '0px']
                        },
                        {
                            userClass: 'cerrar',
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy19',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1280px', '801px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.6)']
                        },
                        {
                            rect: [1223, 4, '52px', '52px', 'auto', 'auto'],
                            userClass: 'cerrar',
                            type: 'image',
                            id: 'b_cerrarCopy19',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1653",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1652",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_cerrarCopy19}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "popup": {
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
                            id: 'recurso',
                            symbolName: 'recurso',
                            rect: ['0', '0', 1280, 800, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'b_cerrar',
                            rect: [1215, 12, '52px', '52px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/b_cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "recurso": {
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
                            id: 'r',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '1280px', '800px', 'auto', 'auto'],
                            fill: ['rgba(238,153,183,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1280, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tierra": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 340, 328]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-5531445");
