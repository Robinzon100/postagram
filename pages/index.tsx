import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('components/pages/Index/Hero/Hero'),{ ssr: false },)

const index = () => {
  return (
    <>
      <Hero/>
    </>
  );
};

export default index;
