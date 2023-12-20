import { useState } from "react";
import { addpost } from "./postSlice";
import { useDispatch ,useSelector} from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import './Addpost.css'

const Addpost = ()=>{
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userid,setUserId] = useState('')

    const users = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const cansave = title && content && userid
    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.user}
        </option>
    ))
    const saveState = ()=>{
        if(title && content)
        {
            dispatch(addpost({id:nanoid(),title,content,userid}))
        }
        setTitle('')
        setContent('')
    }
    return (<>
    <section>
        <h2>Add new post</h2>
        
        <form>
        <label htmlFor="title">Title :</label>   
        <input type="text" name="title" value={title} onChange ={(e)=>setTitle(e.target.value)}></input>
        <br></br>
        <label htmlFor="postAuthor">Author :</label>
        <select id="postAuthor" value={userid} onChange={(e)=>setUserId(e.target.value)}>
            <option></option>
            {userOptions}
        </select>
        <br></br>
        <label htmlFor="content">content :</label>
        <input type="text" name="content" value={content} onChange={(e)=>setContent(e.target.value)}></input>
        <button type="button" disabled={!cansave} onClick={saveState}>add</button>
        </form>
    </section>
    </>)
}

export default Addpost