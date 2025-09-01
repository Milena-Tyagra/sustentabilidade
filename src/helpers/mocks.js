import { messages } from "./messages";

import papel from '../assets/papel.jpeg'
import tijolo from '../assets/tijolo.jpeg'
import cordas from '../assets/cordas.jpeg'
import decoracoes from '../assets/decoracoes.jpeg'
import conserva from '../assets/conserva.jpeg'
import xarope from '../assets/xarope.jpeg'

import extracao from '../assets/extracao.jpeg'
import separacao from '../assets/separacao.jpeg'
import secagem from '../assets/secagem.jpeg'
import imercao from '../assets/imercao.jpeg'


export const arts = [
    {
        title: messages.ART_TITLE_1,
        description: messages.ART_PRODUCT_1,
        image: papel,
    },
    {
        title: messages.ART_TITLE_2,
        description: messages.ART_PRODUCT_2,
        image: tijolo,
    },
    // {
    //     title: messages.ART_TITLE_3,
    //     description: messages.ART_PRODUCT_3,
    //     image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    // },
    {
        title: messages.ART_TITLE_4,
        description: messages.ART_PRODUCT_4,
        image: cordas,
    },
    {
        title: messages.ART_TITLE_5,
        description: messages.ART_PRODUCT_5,
        image: decoracoes,
    },
    {
        title: messages.ART_TITLE_6,
        description: messages.ART_PRODUCT_6,
        image: conserva,
    },
    {
        title: messages.ART_TITLE_7,
        description: messages.ART_PRODUCT_7,
        image: xarope,
    },
];

export const artSteps = [
    {
        description: messages.ART_STEP_1,
        image: extracao,
    },
    {
        description: messages.ART_STEP_2,
        image: separacao,
    },
    {
        description: messages.ART_STEP_3,
        image: secagem,
    },
    {
        description: messages.ART_STEP_4,
        image: imercao,
    },
    {
        description: messages.ART_STEP_5,
        image: decoracoes,
    },
]

