import { UserProps } from "../types/user";

import Search from "../components/Search";

import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async(userName: string) => {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        console.log(data);
    }

    return (
        <Search loadUser={loadUser}/>
    )
};

export default Home;