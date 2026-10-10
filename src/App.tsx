import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from './data';
import './index.css';

const GithubIcon = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const TwitterIcon = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const LinkedinIcon = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="nav-logo">{PORTFOLIO_DATA.personal.name}</a>
          <div className="nav-links">
            <a href="#hakkimda">Hakkımda</a>
            <a href="#projeler">Projeler</a>
            <a href="#deneyim">Deneyim</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section style={{ position: 'relative', paddingTop: '180px', paddingBottom: '120px', overflow: 'hidden' }}>
          <div className="hero-glow"></div>
          <div className="container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ maxWidth: '800px' }}
            >
              {PORTFOLIO_DATA.personal.availableForWork && (
                <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--color-surface-1)', border: '1px solid var(--color-hairline)', borderRadius: '9999px', marginBottom: '24px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', boxShadow: '0 0 8px var(--color-accent)' }}></span>
                  <span className="body-sm">Yeni projelere açık</span>
                </motion.div>
              )}
              
              <motion.h1 variants={itemVariants} className="display-xl" style={{ marginBottom: '24px' }}>
                Dijital dünyada <br />
                <span className="text-accent">iz bırakan</span> işler.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="body-lg" style={{ marginBottom: '40px', maxWidth: '600px' }}>
                {PORTFOLIO_DATA.personal.bio}
              </motion.p>
              
              <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px' }}>
                <a href="#projeler" className="button-primary">
                  Projeleri Gör <ArrowRight size={16} />
                </a>
                <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noreferrer" className="button-secondary">
                  <GithubIcon size={16} /> GitHub
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projeler Section */}
        <section id="projeler" className="container mt-section">
          <div style={{ marginBottom: '64px' }}>
            <h2 className="display-lg">Seçilmiş Projeler</h2>
            <p className="body-lg" style={{ marginTop: '16px' }}>En son geliştirdiğim ve gurur duyduğum çalışmalarım.</p>
          </div>

          <div className="grid-2">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}
              >
                {/* Project Image */}
                <div style={{ 
                  height: '300px', 
                  backgroundColor: 'var(--color-surface-2)', 
                  borderBottom: '1px solid var(--color-hairline)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    className="project-image"
                  />
                </div>
                
                {/* Project Details */}
                <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <h3 className="headline">{project.title}</h3>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <a href={project.githubUrl} className="project-link" title="Kaynak Kod"><GithubIcon size={20} /></a>
                      <a href={project.liveUrl} className="project-link" title="Canlı Site"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  
                  <p className="body-sm" style={{ marginBottom: '24px', flexGrow: 1, fontSize: '15px' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '12px', color: 'var(--color-ink)', background: 'var(--color-surface-2)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--color-hairline)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Teknoloji & Yetenekler Section */}
        <section id="hakkimda" className="container mt-section">
           <div style={{ marginBottom: '64px' }}>
            <h2 className="display-lg">Teknoloji Cephaneliği</h2>
            <p className="body-lg" style={{ marginTop: '16px' }}>Projelerimi hayata geçirirken kullandığım araçlar ve diller.</p>
          </div>
          
          <div className="grid-3">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card"
              >
                <div style={{ marginBottom: '24px', color: 'var(--color-accent)', background: 'var(--color-accent-glow)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                  <skill.icon size={24} />
                </div>
                <h3 className="headline" style={{ marginBottom: '16px', fontSize: '20px' }}>{skill.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skill.items.map(item => (
                    <span key={item} style={{ color: 'var(--color-ink-subtle)', fontSize: '14px' }}>
                      {item}
                      {skill.items.indexOf(item) !== skill.items.length - 1 && <span style={{ margin: '0 4px', color: 'var(--color-hairline-strong)' }}>•</span>}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Deneyim Section */}
        <section id="deneyim" className="container mt-section" style={{ paddingBottom: '120px' }}>
          <div style={{ marginBottom: '64px' }}>
            <h2 className="display-lg">Kariyer Yolculuğu</h2>
          </div>
          
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ 
                  paddingLeft: '24px', 
                  borderLeft: '2px solid var(--color-hairline-strong)',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  position: 'absolute', 
                  left: '-7px', 
                  top: '6px', 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-surface-1)',
                  border: '2px solid var(--color-accent)'
                }}></div>
                
                <span style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '8px' }}>{exp.period}</span>
                <h3 className="headline" style={{ fontSize: '22px', marginBottom: '4px' }}>{exp.title}</h3>
                <h4 style={{ color: 'var(--color-ink-muted)', fontSize: '16px', fontWeight: '400', marginBottom: '16px' }}>{exp.company}</h4>
                <p className="body-sm" style={{ fontSize: '15px' }}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--color-hairline)', padding: '64px 0', backgroundColor: 'var(--color-surface-1)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href={PORTFOLIO_DATA.social.twitter} className="social-link" target="_blank" rel="noreferrer"><TwitterIcon size={24} /></a>
            <a href={PORTFOLIO_DATA.social.github} className="social-link" target="_blank" rel="noreferrer"><GithubIcon size={24} /></a>
            <a href={PORTFOLIO_DATA.social.linkedin} className="social-link" target="_blank" rel="noreferrer"><LinkedinIcon size={24} /></a>
          </div>
          
          <p className="body-sm" style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Modern web standartları ile kodlandı.
          </p>
          
        </div>
      </footer>
    </>
  );
}

export default App;
