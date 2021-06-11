import React from "react";
import upcomingShowsCardData from "../../../../asset/data/UpcomingShow"
import { cardStyles } from "../styles";

const Card = () => {
    const classes = cardStyles();
    return (
        <div className={classes.root}>
            {upcomingShowsCardData.map((cardData) => (
                <div className={classes.card}>
                    <img alt="display_picture" src={cardData.url} />
                    <div>
                        <span>{cardData.genre}</span>
                        <p>{cardData.name}</p>
                        <div>
                            <div>
                                <p>More Info</p>
                                <img alt="arrow" src={"media/rightArrow.svg"} />
                            </div>
                            {cardData.fill ? (
                                <img
                                    alt="unsave"
                                    style={{ width: "18.88px", cursor: "pointer" }}
                                    src={cardData.fill}
                                />
                            ) : (
                                <img
                                    alt="save"
                                    style={{ width: "18.88px", cursor: "pointer" }}
                                     src={"media/union.svg"}
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
