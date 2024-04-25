import { UserProps } from "../types/user";

import Search from "../components/search/Search";
import User from "../components/user/User";

import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async(userName: string) => {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        setUser(userData);
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
        </div>
    )
};

export default Home;