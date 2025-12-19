import { useContext } from "react";
import { ThemeContext } from "../../Contaxt/ThemeContext";

const Video = () => {
    const { isLight, data } = useContext(ThemeContext);
    const arranged = [];
    let realIndex = 0; // pointer for actual items

    const filtered = data?.filter(item =>
        isLight ? item.themeName === "Light" : item.themeName === "Dark"
    );

    for (let i = 0; i < filtered?.length + 100; i++) {
        const col = (i % 5) + 1; // column number 1-5

        if (col === 3) {
            // 3rd column empty
            arranged.push({ type: "empty" });
        } else {
            // place real item here
            if (filtered[realIndex]) {
                arranged.push({ type: "img", item: filtered[realIndex] });
                realIndex++;
            }
        }

        // stop when all items are consumed
        if (realIndex >= filtered.length) break;
    }

    return (
        <div className="fw-main-row">
            <section className={`${isLight ? "development_dev__mvT8y-LIGHT" : "development_dev__mvT8y"}`} id="development">
                <div className="development_dev_screens__L4P5Z">
                    <div className="development_dev_screens_wrapper__iDJ0j">
                        <div className="dev-screens_screens__ULiw1">
                            <ul className="dev-screens_screens_list__QZ0lc">
                                {arranged.map((block, i) => (
                                    block.type === "img" ? (
                                        <li key={i} className="dev-screens_screens_item__x7szP">
                                            <div className="dev-media_media__eQq_h">
                                                <img
                                                    alt="media"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="dev-media_media_preview__hjQcj"
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                    src={block.item.image}
                                                />
                                            </div>
                                        </li>
                                    ) : (
                                        <li key={i} className="dev-screens_screens_item__x7szP">
                                            <div className="dev-media_media__eQq_h"></div>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="development_dev_hand_wrapper__yXHKJ">
                        <div className="development_dev_hand__1L3Gd"><img alt="hand" decoding="async"
                            data-nimg="fill" className="development_dev_hand_image__s8v9J"
                            style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }}
                            sizes="100vw" src="./images/hand.png" />
                            <div className="dev-video_video__tvEzd">

                                <video
                                    src="./images/iShivaxvideo-frame.mov" // Make sure this path is correct
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    style={{ width: '100%', height: '100%' }} // Optional styling
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Video