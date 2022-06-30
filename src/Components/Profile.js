import React from 'react';
import { useQuery } from 'react-query';

const Profile = () => {
    const { isLoading, data: user, refetch } = useQuery('user', () =>
        fetch(' https://infinite-springs-80402.herokuapp.com/user').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <div className='flex justify-center mt-32'><button class="btn btn-square loading"></button></div>
    }
    const profile = (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const password = event.target.password.value;
        const userDetail = { userName, password };
        console.log(userDetail)



        fetch(` https://infinite-springs-80402.herokuapp.com/user/62bda8df46d0528f56e44217`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetail)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">


                        {
                            user.map(u => <div className='w-full'>
                                <p className='text-xl w-full'>UserName:{u.userName}</p>
                                <p className='text-xl w-full'>Password:{u.password}</p>
                            </div>)
                        }
                    </div>
                    <form onSubmit={profile} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='userName' type="text" placeholder="User Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <input type='submit' value='Update' class="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;