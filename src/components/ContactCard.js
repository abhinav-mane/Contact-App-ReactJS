import React from "react";
import user from '../images/user.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    const handleDeleteClick = () => {
        props.clickHandler(id);
    };

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" style={{ width: '35px', height: '35px' }} />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div
                style={{ color: 'red', marginTop: '7px', float: 'right', cursor: 'pointer' }}
                onClick={handleDeleteClick}
            >
                <i className="trash alternate outline icon"></i>
            </div>
        </div>
    );
};

export default ContactCard;
