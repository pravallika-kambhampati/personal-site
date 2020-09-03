import React from 'react';
import { SocialLink, SocialProvider } from '@mui-treasury/components/socialLink';
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round';

function Socials() {
  return (
    <SocialProvider useStyles={useRoundSocialLinkStyles}>
       <SocialLink
        brand={'Envelope'}
        href={'mailto:pravallika13kambhampati@gmail.com'}
      />
      <SocialLink
        brand={'GithubCircle'}
        href={'https://github.com/pravzzyy'}
      />
      <SocialLink 
      brand={'Twitter'}
      href={'https://twitter.com/pravz2505'} 
      />

      <SocialLink
        brand={'Instagram'}
        href={'https://www.instagram.com/pravzzyy/'}
      />
       <SocialLink
        brand={'LinkedIn'}
        href={'https://www.linkedin.com/in/pravallika-kambhampati-65971b17a/'}
      />
      
      <SocialLink
        brand={'FacebookCircle'}
        href={'https://www.facebook.com/kambhampati.pravallika/'}
      />
      
     
      
    </ SocialProvider>
  )
}

export default Socials;