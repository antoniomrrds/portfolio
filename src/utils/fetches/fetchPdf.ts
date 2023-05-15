import { Pdf } from 'typings';
import { formatFileSize } from '../functions/formatFileSize';
import { sanityClient } from '@/config/sanity';
import { groq } from 'next-sanity';

const query = groq`
*[_type == "pdf"][0]{
  'url': pdfFile.asset -> url,
  'size': pdfFile.asset -> size,
  ...
}
`;

export const fetchPdf = async () => {
  const pdf: Pdf = await sanityClient.fetch(query);
  pdf.size = formatFileSize(+pdf.size);
  return pdf;
};
