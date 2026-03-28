import BeforeAfterHero from './BeforeAfterHero';

interface HeroProps {
  openModal?: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  return <BeforeAfterHero openModal={openModal} />;
}

