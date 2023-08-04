import user from './user.json';




const Profile = ({
    imgUrl =  src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
}) => {
  return( 
    <div>
      <img src={imgUrl} alt={name}/>
      <h3>{user.username}</h3>
      <p>{user.location}</p>
    </div>
  )

}

const UserProfile = () =>{
    return(
        <ul>
            {user.Profile.map()}
        </ul>
    )
}

export default UserProfile