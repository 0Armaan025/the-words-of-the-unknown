"use client"; // Make sure this page runs on the client-side
import "./say-page.css";
import React, { useState } from "react";
import TransparentNavbar from "@/components/transparent-navbar"; // Assuming you already have a TransparentNavbar component

type Props = {};

const SayPage = (props: Props) => {
  const [image, setImage] = useState<string | null>(null); // To store image URL
  const [message, setMessage] = useState<string>(""); // To store text message
  const [emoji, setEmoji] = useState<string>(""); // To store selected emoji
  const [customEmoji, setCustomEmoji] = useState<string>(""); // To store custom emoji
  const [customEmojis, setCustomEmojis] = useState<string[]>([]); // To store added custom emojis

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle emoji click
  const handleEmojiClick = (selectedEmoji: string) => {
    setEmoji(selectedEmoji);
  };

  // Handle adding custom emoji
  const handleCustomEmojiAdd = () => {
    if (customEmoji.trim()) {
      setCustomEmojis([...customEmojis, customEmoji]);
      setCustomEmoji(""); // Clear the input after adding
    }
  };

  return (
    <div className="say-page">
      <TransparentNavbar />
      <center>
        <h3
          className="mt-8 text-4xl underline"
          style={{ fontFamily: "Delius, system-ui" }}
        >
          Let's say to the world!
        </h3>
      </center>
      <div className="container mx-auto p-4 mt-8">
        <div className="image-upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded-md border-black"
          />
          {image && (
            <div className="image-preview mt-4">
              <img
                src={image}
                alt="Uploaded Preview"
                className="max-w-[300px] rounded-md shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Message Input Section */}
        <div className="message-input mt-8">
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md border-black"
            rows={4}
          />
        </div>

        {/* Emoji Selection Section */}
        <div className="emoji-selection mt-8">
          <h3 className="text-xl mb-2">Choose an Emoji:</h3>
          <div className="emoji-grid grid grid-cols-6 gap-2">
            {[
              "😀",
              "😃",
              "😄",
              "😁",
              "😆",
              "😅",
              "😂",
              "🤣",
              "😊",
              "😇",
              "🙂",
              "🙃",
              "😉",
              "😌",
              "😍",
              "🥰",
              "😘",
              "😗",
              "😙",
              "😚",
              "🤗",
              "🤩",
              "🥳",
              "😎",
              "🤓",
              "😏",
              "😒",
              "😔",
              "😜",
              "😝",
              "😛",
            ].map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleEmojiClick(emoji)}
                className="emoji-btn text-2xl p-2 border rounded-md hover:bg-gray-100 border-black transition-all"
              >
                {emoji}
              </button>
            ))}

            {/* Display custom emojis */}
            {customEmojis.map((customEmoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(customEmoji)}
                className="emoji-btn text-2xl p-2 border rounded-md hover:bg-gray-100 border-black transition-all"
              >
                {customEmoji}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Emoji Input Section */}
        <div className="custom-emoji mt-8">
          <input
            type="text"
            value={customEmoji}
            onChange={(e) => setCustomEmoji(e.target.value)}
            placeholder="Enter custom emoji"
            className="p-2 border rounded-md border-black w-full mb-4"
          />
          <button
            onClick={handleCustomEmojiAdd}
            className="bg-gray-600  text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-all"
          >
            Add Custom Emoji
          </button>
        </div>

        {/* Preview Section */}
        <div className="preview mt-8 p-4 border border-gray-300 rounded-md">
          <h2 className="text-2xl font-semibold">Your Preview:</h2>
          <div className="preview-content mt-4">
            {image && (
              <img src={image} alt="Preview" className="max-w-[200px] mb-4" />
            )}
            <p className="text-lg">{message}</p>
            {emoji && <span className="text-4xl">{emoji}</span>}
          </div>
        </div>

        {/* Say Button */}
        <div className="say-button mt-8 text-center">
          <button
            onClick={() => alert("Say button clicked!")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
          >
            Say It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SayPage;
