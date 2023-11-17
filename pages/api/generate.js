import { OpenAIStream } from "../../utils/OpenAIStream";
import { outputOne, outputTwo, Prented, companyData } from "../../asset/prompt"

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
}

export const config = {
    runtime: "edge",
};

function generateSteps(output) {
    switch (output) {
        case "outputOne":
            return (companyData + outputOne)
        case "outputTwo":
            return (companyData + outputTwo)
        default:
            break;
    }
}

const handler = async (req) => {
    const { prompt } = (await req.json());

    if (!prompt) {
        return new Response("No prompt in the request", { status: 400 });
    }

    const payload = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: Prented },
            { role: "user", content: generateSteps(prompt) },
        ],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 600,
        stream: true,
        n: 1,
    };

    const stream = await OpenAIStream(payload);
    return new Response(stream);
};

export default handler;
