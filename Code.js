jatos.onLoad(function () {
   
        
        Survey.StylesManager.applyTheme("modern");
        Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
        
        
        window.survey = new Survey.Model({
        
//         var json = {
            "title": "TÉCNICAS DE ASMR",
            "description": " ",
            "pages": [
                    {
                       "elements": [
                       
                        {
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Para finalizar, responda por favor las siguientes preguntas"
                        },/*{
                            "type": "emotionsratings",
                            "name": "AgradoVideo",
                            "title": "Cuál es su nivel de agrado o desagrado con respecto al vídeo que se presentó",
                            "choices": ["1", "2", "3", "4", "5"]
                        },*/{
                            "type": "barrating",
                            "name": "AgradoVideo",
                            "ratingTheme": "bars-pill",
                            showSelectedRating: true,
                            showValues : true,
                            "title": "Cuál es su nivel de agrado o desagrado con respecto al VÍDEO que se presentó.",
                            "choices": ["    &#128545;", "10", "20", "30", "40", "50", "60", "70", "80", "90", "	&#128513;    "]
                            
                        },{
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Presione el botón siguiente para continuar."
                        }/*{
                            "type": "comment",
                            "name": "Descripcion",
                            "title": "Describa en este espacio lo que sintió al ver el video."
                        },{
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Presione el botón siguiente para continuar."
                        }*/
                    ] 
                    },{
                       "elements": [
                       
                        {
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Para finalizar, responda por favor las siguientes preguntas"
                        },{
                            "type": "barrating",
                            "name": "AgradoPublicidad",
                            "ratingTheme": "bars-pill",
                            showSelectedRating: true,
                            showValues : true,
                            "title": "Cuál es su nivel de agrado o desagrado con respecto a la PUBLICIDAD que apareció en el vídeo que se presentó",
                            "choices": ["    &#128545;", "10", "20", "30", "40", "50", "60", "70", "80", "90", "	&#128513;    "]
                            
                        },{
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Presione el botón siguiente para continuar."
                        }/*{
                            "type": "barrating",
                            "name": "EmocionVideo",
                            "ratingTheme": "bars-pill",
                            showSelectedRating: true,
                            showValues : true,
                            "title": "Cuando se presentó la publicidad, ¿Cuál fue su sensación ? siendo 0 Totalmente desagradable y 100 Totalmente agradable.",
                            "choices": ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]
                            
                        },{
                            "type": "comment",
                            "name": "Descripcion",
                            "title": "Describa en este espacio lo que sintió al ver el video."
                        },{
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Presione el botón siguiente para continuar."
                        }*/
                    ] 
                    },{
                       "elements": [
                       
                        {
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Para finalizar, responda por favor las siguientes preguntas"
                        },{
                            "type": "comment",
                            "name": "SensacionVideo",
                            "title": "Describa en este espacio lo que sintió al ver el VÍDEO."
                        },{
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Presione el botón siguiente para continuar."
                        }
                    ] 
                    },{
                       "elements": [
                       
                        {
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Para finalizar, responda por favor las siguientes preguntas"
                        },{
                            "type": "comment",
                            "name": "SensacionPublicidad",
                            "title": "Describa en este espacio lo que sintió al cuando apareció la PUBLICIDAD."
                        },{
                            "type": "html",
                            "name": "Instruciones3",
                            "html": "Presione el botón Enviar para Terminar."
                        }
                    ] 
                    },{
                       "elements": [
                       
                        {
                                    "type": "imagepicker",
                                    "name": "RecuerdoMarcas",
                                    "title": "¿Cuál de las siguientes marcas recuerda usted que se presentaron en el video?",
                                    "multiSelect" : "true",
                                    "choices": [
                                        {
                                            "value": "Foto 1",
                                            "imageLink": "Logos/enfocap.png"
                                        },{
                                            "value": "Foto 2",
                                            "imageLink": "Logos/focus.png"
                                        },{
                                            "value": "Foto 3",
                                            "imageLink": "Logos/ilustri.png"
                                        },{
                                            "value": "Foto 4",
                                            "imageLink": "Logos/logo2.png"
                                        },{
                                            "value": "Foto 5",
                                            "imageLink": "Logos/logo3.png"
                                        },{
                                            "value": "Foto 6",
                                            "imageLink": "Logos/logo5.jpg"
                                        },{
                                            "value": "Foto 7",
                                            "imageLink": "Logos/logo6.jpg"
                                        },{
                                            "value": "Foto 8",
                                            "imageLink": "Logos/logo7.jpg"
                                        },{
                                            "value": "Foto 9",
                                            "imageLink": "Logos/logo8.jpg"
                                        },
                                    ],
                                },
                    ] 
                    },{
                       "elements": [
                       
                        {
                                    "type": "imagepicker",
                                    "name": "GustoMarcas",
                                    "title": "De las marcas que recuerda usted que se presentaron en el video ¿cuál o cuáles le gustaron más?",
                                    "multiSelect" : "true",
                                    "choices": [
                                        {
                                            "value": "Foto 1",
                                            "imageLink": "Logos/enfocap.png"
                                        },{
                                            "value": "Foto 2",
                                            "imageLink": "Logos/focus.png"
                                        },{
                                            "value": "Foto 3",
                                            "imageLink": "Logos/ilustri.png"
                                        },{
                                            "value": "Foto 4",
                                            "imageLink": "Logos/logo2.png"
                                        },{
                                            "value": "Foto 5",
                                            "imageLink": "Logos/logo3.png"
                                        },{
                                            "value": "Foto 6",
                                            "imageLink": "Logos/logo5.jpg"
                                        },{
                                            "value": "Foto 7",
                                            "imageLink": "Logos/logo6.jpg"
                                        },{
                                            "value": "Foto 8",
                                            "imageLink": "Logos/logo7.jpg"
                                        },{
                                            "value": "Foto 9",
                                            "imageLink": "Logos/logo8.jpg"
                                        },
                                    ],
                                },
                    ] 
                    }
         // Cierra página
         // Cierra página 
            ]
//         };
    });
//         window.survey = new Survey.Model(json);
        survey.showPageTitles = "top";
        survey.showProgressBar = "bottom";
        survey.showQuestionNumbers = "off";
        survey.completeText = "Enviar";
        survey.pageNextText = "Siguiente";
        survey.	pagePrevText = "Anterior";
//         survey.getQuestionByName('choosepicture12').showLabel = "true";

        
//         survey.render();
        survey.onComplete.add(function (result) {
                $("#surveyElement").hide(); // Hides the 'Thank you for completing ...' message
                jatos.submitResultData(JSON.stringify(result.data), jatos.startNextComponent);
            });

        //Create showdown mardown converter
//         var converter = new showdown.Converter();
//         survey
//             .onTextMarkdown
//         //         .add(function (survey, options) {
//         //             //convert the mardown text to html
//         //             var str = converter.makeHtml(options.text);
//         //             //remove root paragraphs <p></p>
//         //             str = str.substring(3);
//         //             str = str.substring(0, str.length - 4);
//         //             //set html
//         //             options.html = str;
//         //         });
            
       
        
        $("#surveyElement").Survey({model: survey});

});
