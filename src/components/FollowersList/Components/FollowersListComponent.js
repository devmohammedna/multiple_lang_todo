import { Link } from "react-router-dom";
import useLocales from "../../../Utils/hooks/useLocales";

function FollowersListComponent({ followers }) {
  const {  translate } = useLocales();

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-card-${index}`}
            key={`follower-card-${index}`}
          >
            <img src={follower.picture.large} alt="img" />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">{translate("Go Back")}</Link>
      </div>
    </div>
  );
}

export default FollowersListComponent;
