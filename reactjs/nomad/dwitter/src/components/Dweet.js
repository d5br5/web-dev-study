import React, {useState} from "react";
import {dbService} from "../fbase";

function Dweet({dweetObj, isOwner}) {

    const [editing, setEditing] = useState(false);
    const [newDweet, setNewDweet] = useState(dweetObj.text);

    async function onDeleteClick() {
        const ok = window.confirm("Are You Sure you want to delete?");
        if (ok) {
            await dbService.doc(`dweets/${dweetObj.id}`).delete();
        }
    }

    async function onSubmit(e) {
        e.preventDefault();
        await dbService.doc(`dweets/${dweetObj.id}`).update({
            text: newDweet
        });
        setEditing(false);
    }

    function onChange(e) {
        const {target: {value}} = e;
        setNewDweet(value);
    }

    function toggleEditing() {
        setEditing(prev => !prev);
    }

    return (
        <div>
            {
                editing ? (
                    <>
                        {isOwner && <>
                            <form onSubmit={onSubmit}>
                                <input type="text" onChange={onChange} placeholder="Edit you Dweet" value={newDweet}
                                       required/>
                                <input type="submit" value="Update"/>
                            </form>
                            <button onClick={toggleEditing}>Cancel</button>
                        </>}

                    </>

                ) : (<>
                        <h4>{dweetObj.text}</h4>
                        {
                            isOwner && (
                                <>
                                    <button onClick={onDeleteClick}> Delete Dweet</button>
                                    <button onClick={toggleEditing}> Edit Dweet</button>
                                </>
                            )
                        }
                    </>
                )
            }


        </div>
    );
}

export default Dweet;