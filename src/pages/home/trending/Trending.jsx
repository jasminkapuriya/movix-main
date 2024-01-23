import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    /* The line `const { data, loading } = useFetch(`/trending/movie/`);` is using the
    `useFetch` custom hook to fetch data from the specified endpoint. */
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    /**
     * The function `onTabChange` sets the endpoint based on the selected tab.
     */
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        /* The code is rendering a section that displays a carousel of trending movies. */
        <div className="carouselSection">
            <ContentWrapper>
                <span className="likeTitle">Like</span>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <div className=""></div>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
