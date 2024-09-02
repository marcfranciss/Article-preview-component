import avatar from "../../images/avatar-michelle.jpg";
import "./articleAuthor.css";

export const ArticleAuthor = () => {
  return (
    <div className='article-author'>
      <div className='author_img'>
        <img src={avatar} alt={`Michelle's avatar`} />
      </div>
      <div className='author-text-container'>
        <span className='author_fullname'>Michelle Appleton</span>
        <span className='date_posted'>28 Jun 2020</span>
      </div>
    </div>
  );
};
