

import SocialLinksList from '../social-links/SocialLinksList';
import Skill from '../skill/Skill';

const Accordition = () => {
    return (
        <div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Add Skill</div>
                <div className="collapse-content text-sm"><Skill/></div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Add Link</div>
                <div className="collapse-content text-sm"><SocialLinksList/></div>
            </div>
        </div>
    );
};

export default Accordition;