export default function BannerContainer({ title, postText, banners, isGrey }) {
    return <div className="main-banner-container" style={{ backgroundColor: isGrey && '#dcdcdc' }}>
        <div className="d-flex align-items-center justify-content-between">
            <h3>{title}</h3>
            <p>{postText}</p>
        </div>
        <div className="d-flex w-100 banner-row col-12">
            {banners.map((banner) => {
                return <div className="banner-box col-4">
                    <img src={banner.image} className="col-12" />
                    <div className="banner-text-area">
                        <div className="fw-bold">{banner?.title}</div>
                        <div className="fs-6 fw-lighter">{banner?.content}</div>
                    </div>
                </div>
            })}
        </div>
    </div>
}