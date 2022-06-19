import * as Styled from "./styled";

import React, { useEffect, useState } from "react";

import axios from "axios";

export default function AlbumList() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const data = await axios.get("/data/gallery.json");
      setGalleryList(data.data);
    })();
  }, []);

  return (
    <Styled.Container>
      {galleryList.map((gallery, index) => {
        return (
          <Styled.Photo key={index}>
            <img src={gallery.imgUrl} alt={`이미지${index}`} />
          </Styled.Photo>
        );
      })}
      <Styled.Photo></Styled.Photo>
    </Styled.Container>
  );
}
