"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const Form = () => {
  const [postTitle, setPostTitle] = useState("");
  const router = useRouter();

  const makeNewPost = async () => {
    const res = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
      }),
    });

    const data = await res.json();
    router.refresh();
    setPostTitle("");
    console.log("🚀 ~ file: Form.tsx:17 ~ makeNewPost ~ data", data);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setPostTitle(e.target.value);
        }}
        value={postTitle}
      />
      <button type="button" onClick={makeNewPost}>
        Make a new Post
      </button>
    </div>
  );
};
