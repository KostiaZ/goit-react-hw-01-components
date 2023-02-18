import PropTypes from "prop-types";
import t from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
return (
    <div className={t.profile}>
  <div className={t.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={t.avatar}
    />
            <p className={t.name}>{ username }</p>
            <p className={t.tag}>@{ tag}</p>
            <p className={t.location}>{ location}</p>
  </div>

  <ul className={t.stats}>
    <li>
      <span className={t.label}>Followers</span>
      <span className={t.quantity}>{followers}</span>
    </li>
    <li>
      <span className={t.label}>Views</span>
      <span className={t.quantity}>{views}</span>
    </li>
    <li>
      <span className={t.label}>Likes</span>
    <span className={t.quantity}>{ likes}</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }),
}