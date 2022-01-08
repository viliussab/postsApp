import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import PostList from "./Pages/Post/PostList";
import PostCreation from "./Pages/Post/PostCreation";
import PostInfo from "./Pages/Post/PostInfo";

function App() {
  return (
      <>
          <NavigationBar />
          <Routes>
              <Route path="/" element={<PostList/>} />
              <Route path="/post" element={<PostList/>} />
              <Route path="/post/:id" element={<PostInfo/>} />
              <Route path="/post/create" element={<PostCreation/>} />
          </Routes>
      </>
  );
}

export default App;
