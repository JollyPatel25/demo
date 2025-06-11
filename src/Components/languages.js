import "../CSS/languages.css";
export default function Languages(props)
{
    const items = props.name;
    return (
        <div className="skills-languages">
            <div className="skill-languages-header">Languages</div>
            {
                items.map((item, index) => (
                    <div className="skills-item">{item}</div>
                ))
            }
        </div>
    );
}