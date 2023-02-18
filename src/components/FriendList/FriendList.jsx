import PropTypes from "prop-types";
import t from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul class={t.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li class={t.item} key={id}>
                    <span class={ isOnline ? t.active : t.status }></span>
  <img className={t.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={t.name}>{ name }</p>
</li>
            )
           )}
        </ul>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
        }),
    )
}