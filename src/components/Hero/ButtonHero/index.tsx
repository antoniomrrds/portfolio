import React, { useContext, useState } from 'react';
import { LinkContext } from '@/containers/HomePage';

const BtnHero = () => {
  const pdfFile = useContext(LinkContext);

  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    try {
      setLoading(true);
      if (!pdfFile?.url ) {
        return;
      }
      const response = await fetch(pdfFile?.url);
      const buffer = await response.arrayBuffer();

      const url = window.URL.createObjectURL(new Blob([buffer]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${pdfFile?.fileName}.pdf`);
      document.body.appendChild(link);
      link.click();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-teal  w-fit mx-auto  hover:bg-strong-red text-midnight-blue font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
    >
      {loading ? (
        <span>Loading...</span>
      ) : (
        <span>Download CV</span>
      )}
    </button>
  );
};

export default BtnHero;
