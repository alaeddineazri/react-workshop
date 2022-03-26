import React from "react";
import FeedbackItems from "./FeedbackItems";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <h1>No feedback yet </h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          >
            <FeedbackItems
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

// with no animations

{
  /* <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItems item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div> */
}
