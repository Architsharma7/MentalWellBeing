import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePrompt = `These are certain questions and answer about a person's mental health : `;
const endPrompt = `Suggest some changes to improve the condition of this person`;
const Q1 = "Have you felt worried or nervous in the past week?";
const Q2 = "How would you rate your mood in the past two weeks?";
const Q3 =
  "How would you rate your interest in the thing you liked previously?";
const Q4 = "How would you rate your energy levels in the past two weeks?";
const Q5 = "Have you felt worried or nervous in the past week?";
const Q6 = "Have you observed any memory loss in the past week?";
const Q7 = "Have you encountered any headaches in the past week?";

const generateAnswer = async (req, res) => {
  // Run first prompt
  // console.log(`API: ${basePromptPrefix}${req.body.}`)
  if (!req.body.selectedOption.first)
    return res.status(400).json({ message: "Input required" });

  const finalPrompt = `${basePrompt} ${Q1} - ${req.body.selectedOption.first} . ${Q2} - ${req.body.selectedOption.second}, ${Q3} - ${req.body.selectedOption.third} . ${Q4} - ${req.body.selectedOption.fourth}. ${Q5} - ${req.body.selectedOption.fifth}. ${Q6} - ${req.body.selectedOption.sixth} .  ${Q7} - ${req.body.selectedOption.seventh} ${endPrompt}`;
  console.log(finalPrompt);
  try {
    const baseCompletion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: finalPrompt,
      temperature: 0.7,
      max_tokens: 250,
    });
    const basePromptOutput = baseCompletion.data.choices.pop();
    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.log(error)
  }
};

export default generateAnswer;
