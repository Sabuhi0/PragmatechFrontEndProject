import React from "react";

const UserCard = () => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    Alex Tancredi
                </div>
                <div className="description">
                    Hello my name is Alex, I live Baku
                </div>
            </div>
            <div className="ui bottom button">
                <i className="add icon"></i>
                Add Friend
            </div>
        </div>
    )
}

export default UserCard;