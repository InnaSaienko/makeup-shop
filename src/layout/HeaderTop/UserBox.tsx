import React, {FC} from 'react';
import BasketBox from "./BasketBox";
import User from "./User";

const UserBox: FC = () => {

    return (
        <div className="header-right-row">
            <User/>
            <BasketBox/>
        </div>
    );
};

export default UserBox;