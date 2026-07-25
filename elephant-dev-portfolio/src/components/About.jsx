import './About.css';

const focusAreas = [
  { name: '后端架构', color: 'var(--gradient-start)' },
  { name: '分布式系统', color: 'var(--gradient-mid)' },
  { name: 'LLM 应用', color: 'var(--gradient-end)' },
  { name: 'RAG 系统', color: 'var(--accent-amber)' },
  { name: 'AI Agent', color: 'var(--accent-pink)' },
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">// 关于我</div>
      <h2 className="section-title">关于我</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            我专注于后端工程和 AI 应用开发。我的经验包括使用 Java 生态构建后端系统，以及探索大语言模型的实际应用。
          </p>
          <p>
            我喜欢解决复杂的分布式系统挑战，并构建利用 AI 能力的智能应用。目前正在探索基于 Agent 的架构和 RAG 系统的前沿技术。
          </p>
          <div className="about-focus">
            {focusAreas.map((item) => (
              <div key={item.name} className="focus-item" style={{'--focus-color': item.color}}>
                <span className="focus-dot" />
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="about-stats reveal reveal-delay-2">
          <div className="stat-card">
            <div className="stat-number gradient-text">3+</div>
            <div className="stat-label">年工作经验</div>
          </div>
          <div className="stat-card">
            <div className="stat-number gradient-text">10+</div>
            <div className="stat-label">项目经验</div>
          </div>
          <div className="stat-card">
            <div className="stat-number gradient-text">5+</div>
            <div className="stat-label">技术栈</div>
          </div>
          <div className="stat-card stat-card-special">
            <div className="stat-icon">🐘</div>
            <div className="stat-label">好奇心无限</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
