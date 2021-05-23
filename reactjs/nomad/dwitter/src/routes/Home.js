import React, {useState, useEffect} from "react";
import {dbService} from "../fbase";
import Dweet from "components/Dweet";

function Home({userObj}) {

    const [dweet, setDweet] = useState("");
    const [dweets, setDweets] = useState([]);

    // async function getDweets() {
    //     const dbDweets = await dbService.collection("dweets").get();
    //     dbDweets.forEach(document => {
    //         const dweetObject = {
    //             ...document.data(), id: document.id
    //         };
    //         setDweets((prev) => [dweetObject, ...prev]);
    //     });
    //     console.log(dweet);
    // };

    useEffect(() => {
        // getDweets();
        dbService.collection("dweets").onSnapshot(snapshot => {
            const dweetArray = snapshot.docs.map(doc=>({
                id:doc.id, ...doc.data()
            }));

            setDweets(dweetArray);
        });


    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        await dbService.collection("dweets").add({
            text: dweet, createdAt: Date.now(), creatorId: userObj.uid
        });
        setDweet("");
    }

    function onChange(e) {
        const {target: {value}} = e;
        setDweet(value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={dweet} onChange={onChange} placeholder="What's on your mind?"
                       maxLength={120}/>
                <input type="submit" value="Dweet"/>
            </form>
            <div>
                {dweets.map((dweet) => (
                    <Dweet key={dweet.id} dweetObj={dweet} isOwner={dweet.creatorId === userObj.uid}></Dweet>
                ))}
            </div>
        </div>
    );
}

export default Home;