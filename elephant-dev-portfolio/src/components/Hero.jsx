import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          寻找机会中
        </div>
        <h1 className="hero-name">
          你好，我是 <span className="hero-name-accent">Elephant</span>
        </h1>
        <div className="hero-titles">
          <span className="hero-title-tag">后端工程师</span>
          <span className="hero-title-tag">AI 应用开发者</span>
        </div>
        <p className="hero-desc">
          构建可扩展的后端系统和 AI 驱动的应用程序。
          专注于 Java 生态、分布式系统和大语言模型应用。
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            查看项目
          </a>
          <a
            href="https://github.com/elephant"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a href="#contact" className="btn btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            联系我
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>向下滚动</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
