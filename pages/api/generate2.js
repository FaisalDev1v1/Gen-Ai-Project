import { OpenAIStream } from "../../utils/OpenAIStream";

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
}

export const config = {
    runtime: "edge",
};

const handler = async (req) => {
    const { prompt } = (await req.json());

    if (!prompt) {
        return new Response("No prompt in the request", { status: 400 });
    }


    const payload = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user", content:
                `Pretend you are expert analyst in business continuity management plan who are wailing to help companies to with suitable proposal solutions and plan to maintain operations for company from failure.
Develop a detailed business continuity management plan for company based on information below.
Company Industry : E-commerce
Potential Risk : cyberattack
Employee Size : 200
Type of development plan : Marketing plan
Business core functions :
-Online platform maintenance and development
-Product management and inventory control
-Order processing and fulfillment
-Payment processing and fraud prevention
-Customer service and support
-Digital marketing and advertising
-Logistics and shipping management
-Data analytics and reporting
make sure each point related to function core above should include proposal real solution to help company from failure 
make sure replace [***] and insert new data.
make sure display result as format below
[Core Function name]  
Likehood: [***] 
impact: [***] 
Solution: [***]`

        }],
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