export const recepies = [
    {
        title: messages.ART_TITLE_2,
        materials: [
            messages.ART_PRODUCT_2_MATERIAL_1,
            messages.ART_PRODUCT_2_MATERIAL_2,
            messages.ART_PRODUCT_2_MATERIAL_3,
            messages.ART_PRODUCT_2_MATERIAL_4,
            messages.ART_PRODUCT_2_MATERIAL_5,
            messages.ART_PRODUCT_2_MATERIAL_6,
        ],
        steps: [
            {
                text: messages.ART_PRODUCT_2_STEP_1_TITLE,
                substeps: [
                    messages.ART_PRODUCT_2_STEP_1_1,
                    messages.ART_PRODUCT_2_STEP_1_2,
                    messages.ART_PRODUCT_2_STEP_1_3,
                ]
            },
            {
                text: messages.ART_PRODUCT_2_STEP_2_TITLE,
                substeps: [
                    messages.ART_PRODUCT_2_STEP_2_1,
                ]
            },
            {
                text: messages.ART_PRODUCT_2_STEP_3_TITLE,
                substeps: [
                    messages.ART_PRODUCT_2_STEP_3_1,
                    messages.ART_PRODUCT_2_STEP_3_2,
                ]
            },
            {
                text: messages.ART_PRODUCT_2_STEP_4_TITLE,
                substeps: [
                    messages.ART_PRODUCT_2_STEP_4_1,
                    messages.ART_PRODUCT_2_STEP_4_2,
                ]
            },
            {
                text: messages.ART_PRODUCT_2_STEP_5_TITLE,
                substeps: [
                    messages.ART_PRODUCT_2_STEP_5_1,
                    messages.ART_PRODUCT_2_STEP_5_2,
                ]
            }
        ],
        important_notes: [messages.ART_PRODUCT_2_IMPORTANT_NOTE]
    },
    {
        title: messages.ART_TITLE_1,
        materials: [
            messages.ART_PRODUCT_1_MATERIAL_1,
            messages.ART_PRODUCT_1_MATERIAL_2,
            messages.ART_PRODUCT_1_MATERIAL_3,
            messages.ART_PRODUCT_1_MATERIAL_4,
            messages.ART_PRODUCT_1_MATERIAL_5,
            messages.ART_PRODUCT_1_MATERIAL_6,
            messages.ART_PRODUCT_1_MATERIAL_7,
            messages.ART_PRODUCT_1_MATERIAL_8,
            messages.ART_PRODUCT_1_MATERIAL_9,
        ],
        steps: [
            {
                text: messages.ART_PRODUCT_2_STEP_1_TITLE,
                substeps: [
                    messages.ART_PRODUCT_1_STEP_1_1,
                ]
            },
            {
                text: messages.ART_PRODUCT_1_STEP_2_TITLE,
                substeps: [
                    messages.ART_PRODUCT_1_STEP_2_1,
                    messages.ART_PRODUCT_1_STEP_2_2,
                    messages.ART_PRODUCT_1_STEP_2_3,
                    messages.ART_PRODUCT_1_STEP_2_4,
                ]
            },
            {
                text: messages.ART_PRODUCT_1_STEP_3_TITLE,
                substeps: [
                    messages.ART_PRODUCT_1_STEP_3_1,
                    messages.ART_PRODUCT_1_STEP_3_2,
                ]
            },
            {
                text: messages.ART_PRODUCT_1_STEP_4_TITLE,
                substeps: [
                    messages.ART_PRODUCT_1_STEP_4_1,
                    messages.ART_PRODUCT_1_STEP_4_2,
                ]
            },
            {
                text: messages.ART_PRODUCT_1_STEP_5_TITLE,
                substeps: [
                    messages.ART_PRODUCT_1_STEP_5_1,
                    messages.ART_PRODUCT_1_STEP_5_2,
                ]
            },
            {
                text: messages.ART_PRODUCT_2_STEP_5_TITLE,
                substeps: [
                    displayMessage("ART_PRODUCT_1_STEP_6_1"),
                    displayMessage("ART_PRODUCT_1_STEP_6_2"),
                    displayMessage("ART_PRODUCT_1_STEP_6_3"),
                ]
            }
        ],
    },
    {
        title: displayMessage("ART_TITLE_7"),
        cooking: true,
        materials: [
            displayMessage("ART_PRODUCT_7_MATERIAL_1"),
            displayMessage("ART_PRODUCT_7_MATERIAL_2"),
            displayMessage("ART_PRODUCT_7_MATERIAL_3"),
            displayMessage("ART_PRODUCT_7_MATERIAL_4"),
            displayMessage("ART_PRODUCT_7_MATERIAL_5"),
            displayMessage("ART_PRODUCT_7_MATERIAL_6"),
        ],
        steps: [

            { text: displayMessage("ART_PRODUCT_7_STEP_1") },
            { text: displayMessage("ART_PRODUCT_7_STEP_2") },
            { text: displayMessage("ART_PRODUCT_7_STEP_3") },
            { text: displayMessage("ART_PRODUCT_7_STEP_4") },
            { text: displayMessage("ART_PRODUCT_7_STEP_5") },
            { text: displayMessage("ART_PRODUCT_7_STEP_6") },
            { text: displayMessage("ART_PRODUCT_7_STEP_7") },
            { text: displayMessage("ART_PRODUCT_7_STEP_8") },
        ],
        howToUse: [
            displayMessage("ART_PRODUCT_7_USE_RECOMENDATION_1"),
            displayMessage("ART_PRODUCT_7_USE_RECOMENDATION_2")
        ]
    },
    {
        title: displayMessage("ART_TITLE_6"),
        cooking: true,
        info: '',
        materials: [
            displayMessage("ART_PRODUCT_6_MATERIAL_1"),
            displayMessage("ART_PRODUCT_6_MATERIAL_2"),
            displayMessage("ART_PRODUCT_6_MATERIAL_3"),
            displayMessage("ART_PRODUCT_6_MATERIAL_4"),
            displayMessage("ART_PRODUCT_6_MATERIAL_5"),
        ],
        steps: [
            {
                text: displayMessage("ART_PRODUCT_6_STEP_1_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_6_STEP_1_1"),
                    displayMessage("ART_PRODUCT_6_STEP_1_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_6_STEP_2_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_6_STEP_2_1"),
                    displayMessage("ART_PRODUCT_6_STEP_2_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_6_STEP_3_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_6_STEP_3_1"),
                    displayMessage("ART_PRODUCT_6_STEP_3_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_6_STEP_4_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_6_STEP_4_1"),
                    displayMessage("ART_PRODUCT_6_STEP_4_2"),
                ]
            },
            
        ],
        howToUse: [
            displayMessage("ART_PRODUCT_6_USE_RECOMENDATION_1"),
            displayMessage("ART_PRODUCT_6_USE_RECOMENDATION_2"),
            displayMessage("ART_PRODUCT_6_USE_RECOMENDATION_3"),
        ],
        important_notes: [
            displayMessage("ART_PRODUCT_6_IMPORTANT_NOTE_1"),
            displayMessage("ART_PRODUCT_6_IMPORTANT_NOTE_2"),
        ]
    },
]
