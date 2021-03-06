import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../../../compo/navbar"
import CardSection from "./component/card";
import { mainStyles } from "./styles";

const body = (
    <>
        <h1>Cari Cari</h1>
        <p>
            Live from their sofa to yours. Get closer to your favorite artists, and
            never miss out.
    </p>
    </>
);

const WallpaperSection = () => {
    const classes = mainStyles();
    return (
        <div className={classes.root}>
            <img alt="wallpaper" src={"media/wallpaper.png"} />
            <div className={classes.root_child1}>
                <Container className={classes.container}>
                    <Navbar />
                    <div className={classes.root_child1_part2}>{body}</div>
                    <div style={{ width: "100%", overflowX: "auto" }}>
                        <CardSection />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WallpaperSection;
