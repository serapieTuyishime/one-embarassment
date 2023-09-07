import { css } from "../../../styled-system/css";

const Hero = () => {
    return (
        <div className={css({ backgroundColor: "#bada55" })}>
            <div
                className={css({
                    display: "flex",
                })}
            >
                <span
                    className={css({
                        paddingX: "8",
                        paddingY: "2",
                        backgroundColor: "orange.700",
                        color: "white",
                        fontWeight: "800",
                        fontSize: "2xl",
                        width: "1/2",
                        textTransform: "uppercase",
                    })}
                >
                    Donate
                </span>
                <span
                    className={css({
                        paddingX: "8",
                        paddingY: "2",
                        backgroundColor: "orange.500",
                        color: "white",
                        fontWeight: "800",
                        fontSize: "2xl",
                        width: "1/2",
                        // textTransform: "uppercase",
                    })}
                >
                    Adopt
                </span>
            </div>
            <p className={css({ textStyle: "heading/marketing" })}></p>
        </div>
    );
};

export default Hero;
