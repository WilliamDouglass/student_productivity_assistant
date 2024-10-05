// api/OpenAI/imageUpload.ts
// import { OpenAI } from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Make sure to set your OpenAI API key in your environment variables
// });

// // Example for creating an image from a prompt
// export const imageUpload = async (prompt: string) => {
//   try {
//     // Send the prompt to OpenAI to create an image
//     const response = await openai.chat.completions.create({
//         model: "gpt"
//     })

//     return response.data; // Return the JSON data from the OpenAI response
//   } catch (error) {
//     console.error('Error creating image:', error);
//     throw new Error('Image creation failed'); // Handle errors accordingly
//   }
// };
