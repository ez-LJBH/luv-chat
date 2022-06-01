import * as Styled from "./styled";

import React, { useState } from "react";

import ModalImage from "react-modal-image";
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
            <Styled.GalleryItem key={gallery.id}>
              <ModalImage
                small={gallery.imgUrl}
                large={gallery.imgUrl}
                hideZoom
              />
            </Styled.GalleryItem>
          );
        })}
    </Styled.Container>
  );
};

export default GalleryList;
