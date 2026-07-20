import { Avatar } from "@/components/Avatar";
import { ItemThumbnail } from "@/components/ItemThumbnail";
import { avatarItems } from "@/data/items";
import type { AvatarSelection } from "@/features/avatar/types";
import type { GameResult, Level, Stage } from "@/features/game/types";
import type { EarnedReward } from "@/features/progress/stageRewards";

export function ClearScreen({ result, stage, reward, unlockedLevel, avatar, hasNextStage, onNext, onRetry, onStages, onHome }: {
  result: GameResult;
  stage: Stage;
  reward: EarnedReward;
  unlockedLevel?: Level;
  avatar: AvatarSelection;
  hasNextStage: boolean;
  onNext: () => void;
  onRetry: () => void;
  onStages: () => void;
  onHome: () => void;
}) {
  const item = avatarItems.find((entry) => entry.itemId === reward.itemId);
  return (
    <main className={`clear-screen screen-enter ${result.cleared ? "" : "clear-screen--retry"}`} data-testid="clear-screen">
      {result.cleared && <div className="confetti" aria-hidden="true">✦　●　★　◆　✧　●　★</div>}
      <span className="eyebrow">STAGE {stage.code} {result.cleared ? "CLEAR!" : "RESULT"}</span>
      <h1>{result.cleared ? "やったね！" : "あと すこし！"}</h1>
      <p className="clear-message">{result.cleared ? "つぎのステージへ すすもう！" : `あと ${Math.max(0, stage.clearCorrect - result.correct)}もんで クリアだよ。もういちど やってみよう♪`}</p>
      <div className="star-rating" aria-label={`${result.stars}つ星`}>
        {[1, 2, 3].map((star) => <span key={star} className={star <= result.stars ? "star--earned" : ""}>★</span>)}
      </div>
      {unlockedLevel && <div className="level-up-banner" data-testid="level-up-banner"><span>✦ LEVEL UP! ✦</span><strong>Lv.{unlockedLevel.number} 解放！</strong><small>{unlockedLevel.name}</small></div>}
      <div className="clear-main">
        <Avatar selection={avatar} size="medium" celebration={result.cleared} />
        <section className="reward-card">
          <h2>{result.cleared ? "ごほうび" : "今回のきろく"}</h2>
          {result.cleared ? <>
            <div className="coin-reward"><span>●</span><b>+{reward.coins}</b> コイン</div>
            <div className="bonus-list">
              <span>ステージクリア</span>
              {reward.firstClear && <span>初回クリアボーナス</span>}
              {reward.threeStarBonus && <span>星3ボーナス</span>}
            </div>
            {item ? <div className="new-item"><i>NEW!</i><ItemThumbnail item={item} className="new-item__thumbnail" /><p>{item.name}<small>を ゲットしたよ！</small></p></div> : <div className="new-item new-item--plain"><strong>💮</strong><p>{reward.firstClear ? "はじめてクリア！" : "がんばりスタンプ"}<small>よく がんばったね！</small></p></div>}
          </> : <div className="retry-tip"><strong>{result.correct} / 12</strong><span>8もん正解で クリア！</span></div>}
          <p className="result-note">{result.correct}もん せいかい　・　キーのミス {result.mistakes}かい</p>
        </section>
      </div>
      <div className="clear-actions">
        {result.cleared && hasNextStage && <button className="primary-button" onClick={onNext} data-testid="next-stage-button">つぎのステージ →</button>}
        <button className={result.cleared && hasNextStage ? "secondary-button" : "primary-button"} onClick={onRetry}>↻ もういちど</button>
        <button className="secondary-button" onClick={onStages}>☷ ステージ</button>
        <button className="text-button" onClick={onHome}>⌂ ホーム</button>
      </div>
    </main>
  );
}
