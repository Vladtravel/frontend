import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/members/members-operations"
import selectors from "../../redux/selectors"

import s from "./MemberList.module.css";

const MemberList = () => {
    const { members, id } = useSelector(selectors.getVisibleMemberList);
    const dispatch = useDispatch();

    useEffect(() => dispatch(operations.updateMemberList({members, id})), 
    [dispatch, id, members]);

    return (
        <>
       {members ? (
            <ul className={s.membersList}>
            {members.map(({ email }) => (
                <li key={email} className={s.membersItem}>
                    <p>{email}</p>
                </li>
            ))}
        </ul>
       ) : (
           <p>Ви ще не додали жодного користувача</p>
       )}
        </>
    )
}

export default MemberList;