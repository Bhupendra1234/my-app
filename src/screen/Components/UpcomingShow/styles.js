import makeStyles from '@material-ui/core/styles/makeStyles';

export const mainStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100%",
        minHeight: "50vh",
        backgroundColor: "#0A0B1A",
        display: "flex",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "60px 40px",
        [theme.breakpoints.down("xs")]: {
            padding: "10px 0px",
        },
    },
    container_child: {
        width: "100%",
        overflowX: "auto",
        minHeight: "387px",
        padding: "20px 0px",
        top: "30px",
        [theme.breakpoints.down("xs")]: {
            padding: "10px",
            left: "-10px",
        },
    },
    SectionFooterPara: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        color: "#E5C558",
    },
}));

export const cardStyles = makeStyles(() => ({
    root: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        minWidth: "1140px",
        minHeight: "387px",
    },
    card: {
        position: "relative",
        width: "268px",
        height: "387px",
        borderRadius: "8px",
        backgroundColor: "#111229",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "none",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
        "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "8px",
            top: "-8px",
            borderRadius: "8px",
            background: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "none",
        },
        "& img": {
            zIndex: 4,
            position: "relative",
            width: "100%",
            maxHeight: "230px",
            borderRadius: "0px",
        },
        "& div:nth-child(2)": {
            position: "relative",
            width: "100%",
            height: "calc(100% - 230px)",
            borderRadius: "0px 0px 8px 8px",
            padding: "16px",
            boxSizing: "border-box",
            backgroundColor: "#111229",

            "& p:nth-child(2)": {
                fontFamily: "Libre Baskerville",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                color: "white",
                position: "relative",
                top: "14px",
            },

            "& span": {
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "12px",
                padding: "1px 6px",
                background: "#E5C558",
                borderRadius: "1px",
                color: "#682F26",
            },
        },
        "& div:nth-child(3)": {
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            top: "40px",

            "& div": {
                display: "flex",
                position: "relative",
                cursor: "pointer",
                flexDirection: "row",
                "& p": {
                    fontFamily: "Nunito",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#0259EB",
                    margin: "0px",
                    position: "relative",
                    top: "0px",
                },
                "& img": { width: "18.75px", margin: "0px 10px" },
            },
        },
    },
}));
