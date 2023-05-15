import { Pdf } from 'typings';

export const fetchPdf = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPdf`);
  const data = await res.json();
  const pdfile: Pdf = data.pdf;
  return pdfile;
};
