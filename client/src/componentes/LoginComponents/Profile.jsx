import { useAuth0 } from '@auth0/auth0-react';

function Profile() {

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (            
        <div className="btn btn-outline my-5 text-white ">
            {console.log(user)}
            <div >
                <img className="rounded-full mr-3" src={user.picture} alt="user" width="40"/>
            </div>
            <div>
                {user.name}
            </div>
        </div>
        )
    );
};

export default Profile;