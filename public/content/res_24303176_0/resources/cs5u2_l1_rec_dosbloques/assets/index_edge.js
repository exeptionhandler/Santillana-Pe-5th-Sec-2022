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
                            rect: ['0', '0', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_fondo.png",'0px','0px']
                        },
                        {
                            id: 'i_mundo_libre',
                            type: 'image',
                            rect: ['40px', '98px', '718px', '649px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_mundo%20libre.png",'0px','0px']
                        },
                        {
                            id: 'i_t1',
                            type: 'image',
                            rect: ['829px', '210px', '347px', '55px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t1.png",'0px','0px']
                        },
                        {
                            id: 'i_t2',
                            type: 'image',
                            rect: ['829px', '302px', '356px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t2.png",'0px','0px']
                        },
                        {
                            id: 'i_t3',
                            type: 'image',
                            rect: ['829px', '403px', '347px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t3.png",'0px','0px']
                        },
                        {
                            id: 'i_t4',
                            type: 'image',
                            rect: ['830px', '489px', '346px', '32px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t4.png",'0px','0px']
                        },
                        {
                            id: 'i_t5',
                            type: 'image',
                            rect: ['832px', '558px', '353px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_t5.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            type: 'text',
                            rect: ['50px', '39px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Los dos bloques en Europa en 1948",
                            userClass: "textos",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'i_comunistas',
                            type: 'image',
                            rect: ['327px', '99px', '427px', '569px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_comunistas.png",'0px','0px']
                        },
                        {
                            id: 'i_alemana',
                            type: 'image',
                            rect: ['272px', '317px', '114px', '176px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_alemana.png",'0px','0px']
                        },
                        {
                            id: 'i_cortina_de_hierro',
                            type: 'image',
                            rect: ['50px', '104px', '699px', '650px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_cortina%20de%20hierro.png",'0px','0px']
                        },
                        {
                            id: 'i_diviciones',
                            type: 'image',
                            rect: ['50px', '104px', '700px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_diviciones.png",'0px','0px']
                        },
                        {
                            id: 'i_fechas',
                            type: 'image',
                            rect: ['51px', '403px', '543px', '337px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"i_fechas.png",'0px','0px']
                        },
                        {
                            id: 'i_textos',
                            type: 'image',
                            rect: ['4px', '62px', '800px', '717px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_textos.png",'0px','0px']
                        },
                        {
                            id: 'i_rosa',
                            type: 'image',
                            rect: ['-189px', '246px', '820px', '830px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"i_rosa.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'i_cab',
                            type: 'image',
                            rect: ['811px', '76px', '400px', '103px', 'auto', 'auto'],
                            clip: 'rect(38px 400px 102.51256561279px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"i_cab.png",'0px','0px']
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
                            "eid20",
                            "opacity",
                            17000,
                            1000,
                            "linear",
                            "${i_fechas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${i_mundo_libre}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${i_alemana}",
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
                            "eid12",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${i_comunistas}",
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
                            "eid16",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${i_cortina_de_hierro}",
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
                            "eid18",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${i_t5}",
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
