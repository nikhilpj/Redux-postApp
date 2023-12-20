import { useSelector } from "react-redux"

const PostAuthour=({userId})=>{
    const users = useSelector(state=>state.user)
    const author = users.find(user=>user.id===userId)
    return (
        <span>by {author?author.user : 'unknown'}</span>
    )
}

export default PostAuthour