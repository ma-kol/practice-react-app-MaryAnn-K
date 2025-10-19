/*

3. Create a ProfileContainer.jsx File
○ Create a ProfileContainer functional component.
○ Render multiple instances of ProfileCard with different data for each
profile.

*/

import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
    const profiles = [
        { name: "Alex", age: 25, bio: "A software engineer who loves hiking." },
        { name: "Taylor", age: 30, bio: "A designer passionate about photography." },
        { name: "Sarah", age: 35, bio: "A video game designer who has a dog named Cashew." }
    ];

    return (

        <div className="profile-container">
            {profiles.map((profile, index) => (
                <ProfileCard
                    key={index}
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                />
            ))}

        </div>

    );
};

export default ProfileContainer;