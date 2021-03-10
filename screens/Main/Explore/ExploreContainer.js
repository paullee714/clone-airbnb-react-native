import React, { useEffect } from "react";
import styled from "styled-components/native"
import ExplorePresenter from "./ExplorePresenter";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text``;

export default ({ getRooms, rooms, page }) => {
    useEffect(() => {
        getRooms();
    }, [])
    return (
        < ExplorePresenter rooms={rooms} />
    )
}