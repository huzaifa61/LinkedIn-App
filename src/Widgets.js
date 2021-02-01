import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_artcleleft">
                <FiberManualRecordIcon />

            </div>
            <div className="widgets_articleright">
                <h4> {heading} </h4>
                <p> {subtitle} </p>

          </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2> LinkedIn news </h2>
                <InfoIcon />
             
            </div>
            {newsArticle(" Tesla hits new highs ","elon musk became reache Person")}
            {newsArticle(" REACT IS BEST ","TOP NEWS - 999 Readers")}
            {newsArticle("CORONA : INDIA updates","India is at world third number")}
            {newsArticle("Bitcoin Breaks $22k ", "bitcoins is at all time high")}
        </div>
    );
}

export default Widgets
