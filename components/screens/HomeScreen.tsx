import { Avatar } from "@/components/Avatar";
import type { AvatarSelection } from "@/features/avatar/types";

export function HomeScreen({ avatar, onPlay, onDressUp }: { avatar: AvatarSelection; onPlay: () => void; onDressUp: () => void }) {
  return (
    <main className="home-screen screen-enter" data-testid="home-screen">
      <section className="welcome-copy">
        <span className="eyebrow">きょうも いっしょに がんばろう！</span>
        <h1><span>キラキラ</span><br />タイピング学園</h1>
        <p>キーを おして、<br />すてきな アイテムを あつめよう</p>
        <div className="home-actions">
          <button className="primary-button" onClick={onPlay} data-testid="play-button"><span>▶</span> あそぶ</button>
          <button className="secondary-button" onClick={onDressUp} data-testid="dressup-button"><span>♚</span> きせかえ</button>
        </div>
      </section>
      <section className="school-scene" aria-label="パステルカラーの学園の中庭">
        <div className="school-building"><span>キラキラ学園</span><i className="clock">●</i></div>
        <div className="cloud cloud--one" /><div className="cloud cloud--two" />
        <div className="tree tree--left" /><div className="tree tree--right" />
        <div className="avatar-platform"><Avatar selection={avatar} size="large" /></div>
        <div className="speech-bubble">きょうの れんしゅう、<br /><b>いっしょに やってみよう♪</b></div>
      </section>
    </main>
  );
}
