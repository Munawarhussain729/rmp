import React, { useEffect, useState } from "react";

import { genres } from "../assets/constant";
import SongCard from "./SongCard";
import axios from "axios";

const MainDiscover = () => {
  const genreTitile = "Pop";
  const [songs, setSongs] = useState([]);
  const [selectedCate, setSelectedCate] = useState('')

  // const options = {
  //   method: "GET",
  //   url: "https://spotify81.p.rapidapi.com/top_200_tracks",
  //   headers: {
  //     "X-RapidAPI-Key": "706c180b6dmsh2e2bd50881882d3p18dab8jsncee714dc1521",
  //     "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    const PostTheOrder = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://spotify81.p.rapidapi.com/search",
          params: {
            q: "Jack",
            type: "multi",
            offset: "0",
            limit: "10",
            numberOfTopResults: "5",
          },
          headers: {
            "X-RapidAPI-Key":
              "706c180b6dmsh2e2bd50881882d3p18dab8jsncee714dc1521",
            "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
          },
        };

        await axios
          .request(options)
          .then(function (response) {
            const data = response.data;
            setSongs(data.tracks)
            console.log(data.tracks)
          })
          .catch(function (error) {
            console.error(error);
          });
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    };
    PostTheOrder();
  }, []);
  return (
    <div className="flex flex-col p-4">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4">
        <h2 className="font-bold text-3xl text-left">Discover {genreTitile}</h2>
        <select className="discover-select rounded-lg" onChange={(e)=>setSelectedCate(e.target.value)}>
          {genres.map((genere) => {
            return (
              <option key={genere.value} value={genere.value}>
                {genere.title}
              </option>
            );
          })}
        </select>
      </div>
      <h1 style={{color:"white"}}>{selectedCate}</h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 m-3">
        {songs.map((song, i) => (
          <SongCard key={song.key} song={song} songName = {song.data.name}/> 
          // songName = {song.data.name}
        ))}
      </div>

    </div>
  );
};

export default MainDiscover;
