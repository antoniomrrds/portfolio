export const projectId: string = process.env.SANITY_STUDIO_SANITY_PROJECT_ID || '';
export const dataset: string = process.env.SANITY_STUDIO_SANITY_DATASET || '';
if (!projectId || !dataset) {
  throw new Error('Configuration must contain `projectId` or ``dataset`');
}


