import './Homepage.css';
import { Link } from "react-router-dom";

const Homepage = () => (
  <div id="homepage">
    <h1>hello, i'm james</h1>
    {/* <p>i am a person who once liked to dig holes and crochet and rollerblade, who eventually dropped out of a graduate program in philosophy. at one point, i thought a lot about the extent of our control over belief states, but now I think about other things like the history of political Liberalism, "social justice" mythology, and room acoustics.</p> */}
    <p>i am a software developer and musician.</p>
    <p>i give piano and guitar lessons: <strong>$100 per hour</strong></p>
    <p>i measure and evaluate room acoustics: <strong>email for pricing</strong></p>
    <p>i am a studio musician (guitar and piano primarily): <strong>$200 per hour</strong></p>
    <p>i am a recording engineer (tracking, mixing, and "mastering"): <strong>email for pricing</strong></p>
    <p>i will record you a personalized song: <strong>$200</strong></p>
    {/* <p>i give professional Spiritual advice: <strong>$1,700 per 20 minute session.</strong></p> */}
    <p>i also write music for my own enjoyment:</p>

    {/* soundcloud snippet: edited in order to work with React, styles */}
    <iframe title="original music on SoundCloud" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1562809495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    <div className="soundcloud-container" style={{fontSize: '10px', color: '#7f7f7f', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/jeffreysbrother" title="jeffreysbrother" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none'}}>jeffreysbrother</a> · <a href="https://soundcloud.com/jeffreysbrother/sets/sandwich-dream" title="sandwich dream" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none'}}>sandwich dream</a></div>
    {/* end soundcloud snippet */}

    <p>i also wrote a thing about how Sam Harris is wrong about stuff: <a href="https://jeffreysbrother.medium.com/sam-harris-on-human-reasoning-2fd56894773b" target="_blank" rel="noreferrer">Sam Harris on Human Reasoning</a>.</p>

    <br />

    {/* modified to work with React */}
    <p>Contact Me:</p>
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mrgvabkg" method="post">
      <fieldset id="fs-frm-inputs">
        <label htmlFor="full-name">your name</label>
        <input type="text" name="name" id="full-name" placeholder="" required="true" />
        <label htmlFor="email-address">your email address</label>
        <input type="email" name="_replyto" id="email-address" placeholder="" required="true" />
        <label htmlFor="message">message</label>
        <textarea rows="5" name="message" id="message" placeholder="" required="true"></textarea>
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
        <input type="text" name="_gotcha" style={{display: 'none'}} />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>

    {/* <Link to="/acoustics">acoustics</Link> */}
  </div>
);

export default Homepage;
