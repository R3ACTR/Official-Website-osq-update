import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate.css";

const SongCarousel = () => {
  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="animate flex shrink-0 justify-around gap-1">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
      <div className="animate flex shrink-0 justify-around gap-1">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index + songs.length}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCarousel;
