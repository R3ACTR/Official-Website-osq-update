'use server';

import { suggestProjects } from '@/ai/flows/project-suggestion';

export async function handleSuggestionAction(aboutText: string, projectDescriptions: string[]): Promise<string[]> {
  return await suggestProjects({
    aboutSectionText: aboutText,
    projectDescriptions: projectDescriptions,
  });
}
