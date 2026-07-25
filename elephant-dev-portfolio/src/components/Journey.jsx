import './Journey.css';

const journeySteps = [
  {
    title: '后端开发',
    desc: '从 Java 和 Spring Boot 开始，构建稳健的 RESTful API 和企业级应用。',
  },
  {
    title: '分布式系统',
    desc: '探索消息队列、缓存策略，以及使用 Netty 进行高并发系统的网络编程。',
  },
  {
    title: 'AI 应用工程',
    desc: '转型 AI 工程 — 构建 LLM 应用、RAG 管道和智能 Agent。',
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
          <div key={step.title} className="timeline-item">
            <div className="timeline-dot" />
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-desc">{step.desc}</p>
            {i < journeySteps.length - 1 && (
              <div className="timeline-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
