import "../CSS/databases.css";
export default function Databases(props)
{
    const items = props.name;
    return (
        <div className="skills-databases">
            <div className="skills-databases-header">Databases</div>
            {
                items.map((item, index) => (
                    <div className="skills-item">{item}</div>
                ))
            }
        </div>
    );
}