import './Skills.css';

const backendIcon = (
  <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
    <circle cx="6" cy="18" r="1" fill="currentColor" />
  </svg>
);

const aiIcon = (
  <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1v4a4 4 0 0 1-8 0v-4H7a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const frontendIcon = (
  <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const categories = [
  {
    title: 'Backend',
    icon: backendIcon,
    skills: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Netty', 'RocketMQ'],
  },
  {
    title: 'AI Engineering',
    icon: aiIcon,
    skills: ['LLM Application', 'Prompt Engineering', 'RAG', 'Embedding', 'Vector DB', 'Agent'],
  },
  {
    title: 'Frontend',
    icon: frontendIcon,
    skills: ['React', 'Vue', 'HTML/CSS', 'Vite'],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-label">// Tech Stack</div>
      <h2 className="section-title">Technologies</h2>
      <p className="section-desc">
        The tools and technologies I work with to build scalable systems and AI-powered applications.
      </p>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-category">
            {cat.icon}
            <h3 className="skill-category-title">{cat.title}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
