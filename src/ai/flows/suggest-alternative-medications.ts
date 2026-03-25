'use server';

/**
 * @fileOverview An AI agent that suggests alternative medications.
 *
 * - suggestAlternativeMedications - A function that handles the suggestion of alternative medications.
 * - SuggestAlternativeMedicationsInput - The input type for the suggestAlternativeMedications function.
 * - SuggestAlternativeMedicationsOutput - The return type for the suggestAlternativeMedications function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAlternativeMedicationsInputSchema = z.object({
  prescriptionDetails: z
    .string()
    .describe(
      'Details of the patient prescription, including the prescribed medication, dosage, frequency, and any relevant patient information.'
    ),
});
export type SuggestAlternativeMedicationsInput = z.infer<typeof SuggestAlternativeMedicationsInputSchema>;

const SuggestAlternativeMedicationsOutputSchema = z.object({
  alternativeMedications: z
    .string()
    .describe(
      'A list of suggested alternative medications that are therapeutically similar but potentially more affordable, along with reasons for their suggestion.  Format the output as a bulleted list.'
    ),
});
export type SuggestAlternativeMedicationsOutput = z.infer<typeof SuggestAlternativeMedicationsOutputSchema>;

export async function suggestAlternativeMedications(
  input: SuggestAlternativeMedicationsInput
): Promise<SuggestAlternativeMedicationsOutput> {
  return suggestAlternativeMedicationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAlternativeMedicationsPrompt',
  input: {schema: SuggestAlternativeMedicationsInputSchema},
  output: {schema: SuggestAlternativeMedicationsOutputSchema},
  prompt: `You are a helpful AI assistant specializing in providing information about medications and healthcare.

  A patient has a prescription for a certain medication. Suggest alternative medications that are therapeutically similar but potentially more affordable or have better insurance coverage.

  Prescription Details: {{{prescriptionDetails}}}

  Respond with a bulleted list of alternative medications and the reasons for suggesting them.
  `,
});

const suggestAlternativeMedicationsFlow = ai.defineFlow(
  {
    name: 'suggestAlternativeMedicationsFlow',
    inputSchema: SuggestAlternativeMedicationsInputSchema,
    outputSchema: SuggestAlternativeMedicationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
