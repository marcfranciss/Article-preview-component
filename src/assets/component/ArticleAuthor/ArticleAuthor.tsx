import avatar from "../../images/avatar-michelle.jpg";
import "./articleAuthor.css";

export const ArticleAuthor = () => {
  return (
    <div className='article-author'>
      <div className='author_img'>
        <img src={avatar} alt={`Michelle's avatar`} tabIndex={0} />
      </div>
      <div className='author-text-container'>
        <span
          className='author_fullname'
          tabIndex={0}
          aria-label="Author's name: Michelle Appleton">
          Michelle Appleton
        </span>
        <span
          className='date_posted'
          tabIndex={0}
          aria-label='Date posted: 28 June 2020'>
          28 Jun 2020
        </span>
      </div>
    </div>
  );
};
