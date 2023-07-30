import { useMemo, useState } from 'react';

import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';

import './App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, language: 'яя', rate: '2.6' },
    { id: 2, language: 'аа', rate: '5' },
    { id: 3, language: 'бб', rate: '3' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [visible, setVisible] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => {
        return a[filter.sort].localeCompare(b[filter.sort])
      });
    } return posts;
  }, [filter.sort, posts]);


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.language.toLowerCase().includes(filter.query.toLowerCase()));
  }, [sortedPosts, filter.query])

  const createPost = (postInfo) => {
    setPosts([...posts, postInfo])
    setVisible(false);
  }

  const removePost = (id) => {
    setPosts(posts.filter((post) => id !== post.id));
  }

  const addLanguageHandler = () => {
    setVisible(true);
  }

  return (
    <div className="App">
      <MyButton onClick={addLanguageHandler}>
        Добавить язык
      </MyButton>
      <MyModal
        visible={visible}
        setVisible={setVisible}
      >
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length ?
        <PostList posts={sortedAndSearchedPosts} remove={removePost} /> :
        <h2>Постов нет вин приняв илслэм</h2>
      }
    </div>
  );
}

export default App;
