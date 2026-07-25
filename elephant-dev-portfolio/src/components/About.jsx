import './About.css';

const focusAreas = [
  '后端架构',
  '分布式系统',
  'LLM 应用',
  'RAG 系统',
  'AI Agent',
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">// 关于我</div>
      <h2 className="section-title">关于我</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            我专注于后端工程和 AI 应用开发。我的经验包括使用 Java 生态构建后端系统，以及探索大语言模型的实际应用。
          </p>
          <p>
            我喜欢解决复杂的分布式系统挑战，并构建利用 AI 能力的智能应用。目前正在探索基于 Agent 的架构和 RAG 系统的前沿技术。
          </p>
          <ul className="about-focus">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">年工作经验</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">项目经验</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">技术栈</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">好奇心</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
