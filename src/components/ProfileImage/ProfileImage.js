import './ProfileImage.css';

function ProfileImage({ img }) {
    return (
        <div>
            <img src={img} alt="Profile" className="profile-image" />
        </div>
    );
}

export default ProfileImage;
