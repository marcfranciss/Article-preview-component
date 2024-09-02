import articleImg from "../../images/drawers.jpg";
import "./articleImg.css";

export const ArticleImg = () => {
  return (
    <div className='article-preview_img'>
      <img
        src={articleImg}
        alt='Green drawer wifth brown flowervase and a picture frame with "love will keep us alive" as its contentMich'
      />
    </div>
  );
};
