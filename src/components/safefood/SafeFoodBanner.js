import React, { useContext, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import "../../styles/banner.css"
import { SafeFoodContext } from "./SafeFoodProvider";


export const SafeFoodBanner = () => {
    const { safeFoods, getSafeFoods } = useContext(SafeFoodContext);

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
                    <Carousel
                        show={4}>
                        <Carousel.Item>
                            <>
                             {safeFoods.map(s => {
                                 return( <h1>{s.id}</h1>)
                             })}
                            </>
                        </Carousel.Item>
                    </Carousel>
                </article>
            </section>
        </>
    )
}



