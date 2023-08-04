import user from './data/user.json';
// Importing the React library, required for defining React components
import React from 'react';

// Defining a functional component called "Profile"
// It receives a prop called "data", which is an object containing profile information
const Profile = ({ data }) => {
  // Destructuring the "stats" property from the "data" object
  // to obtain "followers," "views," and "likes" variables
  const { followers, views, likes } = data.stats;

  // JSX - rendering the UI for the Profile component
  return (
    <div>
      {/* Displaying the user's avatar image */}
      <img src={data.avatar} alt={data.username} />

      {/* Displaying the user's username */}
      <p>{data.username}</p>

      {/* Displaying the user's tag */}
      <p>@{data.tag}</p>

      {/* Displaying the user's location */}
      <p>{data.location}</p>

      {/* Creating an unordered list to display stats */}
      <ul>
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
      </ul>
    </div>
  );
};

// Exporting the Profile component so that it can be used in other parts of the application
export default Profile;