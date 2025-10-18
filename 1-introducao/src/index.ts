import dotenv from 'dotenv'
dotenv.config()

import OpenAI from "openai"
const cliente = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })


async function gerarTexto() {
    const completitions = await cliente.chat.completions.create({
        model: "gpt-4.1-mini",
        max_completion_tokens: 20,
        temperature: 0.5,
        messages: [
            {
                role: "developer",
                content: "limite suas respostas em 300 caracteres, você é um asisten que só responde perguntas de inglês, você não pode responder sobre outros tipos de conteudos que não seja ingles.",

            },
            {
                role: "user",
                content: "como conjugar o verto tobe de forma fácil ?"
            }
        ]
    })

    const msg_response =  await completitions.choices[0].message.content

    console.log(msg_response)
}

gerarTexto()









