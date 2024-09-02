import "./App.css";
import { useState } from "react";
import Socials from "./assets/component/Socials/Socials";
import { ArticleImg } from "./assets/component/ArticleImg/ArticleImg";
import { ArticleContent } from "./assets/component/ArticleContent/ArticleContent";
import { ArticleAuthor } from "./assets/component/ArticleAuthor/ArticleAuthor";

function App() {
  const [toggleShare, setToggleShare] = useState<Boolean>(false);
  const [toggleShareMobile, setToggleShareMobile] = useState<Boolean>(false);
  return (
    <main>
      <section id='article-preview' className='article-preview'>
        <ArticleImg />
        <article className='article-container'>
          <ArticleContent />
          <div className='article-author-container'>
            <ArticleAuthor />
            <div className='btn-container'>
              <div
                className={`share-nav bubble ${toggleShare ? "active" : ""}`}>
                <span className='share-text'>SHARE</span>
                <Socials />
              </div>
              <button
                id='shareBtn'
                className={toggleShare ? "active" : ""}
                onClick={() => setToggleShare(!toggleShare)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
                  <path
                    fill='#6E8098'
                    d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`article-author-container mobile ${
              toggleShareMobile ? "active" : ""
            }`}>
            {!toggleShareMobile ? (
              <ArticleAuthor />
            ) : (
              <div className={`share-nav mobile`}>
                <span className='share-text'>SHARE</span>
                <Socials />
              </div>
            )}
            <div className='btn-container'>
              <button
                id='shareBtn'
                className={toggleShare ? "active" : ""}
                onClick={() => setToggleShareMobile(!toggleShareMobile)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
                  <path
                    fill='#6E8098'
                    d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
