export function StatusBar({ coins, levelLabel }: { coins: number; levelLabel: string }) {
  return (
    <header className="status-bar">
      <div className="brand-mark" aria-label="キラキラタイピング学園"><span>✦</span><b>キラキラ</b><small>タイピング学園</small></div>
      <div className="status-bar__stats">
        <span className="pill pill--level"><i>★</i>{levelLabel}</span>
        <span className="pill pill--coin"><i>●</i><b data-testid="coin-count">{coins}</b> コイン</span>
      </div>
    </header>
  );
}
