import { levels } from "@/data/levels";
import type { Stage } from "@/features/game/types";
import { isLevelUnlocked, isStageCleared, isStageUnlocked } from "@/features/progress/progression";
import type { Progress } from "@/features/progress/types";

export function StageSelectScreen({ progress, recommendedStageId, onSelect, onHome }: { progress: Progress; recommendedStageId: string; onSelect: (stage: Stage) => void; onHome: () => void }) {
  return (
    <main className="stage-select-screen screen-enter" data-testid="stage-select-screen">
      <div className="stage-select-header">
        <button className="icon-button" onClick={onHome} aria-label="ホームへもどる">←</button>
        <div><span className="eyebrow">CAMPUS MAP</span><h1>ステージを えらぼう</h1></div>
        <div className="clear-rule"><b>合格ライン</b><span>12問中 8問</span></div>
      </div>

      <div className="level-list">
        {levels.map((level) => {
          const levelUnlocked = isLevelUnlocked(level, progress);
          const clearedCount = level.stages.filter((stage) => isStageCleared(stage.id, progress)).length;
          return (
            <section className={`level-panel level-panel--${level.color} ${levelUnlocked ? "" : "level-panel--locked"}`} key={level.id} data-testid={`level-${level.number}`}>
              <div className="level-panel__intro">
                <span className="level-number">Lv.{level.number}</span>
                <div><h2>{level.name}</h2><p>{level.theme}</p></div>
                {levelUnlocked ? <span className="level-count">{clearedCount} / {level.stages.length} クリア</span> : <span className="level-lock">🔒 まえのレベルをクリア</span>}
              </div>
              <div className="stage-road">
                {level.stages.map((stage, stageIndex) => {
                  const unlocked = isStageUnlocked(stage, progress);
                  const cleared = isStageCleared(stage.id, progress);
                  const stars = progress.stageStars[stage.id] ?? 0;
                  const recommended = stage.id === recommendedStageId;
                  return (
                    <div className="stage-step" key={stage.id}>
                      {stageIndex > 0 && <span className="road-line" aria-hidden="true">···</span>}
                      <button
                        className={`stage-card ${cleared ? "stage-card--cleared" : ""} ${recommended ? "stage-card--recommended" : ""}`}
                        disabled={!unlocked}
                        onClick={() => onSelect(stage)}
                        data-testid={`stage-${stage.id}`}
                        aria-label={`${stage.code} ${stage.name}${unlocked ? "" : "（未解放）"}`}
                      >
                        {recommended && <i className="recommend-badge">おすすめ！</i>}
                        <span className="stage-code">{unlocked ? stage.code : "🔒"}</span>
                        <strong>{unlocked ? stage.name : "？？？"}</strong>
                        <small>{unlocked ? stage.description : "クリアすると ひらくよ"}</small>
                        <span className="stage-stars" aria-label={`${stars}つ星`}>{[1, 2, 3].map((star) => <b key={star} className={star <= stars ? "earned" : ""}>★</b>)}</span>
                        {cleared && <em>クリア！</em>}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
