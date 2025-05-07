'use client';
import Property from '@/models/Property';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from 'react-share';

const ShareButtons = ({property}) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`

  return ( 
    <>
      <h3 className="text-xl font-bold text-center pt-2">Share This Property:</h3>
      <div className='flex gap-3 justify-center pb-5'>
        <FacebookShareButton url={shareUrl} quote={property.name} hastag={`#${property.type.replace(/\s/g, '')} ForRent</div>)}`}>
          <FacebookIcon size={40} round={true}/>
        </FacebookShareButton>
      </div>
    </>
  );
}

export default ShareButtons;