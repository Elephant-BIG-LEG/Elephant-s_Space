import './Journey.css';

const journeySteps = [
  {
    year: '阶段一',
    title: '后端开发',
    desc: '从 Java 和 Spring Boot 开始，构建稳健的 RESTful API 和企业级应用。',
    icon: '☕',
  },
  {
    year: '阶段二',
    title: '分布式系统',
    desc: '探索消息队列、缓存策略，以及使用 Netty 进行高并发系统的网络编程。',
    icon: '🌐',
  },
  {
    year: '阶段三',
    title: 'AI 应用工程',
    desc: '转型 AI 工程 — 构建 LLM 应用、RAG 管道和智能 Agent。',
    icon: '🤖',
  },
];

function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="section-label">// 历程</div>
      <h2 className="section-title">成长历程</h2>
      <p className="section-desc">
        我的工程师成长之路 — 从后端基础到 AI 驱动系统。
      </p>
      <div className="timeline">
        {journeySteps.map((step, i) => (
          <div key={step.title} className={`timeline-item ${i % 2 === 1 ? 'reverse' : ''}`}>
            <div className="timeline-dot" style={{ '--dot-gradient': i === journeySteps.length - 1 ? 'var(--gradient-end)' : 'var(--gradient-mid)' }}>
              <span className="timeline-icon">{step.icon}</span>
            </div>
            <div className={`timeline-content reveal reveal-delay-${i + 1}`}>
              <span className="timeline-year">{step.year}</span>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
