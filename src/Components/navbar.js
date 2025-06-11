import "../CSS/navbar.css";
import { FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap,FaUserCircle } from 'react-icons/fa';
export default function Navbar(props){
    const items = props.items;
    const header = props.header;
    const iconMap = {
        Skills: <FaTools/>,
        Projects: <FaProjectDiagram />,
        Experience: <FaBriefcase />,
        Education: <FaGraduationCap/>,
        About: <FaUserCircle/>
    };
    return (
      <div className="navigation-bar">
        <div className="nav-header">{header}</div>
        {
            items.map((item, index) => {
                let classes = "nav-item nav-" + item.toLowerCase();
                return(
                    <div className={"nav-items-group nav-group-" + item}>
                        <div className={"nav-icon nav-icon-" + item}>{iconMap[item] || null}</div>
                        <div className={classes}>{item}</div>
                    </div>
                )
            })
        }
      </div>
    );
}