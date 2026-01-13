
import Hero from '../components/Hero';
import Aboutpreview from '../components/Aboutpreview'
import SpecialitySection from '@/components/Specialitysection';
import BestServices from '@/components/BestServices';
import OurCollection from '@/components/Collections';
import Roadmap from '@/components/Roadmap';
import Partners from '@/components/Partners';
import TeamSection from '@/components/Teamsection';







export default function Home() {
  return (
    <>
      <Hero />
      <Aboutpreview/>
      <SpecialitySection/>
      <BestServices/>
      <OurCollection/>
      <Roadmap/>
      <TeamSection/>
      <Partners/>
    </>
  );
}
