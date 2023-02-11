import React, {useState} from 'react'
import Header from '../../components/common/misc/Header' 
import '../../App.css'

const UserProfile = () =>{
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@abc.com',
        contact: '+65 1111 1111',
        bio: 'cs is pain',
        profileImage: 'https://images.pexels.com/photos/10885373/pexels-photo-10885373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    });
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
      setEditMode(!editMode);
    };
    return(
        
        <div className='user-profile'>
            <Header Title = "Profile" Description = "Check out and edit your profile here!"/>
            <img class="max-h-xs max-w-xs rounded-full mx-auto" src={user.profileImage} alt={user.name}/>
            {editMode ? (
            <>
            <input type="text" placeholder="Name" value={user.name}
                onChange={(event) =>
                 setUser({ ...user, name: event.target.value })
                }
            />
            <input type="email" placeholder="Email" value={user.email}
                onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                }
            />
            <input type="text" placeholder="Contact" value={user.contact}
                onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                }
            />
            <textarea placeholder="Bio" value={user.bio}
                onChange={(event) => 
                    setUser({ ...user, bio: event.target.value })
                }
            />
            </>
            ) : (
            <>
                <h2 class="text-4xl font-bold leading-loose">{user.name}</h2>
                <p class="text-base leading-loose">{user.email}</p>
                <p class="text-base leading-loose">{user.contact}</p>
                <p class="text-base leading-loose">{user.bio}</p>
            </>
            )}
            <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={toggleEditMode}>
                {editMode ? 'Save':'Edit Profile'}
            </button>
        </div>
    );
};
export default UserProfile;
