import React from 'react';
import ReactDom from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './images/pic-1.jpeg';
import profile2 from './images/pic-2.jpeg';
import profile3 from './images/pic-3.jpeg';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment 
                    name= 'Ravi' 
                    date= 'Today at 5:00' 
                    text= 'it is amazing'
                    image= {profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name= 'Yusif' 
                    date='Today at 6:00' 
                    text= 'Great Jop'
                    image= {profile3}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name= 'Huseyn' 
                    date='Today at 7:00' 
                    text= 'Thanks...'
                    image= {profile1}
                />
            </UserCard>
        </div>
    )
}

ReactDom.render(
    <App/>,document.querySelector("#root")
)
