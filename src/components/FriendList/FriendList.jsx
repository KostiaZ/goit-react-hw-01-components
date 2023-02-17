import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li class="item" key={id}>
                    <span className="status">{ isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{ name}</p>
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