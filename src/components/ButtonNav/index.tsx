import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  classNameText: string;
  destiny: string;
};

const ButtonNav = ({ name, classNameText, destiny }: Props) => {
  return (
    <Link href={destiny}>
      <button className={classNameText}>{name}</button>
    </Link>
  );
};

export default ButtonNav;
