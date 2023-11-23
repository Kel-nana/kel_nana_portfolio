import socialMediaLinks from './socialData';
import './social.css';

function SocialMedia() {
  const displaySocialMedia = socialMediaLinks.map((item) => (
    <div key={item.name} className="">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.socialLink}
      >
        {item.name}
        <img
          key={item.name}
          src={item.icon}
          alt="image_portfolio"
          className="z-20 ml-[97.6%] h-[40px] w-[40px] rounded-full border-2 border_color_icon border_color_left p-[3.5px]"
        />
      </a>

    </div>
  ));
  return (
    <div className="grid grid-rows-4 gap-2 content-center w-[7vw] fixed bottom-[6vh] right-[5%] h-[34vh] mb-[5px] rounded-tr-3xl social_color_top_img">
      { displaySocialMedia }
    </div>
  );
}

export default SocialMedia;
