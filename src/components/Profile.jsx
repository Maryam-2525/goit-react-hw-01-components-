import user from '../data/user.json';
import PropTypes from 'prop-types';
// Importing the React library, required for defining React components
import React from 'react';
import {ProfileCont,AvatarImgCont, UserInfo, UserName, UserTag, UserLocation, StatItemsCont,VisuallyHidden} from '../components/styles/ProfileStyles';


// Defining a functional component called "Profile"p
// It receives a prop called "data", which is an object containing profile information
const Profile = ({data}) => { 
 
  // Destructuring the "stats" property from the "data" object
  // to obtain "followers," "views," and "likes" variables
  const { followers, views, likes } = data.stats;
  username,
  tag,
  location,
  avatar
  data.stats;

  // JSX - rendering the UI for the Profile component
  return (
    <div>
      <ProfileCont>
        <AvatarImgCont>
           {/* Displaying the user's avatar image */}
           <img src={data.avatar} alt={data.username} />
        </AvatarImgCont>
        <UserInfo>
          <UserName>
             {/* Displaying the user's username */}
             <p>{data.username}</p>
          </UserName>
          <UserTag>
              {/* Displaying the user's tag */}
              <p>@{data.tag}</p>
          </UserTag> 
          <UserLocation>
              {/* Displaying the user's location */}
              <p>{data.location}</p>
          </UserLocation>    
      </UserInfo>

      {/* Creating an unordered list to display stats */} 
      <ul>
      <VisuallyHidden>
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
        </VisuallyHidden>
      </ul>
      </ProfileCont>
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