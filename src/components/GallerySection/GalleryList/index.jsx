import * as Styled from "./styled";

import React, { useState } from "react";

import axios from "axios";
import { useCallback } from "react";
import { useEffect } from "react";

const GalleryList = () => {
  const [galleryList, setGalleryList] = useState([]);

  const clickItem = useCallback(() => {
    alert("이미지 클릭");
  }, []);

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
            <Styled.GalleryItem key={gallery.id} onClick={clickItem}>
              <img src={gallery.imgUrl} alt={gallery.place} />
            </Styled.GalleryItem>
          );
        })}
    </Styled.Container>
  );
};

export default GalleryList;
