import { useCallback, useEffect, useRef, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Hero } from './components/Hero';
import { SiteHeader } from './components/SiteHeader';
import { StorySection } from './components/StorySection';
import { TimelineSection } from './components/TimelineSection';
import { FireworksExperience, DecorationsSection, FamilySection, ClosingSection, SiteFooter } from './components/CelebrationSections';
import { SweetsGallery } from './components/SweetsGallery';
import { PhotoMemories } from './components/PhotoMemories';

let audioContext: AudioContext | null = null;
function playSoftChime() {
  try {
    const AudioContextClass = window.AudioContext;
    if (!AudioContextClass) return;
    audioContext ??= new AudioContextClass();
    if (audioContext.state === 'suspended') void audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();
    const now = audioContext.currentTime;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(640, now);
    oscillator.frequency.exponentialRampToValueAtTime(920, now + 0.16);
    volume.gain.setValueAtTime(0.0001, now);
    volume.gain.exponentialRampToValueAtTime(0.045, now + 0.025);
    volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
    oscillator.connect(volume);
    volume.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.52);
  } catch {
    // Audio is an optional enhancement; fireworks remain fully functional without it.
  }
}

function App() {
  const [trigger, setTrigger] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [greeting, setGreeting] = useState('');
  const timerRef = useRef<number | undefined>(undefined);

  const celebrate = useCallback(() => {
    setTrigger((current) => current + 1);
    if (soundOn) playSoftChime();
    setGreeting('Wishing you a Diwali filled with light, laughter and love.');
    if (timerRef.current !== undefined) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setGreeting(''), 4300);
  }, [soundOn]);

  useEffect(() => () => {
    if (timerRef.current !== undefined) window.clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <SiteHeader onCelebrate={celebrate} />
      <main>
        <Hero trigger={trigger} onCelebrate={celebrate} />
        <StorySection />
        <FireworksExperience
          trigger={trigger}
          soundOn={soundOn}
          onSoundToggle={() => setSoundOn((current) => !current)}
          onLightUp={celebrate}
        />
        <TimelineSection />
        <SweetsGallery />
        <PhotoMemories />
        <DecorationsSection />
        <FamilySection />
        <ClosingSection trigger={trigger} onCelebrate={celebrate} />
      </main>
      <SiteFooter />
      <div className={`celebration-toast ${greeting ? 'is-visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">
        <span className="toast-icon"><Heart size={15} fill="currentColor" /></span>
        <span>{greeting}</span>
        <Sparkles className="toast-sparkle" size={15} aria-hidden="true" />
      </div>
    </>
  );
}

export default App;
