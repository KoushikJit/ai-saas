import { OpenAI } from "openai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "openai/resources/models.mjs";

// AI Initialization
var ai: OpenAI | null = null;
var completionChoices: OpenAI.Chat.Completions.ChatCompletion.Choice[] | undefined = undefined;
var choiceMessage: OpenAI.ChatCompletionMessage | undefined = undefined;
var choiceContent: String = ""

// var models = await ai.models.list();

async function InitAI() {
  if (!ai) {
    ai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
}  
await InitAI();

//GET
function gethandler(params: any) { }

//POST
async function posthandler(req: any, res: any) {

    const systemPrompt = "you are code generator..."

  //authenticate user session
  const session = await handleGettingSession();
  if (!session) {
    // return new Response("user session missing!", { status: 500 });
  }

  //get request body and prompt
  const body = await req.json();
  const prompt = body;
  if (!prompt) {
    return new Response("user prompt missing!", { status: 500 });
  }

  // is Test
  const isTest = true;
  if (isTest) {
    console.log("post api codegen! ");
    return new Response("Code Gen: " + systemPrompt+ prompt, { status: 200 });
  }

  // HIT AI
  try {
    await InitAI();
    const isTest2 = true;

    if (isTest2 && choiceContent) {
      // if it's not a test 
      // or if chat completion doesnt even exist 
      // then only hit AI
    } else {
      const createParams: OpenAI.Chat.ChatCompletionCreateParams = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: "user", content: systemPrompt+ prompt }],
      }
      ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, });
      const chatCompletion: OpenAI.Chat.ChatCompletion = await ai.chat.completions.create(createParams);
      choiceMessage = chatCompletion?.choices[0].message;
    }
    return new Response(JSON.stringify(choiceMessage), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  }



  //inner functions
  async function handleGettingSession() {
    //copy pasted [https://tinyurl.com/koushik-stack]
    return await getServerSession(
      req as unknown as NextApiRequest,
      {
        ...res,
        getHeader: (name: string) => res.headers?.get(name),
        setHeader: (name: string, value: string) => res.headers?.set(name, value),
      } as unknown as NextApiResponse,
      authOptions
    );
  }
}

export { gethandler as GET, posthandler as POST };
