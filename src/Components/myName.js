import "../CSS/myName.css";
export default function MyName(props)
{   const roles = props.roles;
    return (
        <div className="my-name-profile">
            {props.name}
            <div className="profile-roles">
                {
                    roles.map((item, index) =>(
                      <div className={"role-" + item}>{"| " + item + " | "}</div>
                    ))
                }
            </div>
        </div>
    );
}