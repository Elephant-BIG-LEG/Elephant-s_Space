import './Skills.css';

const categories = [
  {
    title: '后端开发',
    icon: '🖥️',
    gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Netty', level: 70 },
      { name: 'RocketMQ', level: 65 },
    ],
  },
  {
    title: 'AI 工程',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    skills: [
      { name: 'LLM Application', level: 85 },
      { name: 'Prompt Engineering', level: 80 },
      { name: 'RAG', level: 75 },
      { name: 'Embedding', level: 70 },
      { name: 'Vector DB', level: 65 },
      { name: 'Agent', level: 60 },
    ],
  },
  {
    title: '前端开发',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Vue', level: 70 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Vite', level: 75 },
    ],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-label">// 技术栈</div>
      <h2 className="section-title">技术能力</h2>
      <p className="section-desc">
        我用来构建可扩展系统和 AI 驱动应用的工具和技术。
      </p>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-category reveal">
            <div className="skill-category-header" style={{background: cat.gradient}}>
              <span className="skill-category-icon">{cat.icon}</span>
              <h3 className="skill-category-title">{cat.title}</h3>
            </div>
            <div className="skill-list">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{
                        width: '0%',
                        background: cat.gradient
                      }}
                      data-width={`${skill.level}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
