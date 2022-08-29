import React from "react";
import TrackListCSS from "./TrackList.css";
import Track from "./Track";

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                <Track />
                <Track />
                <Track />
            </div>
        );
    }
}