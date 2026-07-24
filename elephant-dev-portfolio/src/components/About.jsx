import './About.css';

const focusAreas = [
  'Backend Architecture',
  'Distributed Systems',
  'LLM Applications',
  'RAG Systems',
  'AI Agent',
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">// About</div>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I focus on backend engineering and AI application development. My experience includes building backend systems with the Java ecosystem and exploring practical applications of Large Language Models.
          </p>
          <p>
            I enjoy solving complex distributed system challenges and building intelligent applications that leverage the power of AI. Currently exploring the frontier of agent-based architectures and RAG systems.
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
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Tech Stack</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Curiosity</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
