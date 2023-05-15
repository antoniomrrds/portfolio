import { sanityClient } from '@/config/sanity';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { Pdf } from 'typings';
import {formatFileSize} from '@/utils/functions/formatFileSize';

const query = groq`
*[_type == "pdf"][0]{
  'url': pdfFile.asset -> url,
  'size': pdfFile.asset -> size,
  ...
}
`;

type pdfFile = {
  pdf: Pdf;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<pdfFile>,
) {
  const pdf: Pdf = await sanityClient.fetch(query);
  pdf.size = formatFileSize(+pdf.size);
  console.log(pdf)
  res.status(200).json({ pdf });
}
