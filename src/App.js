import PostList from './features/post/PostList';
import './App.css';
import Addpost from './features/post/Addpost'

function App() {
  return (
    <div className="App">
      <Addpost/>
    <PostList/>
    </div>
  );
}

export default App;
