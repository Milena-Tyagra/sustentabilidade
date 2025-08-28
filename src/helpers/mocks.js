import { messages } from "./messages";

import papel from '../assets/papel.jpeg'
import tijolo from '../assets/tijolo.jpeg'
import cordas from '../assets/cordas.jpeg'
import decoracoes from '../assets/decoracoes.jpeg'
import conserva from '../assets/conserva.jpeg'
import xarope from '../assets/xarope.jpeg'

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
    {
        title: messages.ART_TITLE_3,
        description: messages.ART_PRODUCT_3,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
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
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
        description: messages.ART_STEP_2,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
        description: messages.ART_STEP_3,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
        description: messages.ART_STEP_4,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
        description: messages.ART_STEP_5,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
]

export const products_examples = [
    messages.PRODUCT_1,
    messages.PRODUCT_2,
    messages.PRODUCT_3,
    messages.PRODUCT_4,
    messages.PRODUCT_5,
    messages.PRODUCT_6,
    messages.PRODUCT_7,
];

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
                    messages.ART_PRODUCT_1_STEP_6_1,
                    messages.ART_PRODUCT_1_STEP_6_2,
                    messages.ART_PRODUCT_1_STEP_6_3,
                ]
            }
        ],
    }
]
