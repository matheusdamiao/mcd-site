import * as React from 'react';
import { SVGProps } from 'react';
const Logoo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={36}
    height={36}
    {...props}
    fill='#FFAC33'
  >
    <path d='M32.938 15.651A1.002 1.002 0 0 0 32 15H19.925L26.89 1.458A.999.999 0 0 0 26 0a1 1 0 0 0-.653.243L18 6.588 3.347 19.243A1 1 0 0 0 4 21h12.075L9.11 34.542A.999.999 0 0 0 10 36a1 1 0 0 0 .653-.243L18 29.412l14.653-12.655a1 1 0 0 0 .285-1.106z' />
  </svg>
);
export default Logoo;
