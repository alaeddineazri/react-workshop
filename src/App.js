import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbackStates";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import About from "./components/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import NestedRoutes from "./components/NestedRoutes";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handelAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };

  const handleDelete = (id) => {
    if (window.confirm("are you sur you wanna delete this ")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <BrowserRouter>
      <Header text="Feedback App" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handelAdd={handelAdd} />
                <FeedbackStates feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
                <AboutIconLink />
                
              </>
            }
          ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/post/:id/:name" element={<Post />} />
        <Route path="/Nested/*" element={<NestedRoutes />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
