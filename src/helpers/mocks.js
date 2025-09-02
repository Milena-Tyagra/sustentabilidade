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

import { displayMessage } from "../components/messages/Message";


export const arts = [
    {
        title: displayMessage("ART_TITLE_1"),
        description: displayMessage("ART_PRODUCT_1"),
        image: papel,
    },
    {
        title: displayMessage("ART_TITLE_2"),
        description: displayMessage("ART_PRODUCT_2"),
        image: tijolo,
    },
    // {
    //     title: displayMessage("ART_TITLE_3"),
    //     description: displayMessage("ART_PRODUCT_3"),
    //     image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    // },
    {
        title: displayMessage("ART_TITLE_4"),
        description: displayMessage("ART_PRODUCT_4"),
        image: cordas,
    },
    {
        title: displayMessage("ART_TITLE_5"),
        description: displayMessage("ART_PRODUCT_5"),
        image: decoracoes,
    },
    {
        title: displayMessage("ART_TITLE_6"),
        description: displayMessage("ART_PRODUCT_6"),
        image: conserva,
    },
    {
        title: displayMessage("ART_TITLE_7"),
        description: displayMessage("ART_PRODUCT_7"),
        image: xarope,
    },
];

export const artSteps = [
    {
        description: displayMessage("ART_STEP_1"),
        image: extracao,
    },
    {
        description: displayMessage("ART_STEP_2"),
        image: separacao,
    },
    {
        description: displayMessage("ART_STEP_3"),
        image: secagem,
    },
    {
        description: displayMessage("ART_STEP_4"),
        image: imercao,
    },
    {
        description: displayMessage("ART_STEP_5"),
        image: decoracoes,
    },
]

export const recepies = [
    {
        title: displayMessage("ART_TITLE_2"),
        materials: [
            displayMessage("ART_PRODUCT_2_MATERIAL_1"),
            displayMessage("ART_PRODUCT_2_MATERIAL_2"),
            displayMessage("ART_PRODUCT_2_MATERIAL_3"),
            displayMessage("ART_PRODUCT_2_MATERIAL_4"),
            displayMessage("ART_PRODUCT_2_MATERIAL_5"),
            displayMessage("ART_PRODUCT_2_MATERIAL_6"),
        ],
        steps: [
            {
                text: displayMessage("ART_PRODUCT_2_STEP_1_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_2_STEP_1_1"),
                    displayMessage("ART_PRODUCT_2_STEP_1_2"),
                    displayMessage("ART_PRODUCT_2_STEP_1_3"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_2_STEP_2_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_2_STEP_2_1"),
                    displayMessage("ART_PRODUCT_2_STEP_2_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_2_STEP_3_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_2_STEP_3_1"),
                    displayMessage("ART_PRODUCT_2_STEP_3_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_2_STEP_4_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_2_STEP_4_1"),
                    displayMessage("ART_PRODUCT_2_STEP_4_2"),
                    displayMessage("ART_PRODUCT_2_STEP_4_3"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_2_STEP_5_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_2_STEP_5_1"),
                    displayMessage("ART_PRODUCT_2_STEP_5_2"),
                ]
            }
        ],
        important_notes: [displayMessage("ART_PRODUCT_2_IMPORTANT_NOTE")]
    },
    {
        title: displayMessage("ART_TITLE_1"),
        materials: [
            displayMessage("ART_PRODUCT_1_MATERIAL_1"),
            displayMessage("ART_PRODUCT_1_MATERIAL_2"),
            displayMessage("ART_PRODUCT_1_MATERIAL_3"),
            displayMessage("ART_PRODUCT_1_MATERIAL_4"),
            displayMessage("ART_PRODUCT_1_MATERIAL_5"),
            displayMessage("ART_PRODUCT_1_MATERIAL_6"),
            displayMessage("ART_PRODUCT_1_MATERIAL_7"),
            displayMessage("ART_PRODUCT_1_MATERIAL_8"),
            displayMessage("ART_PRODUCT_1_MATERIAL_9"),
        ],
        steps: [
            {
                text: displayMessage("ART_PRODUCT_2_STEP_1_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_1_STEP_1_1"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_1_STEP_2_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_1_STEP_2_1"),
                    displayMessage("ART_PRODUCT_1_STEP_2_2"),
                    displayMessage("ART_PRODUCT_1_STEP_2_3"),
                    displayMessage("ART_PRODUCT_1_STEP_2_4"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_1_STEP_3_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_1_STEP_3_1"),
                    displayMessage("ART_PRODUCT_1_STEP_3_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_1_STEP_4_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_1_STEP_4_1"),
                    displayMessage("ART_PRODUCT_1_STEP_4_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_1_STEP_5_TITLE"),
                substeps: [
                    displayMessage("ART_PRODUCT_1_STEP_5_1"),
                    displayMessage("ART_PRODUCT_1_STEP_5_2"),
                ]
            },
            {
                text: displayMessage("ART_PRODUCT_2_STEP_5_TITLE"),
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

export const managers = [
    'Eduardo S. Heusser'
]

export const advisors = [
    'Valéria França'
]

export const teachers = [
    'Mariléia Mallmann'
]

export const students = [
    'Alessandra Alves',
    'Ana Carolina Da Rocha Barbosa',
    'Beatriz Borges Dos Santos',
    'Eduarda Alves',
    'Eloá Elias Da Cruz',
    'Ester De Andrade França Da Rocha',
    'Gabrielly Vaz',
    'Jacqueline Flores Piovesan',
    'João Vitor Ramos',
    'Kaio Henrique Denzer Da Silva',
    'Kauan Schroeder Barth Corrêa',
    'Liandra Anacleto Scheel',
    'Luan Gabriel Steinbach',
    'Marcos Gustavo Da Costa',
    'Murillo Vinícius Da Silva',
    'Natasha Trombotto Elias',
    'Nícolas Adolfo Da Silva',
    'Nicoly Boing Marcelino',
    'Pedro Vinicius Zandonai',
    'Samuel Vinicius Da Silva Calisto',
    'Tiago Henrique Vieira',
    'Victor Cristiano Cavichiolli',
    'Vinícius José Da Silva',
    'Yanka Thayná Rossini',
    'Yara Rafaela Jacinto',
    'Yarah Beatriz Ibers'
]

export const exhibitors = [
    'Natasha Trombotto Elias',
    'Victor Cristiano Cavichiolli'
]

export const farmers = [
    'Claudir Novaski',
    'Daniela Mewes',
    'Lindia de Souza',
    'Luiz Mewes',
    'Robson Voss'
]

export const artisains = [
    'Denise Casas',
    'Elusa I. S. Fuhrmann',
    'Jamile Thauany',
    'Kaio E. Schroeder',
    'Luzia da Silva',
    'Valdemir Borges'
]

export const interpreters = [
    
]

export const developers = [
    'Milena Tyagra'
]

export const acknowledges = [
    displayMessage("ACKNOWLEDMENTS_1"),
    displayMessage("ACKNOWLEDMENTS_2"),
    displayMessage("ACKNOWLEDMENTS_3"),
    displayMessage("ACKNOWLEDMENTS_4"),
    displayMessage("ACKNOWLEDMENTS_5"),
    displayMessage("ACKNOWLEDMENTS_6"),
    displayMessage("ACKNOWLEDMENTS_7"),
    displayMessage("ACKNOWLEDMENTS_8"),
    displayMessage("ACKNOWLEDMENTS_9"),
    displayMessage("ACKNOWLEDMENTS_10"),
]



