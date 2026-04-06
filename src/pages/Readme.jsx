import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

function Readme() {

    return (
        <div style={{
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center", 
            justifyContent:"center",
            background:"rgba(255, 255, 255, 0.64)",
            padding:"15px",
            maxWidth:"700px",
            margin:"0 auto",
            borderRadius:"10px"
        }}>
        <h1 id="mtg-edh-generator-fe">MTG-EDH-GENERATOR-FE</h1>
        <p>Frontend for MTG-EDH-GENERATOR-FE using ReactJS + Vite!</p>
        <p>This frontend application is not AS &quot;serious&quot; as the backend part, and I&#39;ve taken more liberties using AI as a tool to help with css, especially in getting the card aligned with the text input and such. </p>
        <p><strong>This MTG EDH deck generator is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</strong></p>
        <p><br/><br/></p>
        <h2 id="important-guidelines-from-scryfall">Important guidelines from Scryfall</h2>
        <p>I will be using the scryfall API to fetch mtg cards.</p>
        <p>As a part of the Wizards of the Coast Fan Content Policy, Scryfall provides their card data and image database free of charge for the primary purpose of creating additional MTG software, community content or research.</p>
        <p>I will do my best to follow their guidelines:</p>
        <ul>
        <li>I will not be using Scryfall logos or names in a way that implies my work/product is endorsed by Scryfall.</li><br/>
        <li>I will not &quot;paywall&quot; access, or require anyone to make payments, take surveys, rate content, join chats etc.</li><br/>
        <li>I will not use Scryfall data to create new games, or to imply the information and images are from any other game than MTG.</li><br/>
        <li>I will not simply repackage, republish or proxy scryfall data. The software must create additional value for end-users.</li><br/>
        </ul>
        <h3 id="rate-limits-and-good-citizenship">Rate Limits and Good Citizenship</h3>
        <p>From Scryfall&#39;s documentation:</p>
        <blockquote>
        <p>We kindly ask that you insert 50 – 100 milliseconds of delay between the requests you send to the server at api.scryfall.com. (i.e., 10 requests per second on average).</p>
        <p>Submitting excessive requests to the server may result in a HTTP 429 Too Many Requests status code. Overloading the API after this point may result in a temporary or permanent ban of your IP address. Applications that continuously receive rate limit warnings over a longer period may also be blocked.</p>
        <p>The Scryfall API (api.scryfall.com) has the following hard rate limits:</p>
        <p>/cards/search — 2/second (500ms)
        /cards/named — 2/second (500ms)
        /cards/random — 2/second (500ms)
        /cards/collection — 2/second (500ms)
        All other methods — 10/second (100ms)</p>
        </blockquote>
        <p><br/><br/></p>
        <h3 id="current-goal-to-provide-additional-value-to-end-users-">Current goal to provide &quot;additional value to end-users&quot;</h3>
        <p>The goal of this project is to make an easy-to-use commander deck generator with user inputs probably not being any more than which colors they want to include, or a specific commander.</p>
        <p><br/><br/></p>
        <h2 id="important-guidelines-from-wizards-of-the-coast">Important guidelines from Wizards of the coast</h2>
        <p>we ask you follow these rules:</p>
        <ol>
        <li><p><strong>One word: F-R-E-E.</strong> You can use Wizards’ IP (except for the restrictions listed in #3) to make Fan Content that you share with the community for free. Free means FREE:</p>
        <ul>
        <li>You can’t require payments, surveys, downloads, subscriptions, or email registration to access your Fan Content;</li><br/>
        <li>You can’t sell or license your Fan Content to any third parties for any type of compensation; and</li><br/>
        <li>Your Fan Content must be free for others (including Wizards) to view, access, share, and use without paying you anything, obtaining your approval, or giving you credit.
        You can, however, subsidize your Fan Content by taking advantage of sponsorships, ad revenue, and donations—so long as it doesn’t interfere with the Community’s access to your Fan Content.</li><br/>
        </ul>
        </li>
        <li><p><strong>Tell the Community it’s unofficial.</strong> Make it clear that your Fan Content is not endorsed or sponsored by Wizards—i.e., unofficial. Please include a note with your Fan Content explaining that:
        “[Title of your Fan Content] is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.”</p>
        </li><br/>
        <li><p><strong>Don’t hurt others.</strong> Please respect other people’s IP. If you don’t have the rights to use another person’s stuff in your Fan Content—don’t. If we learn that your Fan Content also includes other people’s IP (e.g., crossovers/mashups) without their permission, we may ask you to take it down.</p>
        </li><br/>
        <li><p><strong>Don’t hurt Wizards.</strong> We ask that you refrain from doing any of the following:</p>
        <ul>
        <li><strong>Don’t use Wizards’ logos and trademarks.</strong> We’ve included a list of our most frequently asked-about trademarks in the FAQ;</li><br/>
        <li><strong>Don’t mess with the legal notices in our stuff.</strong> If the Wizards IP you are incorporating into your Fan Content already has copyright notices, logos, trademarks, or other notices existing within it, don’t remove them;</li><br/>
        <li><strong>Don’t use Wizards’ IP in other games.</strong> This includes your own or other people’s games or game components (e.g., rule books, tokens, figures), regardless of whether it is distributed for free;</li><br/>
        <li><strong>Don’t use Wizards’ Video or Music in your Fan Content.</strong> We know our video trailers are awesome, but use of our videos and music are governed by contracts with third parties. Please don’t use any of our video or music content, unless you’re embedding a video from an authorized third-party’s website (e.g., Twitch or YouTube);</li><br/>
        </ul>
        </li>
        <li><p><strong>No bad stuff.</strong> We have the right to stop or restrict your use of Wizards’ IP at any time—for any reason or no reason—including when we think your use is inappropriate, offensive, damaging, or disparaging (and we’ll make that call in our sole discretion). If this happens, you must immediately take down your Fan Content or face the Demogorgon (yeah, the big bad is back from being on loan).</p>
        </li><br/>
        <li><p><strong>Practice safe sponsorship.</strong> We understand that great Fan Content can sometimes require special equipment (e.g., videos, podcasts, prop fabrication). We are OK with you using third-party sponsors to subsidize costs if you follow a few rules:</p>
        <ul>
        <li>Don’t use a sponsor that would be harmful to Wizards. Please don’t promote our competitors or endorse inappropriate or offensive sponsors;</li><br/>
        <li>Make it clear (verbally or visually) that they are acting as a sponsor only;</li><br/>
        <li>Keep any shout-outs, mentions, and credits to a reasonable length; and</li><br/>
        <li>Do not associate Wizards with your sponsor in any way.</li><br/>
        </ul>
        </li><br/>
        <li><strong>Follow the law of the land.</strong> It’s your Fan Content, so you are solely responsible for ensuring that your creations don’t violate the laws of your region, country, plane, or dimension. In addition to this Policy, your use of any Wizards’ IP must also comply with Wizards’ Terms of Use and Code of Conduct (together, the “Wizards Terms”). If there’s a conflict between anything in this Policy and the Wizards Terms, the Wizards Terms win. Those agreements include important legal terms (such as limitations of lability, indemnification, and dispute resolution), so please review them carefully.</li><br/>
        </ol>
        <p><br/><br/></p>
        <h1 id="additional-info">Additional info</h1>
        <p>The backend part of this project is in a separate github repo @ <a href="https://github.com/AlbiDota/MTG-EDH-GENERATOR-BE">MTG-EDH-GENERATOR-FE</a>.</p>
        <p>I suggest you check it out as well if you consider running this thingy locally.</p>
        <p><br/><br/></p>
        <h2 id="run-locally">Run locally</h2>
        <p>in root directory:</p>
        <p>"npm i"</p>
        <p>"npm run dev"</p>
        <p><br/><br/></p>
        <h2 id="resources-used">resources used</h2>
        <p>ALL card information and api calls done by the backend is from the blessed and wonderful <a href="https://www.scryfall.com">Scryfall</a></p>
        <p>empty card template from <a href="https://www.deviantart.com/banesbox/art/MTG-Templates-634246660">BANESBOX on deviantart</a></p>
        <p>color icons were downloaded from the <a href="https://mtg.fandom.com/wiki/Main_Page">mtg fandom wiki</a></p>
        <p><a href="https://scryfall.com/docs/api">Scryfall api docs</a></p>
        <p><a href="https://company.wizards.com/en/legal/fancontentpolicy">WotC fan content policy</a></p>
        <p>This document was converted from md to html using <a href="https://markdowntohtml.com/">markdowntohtml.com</a></p>
        <p><br/><br/></p>
        <h2 id="author">Author</h2>
        <p><strong>GitHub:</strong> <a href="https://github.com/AlbiDota">AlbiDota</a>  </p>
        </div>
    )
}

export default Readme;