import "../CSS/tools.css";
export default function Tools(props)
{
    const items = props.name;
    return (
        <div className="skills-tools">
            <div className="skill-tools-header">Tools</div>
            {
                items.map((item, index) => (
                    <div className="skills-item">{item}</div>
                ))
            }
        </div>
    );
}