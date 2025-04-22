# 🎵 React Jukebox Playlist App

A fun and interactive jukebox app built with React. Users can insert virtual coins, play songs, see previews, and track how many times each track has been played. Powered by React 18 and hooks like `useState`.

---

## Features

- Display a dynamic playlist of songs
- Highlight the currently playing track
- Virtual jukebox balance system (insert £1 to play)
- Click a song or press "Next" to change track
- View play counts sorted by popularity
- Disabled controls when balance is £0
- Clean UI and real-time interactivity with React hooks

---

## Tech Stack

- **React 18**
- **Vite**
- **JSX + Hooks** (`useState`)
- **CSS**

---

## 📁 Project Structure

bash
src/
├── components/
│ ├── Balance.jsx
│ ├── Data.jsx
│ ├── Heading.jsx
│ ├── PlayCounts.jsx
│ └── SongList.jsx
├── App.jsx
├── main.jsx
├── index.css
└── index.html

How to Use te Repo

- git clone https://github.com/Cosmas-ogo/react-jukebox.git
  cd react-jukebox

- npm install

- npm run dev

Customization you can add new songs or edit existing ones in /components/Data.jsx

Example

const SongsData = [
{
id: 1,
title: "Dreams",
artist: "Fleetwood Mac",
albumCover: "https://...",
previewURL: "https://...",
},
];
