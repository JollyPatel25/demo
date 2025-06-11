import "../CSS/frameworks.css";
export default function Languages(props)
{
    const items = props.name;
    return (
        <div className="skills-frameworks">
            <div className="skill-frameworks-header">Frameworks</div>
            {
                items.map((item, index) => (
                    <div className="skills-item">{item}</div>
                ))
            }
        </div>
    );
}