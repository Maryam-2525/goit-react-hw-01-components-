import user from '../data/user.json';
import PropTypes from 'prop-types';
// Importing the React library, required for defining React components
import React from 'react';
import {profileCont,avatarImgCont, userInfo, userName, userTag, userLocation} from '../components/styles/ProfileStyles';


// Defining a functional component called "Profile"p
// It receives a prop called "data", which is an object containing profile information
const Profile = ({data}) => { 
 
  // Destructuring the "stats" property from the "data" object
  // to obtain "followers," "views," and "likes" variables
  const { followers, views, likes } = data.stats;
  username,
  tag,
  location,
  avatar,
  data.stats;

  // JSX - rendering the UI for the Profile component
  return (
    <div>
      <profileCont>
        <avatarImgCont>
           {/* Displaying the user's avatar image */}
           <img src={data.avatar} alt={data.username} />
        </avatarImgCont>
        <userInfo>
          <userName>
             {/* Displaying the user's username */}
             <p>{data.username}</p>
          </userName>
          <userTag>
              {/* Displaying the user's tag */}
              <p>@{data.tag}</p>
          </userTag> 
          <userLocation>
              {/* Displaying the user's location */}
              <p>{data.location}</p>
          </userLocation>    
      </userInfo>
      {/* Creating an unordered list to display stats */}
      
      <ul>
      <visuallyHidden>
        {/* Displaying the number of followers */}
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>

        {/* Displaying the number of views */}
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>

        {/* Displaying the number of likes */}
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
        </visuallyHidden>
      </ul>

      </profileCont>
    </div>
  );
};

Profile.proptypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,

};

// Exporting the Profile component so that it can be used in other parts of the application
export default Profile;