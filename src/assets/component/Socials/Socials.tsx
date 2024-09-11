import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import "./socials.css";

const Socials = () => {
  return (
    <nav className='social-nav'>
      <a
        href='https://www.facebook.com'
        target='_blank'
        className='facebook'
        aria-label='Share to facebook'
        tabIndex={0}>
        <img src={facebookIcon} alt='' />
      </a>
      <a
        href='https://www.twitter.com'
        target='_blank'
        className='twitter'
        aria-label='Share to Twitter/X'
        tabIndex={0}>
        <img src={twitterIcon} alt='' />
      </a>
      <a
        href='https://www.pinterest.com'
        target='_blank'
        className='pinterest'
        aria-label='Share to Pinterest'
        tabIndex={0}>
        <img src={pinterestIcon} alt='' />
      </a>
    </nav>
  );
};

export default Socials;
