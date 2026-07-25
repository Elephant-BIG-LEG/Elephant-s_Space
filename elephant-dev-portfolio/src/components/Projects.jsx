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
    name: 'AI 标书评审系统',
    desc: '基于 AI 的文档分析系统，使用 LLM 提取评审规则、分析标书文档并生成智能评审报告。',
    tech: ['Java', 'Spring Boot', 'LLM', 'RAG', 'Prompt Engineering'],
  },
  {
    name: '即时通讯系统',
    desc: '基于 TCP 长连接和 Netty 的实时消息系统，支持高并发连接和消息持久化。',
    tech: ['Netty', 'TCP', 'Redis', 'MySQL'],
  },
  {
    name: 'InsightRAG',
    desc: '基于 RAG 的知识助手，支持文档处理、向量检索和多格式文档解析的智能问答。',
    tech: ['Embedding', 'Vector Search', 'FAISS', 'LLM'],
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-label">// 项目</div>
      <h2 className="section-title">精选项目</h2>
      <p className="section-desc">
        我构建的一些项目，展示了我的技术能力和解决问题的方法。
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
