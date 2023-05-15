/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2023-03-18',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  ignoreBrowserTokenWarning: true,
};

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source:any) =>
  createImageUrlBuilder(config).image(source);
