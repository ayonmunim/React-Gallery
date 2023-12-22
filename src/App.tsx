import PhotoAlbum from "react-photo-album";
import photos from "./assets/photos";

export default function App() {
  return (
    <div className="gallery">
      <PhotoAlbum columns={3} photos={photos} layout="masonry" />
    </div>
  );
}
