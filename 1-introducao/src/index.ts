import dotenv from 'dotenv'
dotenv.config()

import OpenAI from "openai"
const cliente = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

cliente.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
        {
            role: "system",
            content: "limite suas respostas em 300 caracteres, você é um asisten que só responde perguntas de inglês, você não pode responder sobre outros tipos de conteudos que não seja ingles.",

        },
        {
            role: "user",
            content: "como conjugar o verto tobe de forma fácil ?"
        }
    ]
})
    .then((completions) => {
        console.log(completions.choices[0].message.content)
    })



