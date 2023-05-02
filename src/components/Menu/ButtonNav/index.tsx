import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  classNameText: string;
  destiny: string;
  clicked:()=>void;
};

const ButtonNav = ({ name, classNameText, destiny,clicked }: Props) => {
  return (
    <Link href={destiny}>
      <button onClick={clicked} className={classNameText}>{name}</button>
    </Link>
  );
};

export default ButtonNav;
