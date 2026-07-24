import './Journey.css';

const journeySteps = [
  {
    title: 'Backend Development',
    desc: 'Started with Java and Spring Boot, building robust RESTful APIs and enterprise applications.',
  },
  {
    title: 'Distributed Systems',
    desc: 'Explored message queues, caching strategies, and network programming with Netty for high-concurrency systems.',
  },
  {
    title: 'AI Application Engineering',
    desc: 'Transitioned into AI engineering — building LLM applications, RAG pipelines, and intelligent agents.',
  },
];

function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="section-label">// Journey</div>
      <h2 className="section-title">Engineering Growth</h2>
      <p className="section-desc">
        My evolution as an engineer — from backend fundamentals to AI-powered systems.
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
