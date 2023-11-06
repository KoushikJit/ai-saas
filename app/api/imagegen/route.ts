import Replicate from "replicate";

async function posthandler(req: Request, res: Response) {
  const body = await req.json();
  const prompt= body.prompt;
  console.log(prompt);
  console.log("image gen api 1")
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
  console.log("image gen api 2")

  // return new Response("", {status: 200});

  const model = "stability-ai/sdxl:2a865c9a94c9992b6689365b75db2d678d5022505ed3f63a5f53929a31a46947";

  const output = await replicate.run(
    model,
    {
      input: {
        width: 768,
        height: 768,
        prompt: prompt,
        refine: "expert_ensemble_refiner",
        scheduler: "K_EULER",
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: false,
        high_noise_frac: 0.8,
        negative_prompt: "",
        prompt_strength: 0.8,
        num_inference_steps: 25
      }
    }
  );

  console.log(output);

  return new Response(JSON.stringify(output), { status: 200 });
}

export { posthandler as POST }