import React from 'react';

type ButtonProps = {
  bgcolor?: string;
  textColor?: string;
  margin?: string;
  target: string;
} & React.ButtonHTMLAttributes<'button'>;

const CtaButton: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  bgcolor = '#1D81A2',
  margin,
  target,
}): JSX.Element => {
  return (
    <a
      href={target}
      className={`bg-[${bgcolor}]  font-medium text-[#FFFF] ${margin} m-auto rounded-[15px] px-6 py-4 text-base`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
