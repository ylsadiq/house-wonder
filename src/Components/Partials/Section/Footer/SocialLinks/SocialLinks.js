import { useEffect, useState } from 'react';
import { SOCIAL_LINKS_API } from '../../../../../Utilities/APIs/APIs';
import facebook from '../../../../../Assets/home/002-facebook.svg';
import instagram from '../../../../../Assets/home/001-instagram.svg';
import twitter from '../../../../../Assets/home/003-twitter.svg';

import './SocialLinks.css';

function SocialLinks() {

  const [fbLink, setFbLink] = useState(null);
  const [fbVisibility, setFbVisibility] = useState(null);
  const [instaLink, setInstaLink] = useState(null);
  const [instaVisibility, setInstaVisibility] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState(null);
  const [youtubeVisibility, setYoutubeVisibility] = useState(null);

  async function fetchData() {
		const res = await fetch(SOCIAL_LINKS_API);
		const data = await res.json();
    console.log(data)

    const fbObj = data?.find(item => item?.platform === 'facebook')
    setFbVisibility(fbObj?.visibility)
    setFbLink(fbObj?.link)

    const instaObj = data?.find(item => item?.platform === 'instagram')
    setInstaVisibility(instaObj?.visibility)
    setInstaLink(instaObj?.link)

    const youtubeObj = data?.find(item => item?.platform === 'youtube')
    setYoutubeVisibility(youtubeObj?.visibility)
    setYoutubeLink(youtubeObj?.link)
		
	}  

  useEffect(() => {
    fetchData()
  }, [])
  

 return (
    <div className='social_wrapper'>

      {fbVisibility && 
        <a href={fbLink} rel="noopener noreferrer" target="_blank" className='facebook'>
          <img src={facebook} alt="" />
        </a>
      }

      {instaVisibility && 
        <a href={instaLink} rel="noopener noreferrer" target="_blank" className='instagram'>
          <img src={instagram} alt="" />
        </a>
      }

      {youtubeVisibility && 
        <a href={youtubeLink} rel="noopener noreferrer" target="_blank" className='youtube'>
          <img src={twitter} alt="" />
        </a>
      }

    </div>
  )
}

export default SocialLinks