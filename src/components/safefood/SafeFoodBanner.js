import React, { useContext, useEffect, useState } from "react";
import { SafeFoodContext } from "./SafeFoodProvider";
import ItemsCarousel from 'react-items-carousel';
import "../../styles/banner.css"



export const SafeFoodBanner = () => {
  const { safeFoods, getSafeFoods } = useContext(SafeFoodContext);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;

  useEffect(() => {
    getSafeFoods()
  }, []);

  return (
    <>
      <section className="banner__container">
        <article className="banner__header">
          <h3><b>Safe</b>Foods</h3>
        </article>
        <article className="banner__carousel">
          <div className="banner__wrapper">
            <ItemsCarousel
              className="banner__carousel"
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={4}
              gutter={1}
              leftChevron={<button>{'<'}</button>}
              rightChevron={<button>{'>'}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {safeFoods.map(s => {
                return (
                  <div className="banner__card">
                    <div className="banner__card__text">
                      <h5>{s.food.name}</h5>
                      {s.food.location.title}
                    </div>
                  </div>
                )
              })}
            </ItemsCarousel>
          </div>
        </article>
      </section>
    </>
  )
}



