"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar } from "@/components/Avatar";
import { createGameResult, QUESTIONS_PER_STAGE } from "@/features/game/gameEngine";
import type { GameResult, Stage } from "@/features/game/types";
import type { AvatarSelection } from "@/features/avatar/types";

const keyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export function TypingScreen({ stage, avatar, onFinish, onExit }: { stage: Stage; avatar: AvatarSelection; onFinish: (result: GameResult) => void; onExit: () => void }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [seconds, setSeconds] = useState(stage.durationSeconds);
  const [feedback, setFeedback] = useState<"ready" | "letter" | "correct" | "mistake">("ready");
  const [questionHadMistake, setQuestionHadMistake] = useState(false);
  const [lastQuestionPerfect, setLastQuestionPerfect] = useState(true);
  const finished = useRef(false);
  const current = stage.questions[Math.min(questionIndex, stage.questions.length - 1)];
  const activeKey = current.text[characterIndex]?.toLowerCase() ?? "";

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0 && !finished.current) {
      finished.current = true;
      onFinish(createGameResult(correct, questionIndex, mistakes));
    }
  }, [seconds, correct, questionIndex, mistakes, onFinish]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (finished.current || event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
      const key = event.key.toLowerCase();
      if (key.length !== 1) return;

      if (key !== activeKey) {
        setMistakes((value) => value + 1);
        setQuestionHadMistake(true);
        setFeedback("mistake");
        window.setTimeout(() => setFeedback("ready"), 600);
        return;
      }

      const completesQuestion = characterIndex === current.text.length - 1;
      if (!completesQuestion) {
        setCharacterIndex((value) => value + 1);
        setFeedback("letter");
        window.setTimeout(() => setFeedback("ready"), 160);
        return;
      }

      const nextCorrect = correct + (questionHadMistake ? 0 : 1);
      const nextAnswered = questionIndex + 1;
      setLastQuestionPerfect(!questionHadMistake);
      setCorrect(nextCorrect);
      setFeedback("correct");

      if (nextAnswered >= QUESTIONS_PER_STAGE) {
        finished.current = true;
        window.setTimeout(() => onFinish(createGameResult(nextCorrect, nextAnswered, mistakes)), 500);
        return;
      }

      setQuestionIndex(nextAnswered);
      setCharacterIndex(0);
      setQuestionHadMistake(false);
      window.setTimeout(() => setFeedback("ready"), 320);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeKey, characterIndex, correct, current.text.length, mistakes, onFinish, questionHadMistake, questionIndex]);

  const feedbackText = feedback === "correct"
    ? lastQuestionPerfect ? "キラッ！ 1もん せいかい！" : "できた！ さいごまで打てたね♪"
    : feedback === "mistake" ? "おしい！ 光るキーを もういちど♪" : current.hint;

  return (
    <main className={`typing-screen screen-enter feedback--${feedback}`} data-testid="typing-screen">
      <div className="game-topbar">
        <button className="icon-button" onClick={onExit} aria-label="ステージ選択へもどる">←</button>
        <div><span className="eyebrow">STAGE {stage.code}</span><h2>{stage.name}</h2></div>
        <div className="timer"><span>のこり</span><b>{seconds}</b><small>秒</small></div>
      </div>
      <div className="progress-track"><i style={{ width: `${Math.min(100, (questionIndex / QUESTIONS_PER_STAGE) * 100)}%` }} /></div>
      <div className="game-content">
        <aside className="coach-card"><Avatar selection={avatar} size="small" celebration={feedback === "correct"} /><p>{feedbackText}</p></aside>
        <section className="prompt-card">
          <span>もんだい {Math.min(questionIndex + 1, 12)} / 12　つぎに打つのは…</span>
          <strong className={`typing-target typing-target--${stage.questionType}`} data-testid="typing-target">
            {[...current.text].map((character, index) => <i key={`${current.id}-${index}`} className={index < characterIndex ? "typed" : index === characterIndex ? "current" : "upcoming"}>{character.toUpperCase()}</i>)}
          </strong>
          {feedback === "correct" && <div className="success-burst" aria-hidden="true">✦　★　✧</div>}
          <div className="score-row"><span>せいかい <b data-testid="correct-count">{correct}</b> / 12</span><span>ミス <b>{mistakes}</b></span></div>
        </section>
      </div>
      <section className="keyboard" aria-label="仮想キーボード">
        {keyboardRows.map((row) => <div className="keyboard__row" key={row}>{[...row].map((key) => <kbd key={key} className={key === activeKey ? "key--active" : ""} data-key={key}>{key.toUpperCase()}</kbd>)}</div>)}
        <p><span className="hand-dot" /> 光っている「{activeKey.toUpperCase()}」を おしてね</p>
      </section>
    </main>
  );
}
