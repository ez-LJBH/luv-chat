import * as Styled from "./styled";

import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";

const GalleryList = () => {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const data = await axios.get("/data/gallery.json");
      setGalleryList(data.data);
    })();
  }, []);

  return (
    <Styled.Container>
      {galleryList.length > 0 &&
        galleryList.map((gallery, index) => {
          return (
            <div key={gallery.id}>
              <img src={gallery.imgUrl} alt={gallery.place} />
            </div>
          );
        })}
    </Styled.Container>
  );
};

export default GalleryList;
