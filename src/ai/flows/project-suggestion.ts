// src/ai/flows/project-suggestion.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting projects based on the themes identified in the 'About' section text.
 *
 * - suggestProjects - Analyzes the 'About' section text to identify key themes and suggests relevant projects.
 * - ProjectSuggestionInput - The input type for the suggestProjects function.
 * - ProjectSuggestionOutput - The return type for the suggestProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const ProjectSuggestionInputSchema = z.object({
  aboutSectionText: z.string().describe('The text content from the About section of the portfolio.'),
  projectDescriptions: z.array(z.string()).describe('Array of project descriptions from the Projects Display section.'),
});
export type ProjectSuggestionInput = z.infer<typeof ProjectSuggestionInputSchema>;

// Define the output schema
const ProjectSuggestionOutputSchema = z.array(z.string()).describe('Array of suggested project descriptions that align with the themes in the About section.');
export type ProjectSuggestionOutput = z.infer<typeof ProjectSuggestionOutputSchema>;

// Define the tool to analyze text and extract themes
const analyzeTextTool = ai.defineTool({
  name: 'analyzeText',
  description: 'Analyze the given text and extract the key themes.',
  inputSchema: z.object({text: z.string().describe('The text to analyze.')}),
  outputSchema: z.array(z.string()).describe('List of key themes identified in the text.'),
}, async (input) => {
  // This is a mock implementation.  In a real application, this would use an NLP service.
  // For now, we'll just return some canned themes based on keywords in the text.
  const text = input.text.toLowerCase();
  const themes: string[] = [];
  if (text.includes('design')) {
    themes.push('design');
  }
  if (text.includes('development')) {
    themes.push('development');
  }
  if (text.includes('ai')) {
    themes.push('artificial intelligence');
  }
  if (text.includes('minimal')) {
    themes.push('minimalism');
  }
  return themes;
});

// Define the prompt to suggest projects based on themes
const suggestProjectsPrompt = ai.definePrompt({
  name: 'suggestProjectsPrompt',
  input: {schema: ProjectSuggestionInputSchema},
  output: {schema: ProjectSuggestionOutputSchema},
  tools: [analyzeTextTool],
  prompt: `You are a portfolio assistant. Given the themes from the user's about section, suggest projects that align with those themes.

About Section Text: {{{aboutSectionText}}}
Project Descriptions: {{{projectDescriptions}}}

Analyze the About Section text to identify key themes using the analyzeText tool. Then, suggest project descriptions that match those themes. Return only the project descriptions that match the themes.`,
});

// Define the Genkit flow
const suggestProjectsFlow = ai.defineFlow({
  name: 'suggestProjectsFlow',
  inputSchema: ProjectSuggestionInputSchema,
  outputSchema: ProjectSuggestionOutputSchema,
}, async (input) => {
  const {output} = await suggestProjectsPrompt(input);
  return output!;
});

/**
 * Analyzes the 'About' section text to identify key themes and suggests relevant projects.
 * @param input - The input containing the 'About' section text and project descriptions.
 * @returns A list of suggested project descriptions that align with the themes.
 */
export async function suggestProjects(input: ProjectSuggestionInput): Promise<ProjectSuggestionOutput> {
  return suggestProjectsFlow(input);
}
