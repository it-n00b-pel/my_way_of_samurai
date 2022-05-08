import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    users: UserType[],
    follow: (userID: number) => void,
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []

    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.navigatorPage}>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                })}
                <span> ...</span>
                <input type={"number"} value={props.currentPage}
                       style={{width: `${+String(props.currentPage).length + 1}` + 8 + "px"}}
                       onChange={(e) => props.onPageChanged(+e.currentTarget.value)}/>
                <div onClick={() => {
                    props.onPageChanged(pagesCount)
                }}
                     className={props.currentPage === pagesCount ? s.selectedPage : ""}>{pagesCount ? `...${pagesCount}` : ""}</div>
            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {props.users.map(u => <div key={u.id}>

                <div className={s.user_info}>
                    <div className={s.left_part}>
                        <NavLink to={'/profile/' + u.id}>
                            <div className={s.user_photo}>
                                <img src={u.photos.small} alt=""/>
                            </div>
                        </NavLink>

                        {/*    <div className={s.btn}>{u.followed ?
                            <button className={u.followed? s.active: ""} onClick={() => props.unfollow(u.id)}>FOLLOW</button> :
                            <button className={u.followed? `s.active` : ""} onClick={() => props.follow(u.id)}>UNFOLLOW</button>}
                        </div>*/}
                        <div className={s.btn}>
                            <button className={u.followed ? s.active : ""}
                                    onClick={() => props.follow(u.id)}>{u.followed ? "FOLLOW" : "UNFOLLOW"}</button>
                        </div>
                    </div>
                    <div className={s.right_part}>
                        <div className={s.person_info}>
                            <div className={s.fullName}>{u.name}</div>
                            {/*<div className={s.status}>{u.status}</div>*/}
                        </div>

                        <div className={s.location}>
                            {/*<div className={s.city}>{u.status}</div>*/}
                            <div className={s.country}>{u.status}</div>
                        </div>
                    </div>
                </div>


            </div>)}


        </div>)

};

export default Users;