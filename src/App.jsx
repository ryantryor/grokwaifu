import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './App.css';
import aniImg from './assets/Ani.jpg';
import upgradeImg from './assets/upgrade.jpg';

const pages = ['home', 'about', 'features', 'guide'];

function App() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div className="ani-home">
            <img src={aniImg} alt="Ani" className="ani-img-main" />
            <h2>{t('nav.home')}</h2>
            <p>{t('home.welcome')}</p>
          </div>
        );
      case 'about':
        return (
          <div className="ani-about ani-about-markdown">
            <img src={aniImg} alt="Ani" className="ani-img-about" />
            <h2>{t('about.title')}</h2>
            <div className="ani-markdown-wrapper">
              <ReactMarkdown>{t('about.desc')}</ReactMarkdown>
            </div>
          </div>
        );
      case 'features':
        return <div><h2>{t('features.title')}</h2><ul>{t('features.list', { returnObjects: true }).map((item, idx) => <li key={idx}>{item}</li>)}</ul></div>;
      case 'guide':
        return (
          <div className="ani-guide ani-about-markdown">
            <img src={upgradeImg} alt="Unlock Hidden Mode" className="ani-upgrade-img" />
            <h2>{t('guide.title')}</h2>
            <div className="ani-markdown-wrapper">
              <ReactMarkdown>{t('guide.steps', { returnObjects: true }).join('\n')}</ReactMarkdown>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleLangSwitch = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="container ani-theme">
      <nav className="navbar">
        {pages.map((p) => (
          <button key={p} className={page === p ? 'active' : ''} onClick={() => setPage(p)}>
            {t(`nav.${p}`)}
          </button>
        ))}
        <button className="lang-btn" onClick={handleLangSwitch}>{t('lang.switch')}</button>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="ani-footer">
        <div className="ani-footer-inner">
          <span className="ani-footer-title">Grokwaifu</span> &copy; {new Date().getFullYear()}<br/>
          This site is named Grokwaifu and has no relation to grokai. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
