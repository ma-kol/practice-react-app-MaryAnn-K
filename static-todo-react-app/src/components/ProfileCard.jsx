/*

Part 1: Creating the Components
1. Set Up a Components Folder
○ Inside the src directory, create a folder named components.
2. Create a ProfileCard.jsx File
○ Define a ProfileCard functional component that accepts props for
name, age, and bio.
○ Render the data dynamically using props.

*/

const ProfileCard = ({ name, age, bio }) => {

    return (

        <div className="profile-card">
            Name: {name} <br />
            Age: {age} <br />
            Bio: {bio}
        </div>


    );
};

export default ProfileCard;