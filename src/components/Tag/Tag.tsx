import React from "react";
import "./Tag.css";

interface TagProps {
  language: string; 
}

const Tag: React.FC<TagProps> = ({ language }) => {
  return (
    <div className='tag_div'>
      <p id="tag_name">
        {language}  
      </p>
    </div>
  );
};

export default Tag;
