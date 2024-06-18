import { forwardRef } from 'react';

const Header = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <header ref={ref} className="container sticky top-0 w-full py-6">
      <h1 className="text-2xl font-bold">YumEats</h1>
    </header>
  );
});

export default Header;
