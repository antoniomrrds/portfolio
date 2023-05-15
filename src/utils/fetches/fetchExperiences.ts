import {  Experience } from 'typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/config/sanity';


const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;


export const fetchExperiences = async () => {
  const experiences: Experience[] = await sanityClient.fetch(query);
  return experiences;
};
