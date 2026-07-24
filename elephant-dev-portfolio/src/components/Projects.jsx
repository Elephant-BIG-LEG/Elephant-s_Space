import './Projects.css';

const folderIcon = (
  <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const externalIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    name: 'AI Tender Review System',
    desc: 'An AI-powered document analysis system that uses LLMs to extract evaluation rules, analyze tender documents, and generate intelligent review reports.',
    tech: ['Java', 'Spring Boot', 'LLM', 'RAG', 'Prompt Engineering'],
  },
  {
    name: 'IM System',
    desc: 'A real-time messaging system based on TCP persistent connections and Netty, supporting concurrent connections and message persistence.',
    tech: ['Netty', 'TCP', 'Redis', 'MySQL'],
  },
  {
    name: 'InsightRAG',
    desc: 'A RAG-based knowledge assistant supporting document processing, vector retrieval and intelligent Q&A with multi-format document parsing.',
    tech: ['Embedding', 'Vector Search', 'FAISS', 'LLM'],
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-label">// Projects</div>
      <h2 className="section-title">Featured Work</h2>
      <p className="section-desc">
        A selection of projects I've built that showcase my technical skills and problem-solving approach.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-header">
              {folderIcon}
              <a href="#" className="project-link" aria-label="View project">
                {externalIcon}
              </a>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t} className="project-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
