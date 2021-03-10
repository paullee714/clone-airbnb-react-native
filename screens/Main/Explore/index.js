import ExploreContainer from "./ExploreContainer";


function mapDispatchToProps(dispatch) {
    return {
        getRooms: () => dispatch(getRooms())
    }
}

function mapStateToProps(state) {
    return state.roomsReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);