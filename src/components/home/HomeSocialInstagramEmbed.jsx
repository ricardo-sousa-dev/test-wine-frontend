import React from 'react';
import './css/HomeSocialInstagramEmbed.css'

function Faq() {
  return (
    <div className="instagram">
      <h2 className='mb-3 col-6 category'>Instagram</h2>
      <div className='social'>
        <script scrolling="no" src="https://embedsocial.com/js/iframe.js" />
        <iframe title="instagram" src="https://embedsocial.com/facebook_album/pro_hashtag/3abb33b919abf11de3074db14e817a476fb4c325" />
        <script>iFrameResize();</script>
      </div>
    </div>
  );
}

export default Faq;
