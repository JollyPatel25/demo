import { FaLinkedin, FaGithub } from 'react-icons/fa';
import "../CSS/impLinks.css";
import { SiLeetcode } from 'react-icons/si';
export default function ImpLinks(props){
    const keys = Object.keys(props.profileLinks);
    const values = Object.values(props.profileLinks);
    const iconMap = {
        GitHub: <FaGithub/>,
        LinkedIn: <FaLinkedin/>,
        LeetCode: <SiLeetcode/>
    };
    return (
        <div className="impLinks">
            {
                keys.map((item, index) => (
                    <a className={"link-items-group link"} href={values[index]} target="_blank">
                        <div className="link-icon">{iconMap[item]}</div>
                        <div className="link-content">{item}</div>
                    </a>
                ))
            }
        </div>
    );
}