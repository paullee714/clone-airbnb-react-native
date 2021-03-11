import React, { useEffect } from "react";
import styled from "styled-components/native"
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms, page }) => {
    useEffect(() => {
        getRooms();
    }, []);
    return <ExplorePresenter rooms={rooms} />
}