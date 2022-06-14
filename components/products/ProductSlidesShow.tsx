import { FC } from "react";
import { Slide } from "react-slideshow-image";
import styles from "./ProductSlidesShow.module.css";
import 'react-slideshow-image/dist/styles.css';

interface Props {
  images: string[];
}

export const ProductSlidesShow: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((img) => {
        const url = `/products/${img}`;
        return (
          <div key={img} className={styles['each-slide']}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};
