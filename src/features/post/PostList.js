import {useDispatch,useSelector} from 'react-redux'
import './Postlist.css'
import PostAuthour from './PostAuthor'

const PostList = ()=>{
    const posts = useSelector((state)=>state.post)

    const renderedPosts = posts.map(post=>(
        <div className='pos'>
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <PostAuthour userId={post.userid}/>
        </article>
        </div>
    ))
    return (<>
    <h1 >Posts</h1>
    {renderedPosts}
    </>)
}

export default PostList