import React from "react";
import TrackCSS from "./Track.css";

export class Track extends React.Component {
    renderAction() {
        if (this.props.isRemoval) {
            return (
                <button className="Track-action">-</button>
            );
        } else {
            return (
                <button className="Track-action">+</button>
            );
        }
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                {/* <h3><!-- track name will go here --></h3> */}
                {/* <p><!-- tr/ack artist will go here--> | <!-- track album will go here --></p> */}
                </div>
                {/* <button className="Track-action"><!-- + or - will go here --></button> */}
            </div>
        )
    }
}