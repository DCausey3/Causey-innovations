import scssStyles from "./DevBanner.scss";

const DevBanner = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-text">
                🚧 This website is under active development — some features may be unavailable.
            </div>
        </div>
    );
};


export default DevBanner;