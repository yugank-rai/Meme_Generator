import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import html2canvas from 'html2canvas'; 
import Text from "../components/text.jsx";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef(null);

  const addText = () => setCount(count + 1); 
  const exportMeme = () => {
    if (memeRef.current) {
      html2canvas(memeRef.current, { useCORS: true }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'my-meme.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    
    <div>
      <div ref={memeRef} style={{ width: "600px", border: "1px solid", padding: "10px" }}>
        <img src={params.get("url")} width="250px" alt="meme" crossOrigin="anonymous" />
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Text key={index} />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={exportMeme}>
        Save Meme
      </Button>
    </div>
  );
};

export default EditPage;