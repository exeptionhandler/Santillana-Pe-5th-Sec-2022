/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
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
                            id: 'i_fondo',
                            type: 'image',
                            rect: ['0', '-32px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_fondo.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            type: 'text',
                            rect: ['50px', '23px', 'auto', 'auto', 'auto', 'auto'],
                            text: "La expansión máxima del Eje",
                            userClass: "",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(51,204,204,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'i_aliados',
                            type: 'image',
                            rect: ['50px', '106px', '1087px', '570px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_aliados.png",'0px','0px']
                        },
                        {
                            id: 'i_colaboradores',
                            type: 'image',
                            rect: ['355px', '114px', '805px', '485px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_colaboradores.png",'0px','0px']
                        },
                        {
                            id: 'i_neutrales',
                            type: 'image',
                            rect: ['320px', '180px', '423px', '314px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_neutrales.png",'0px','0px']
                        },
                        {
                            id: 'i_potencias',
                            type: 'image',
                            rect: ['435px', '222px', '636px', '336px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_potencias.png",'0px','0px']
                        },
                        {
                            id: 'i_expa',
                            type: 'image',
                            rect: ['364px', '160px', '852px', '448px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_expa.png",'0px','0px']
                        },
                        {
                            id: 'i_t1',
                            type: 'image',
                            rect: ['62px', '681px', '220px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t1.png",'0px','0px']
                        },
                        {
                            id: 'i_t2',
                            type: 'image',
                            rect: ['282', '676px', '254px', '64px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t2.png",'0px','0px']
                        },
                        {
                            id: 'i_t3',
                            type: 'image',
                            rect: ['544px', '679px', '213px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t3.png",'0px','0px']
                        },
                        {
                            id: 'i_t4',
                            type: 'image',
                            rect: ['757', '680px', '263px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t4.png",'0px','0px']
                        },
                        {
                            id: 'i_t5',
                            type: 'image',
                            rect: ['1028px', '694px', '176px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t5.png",'0px','0px']
                        },
                        {
                            id: 'i_diviciones',
                            type: 'image',
                            rect: ['53px', '114px', '1163px', '563px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_diviciones.png",'0px','0px']
                        },
                        {
                            id: 'i_textos',
                            type: 'image',
                            rect: ['186px', '137px', '974px', '515px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_textos.png",'0px','0px']
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
                    duration: 18000,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${i_t5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${i_neutrales}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            8000,
                            1000,
                            "linear",
                            "${i_t3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${i_t1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${i_t2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            12000,
                            1000,
                            "linear",
                            "${i_t4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${i_potencias}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${i_expa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${i_colaboradores}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${i_aliados}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-106337430");
