import '../Styles/HomePage.css';
import location_image from '../Components/Assets/location_image.png';
import search_image from '../Components/Assets/search_image.png';
import real_estate from '../Components/Assets/real_estate.png';
import delivery_bike from '../Components/Assets/delivery_bike.png';
import home_services from '../Components/Assets/home_services.png';
import beauty_spa from '../Components/Assets/beauty_spa.png';
import face_and_skin from '../Components/Assets/face_and_skin.png';
import hair_saloon from '../Components/Assets/hair_saloon.png';
import nail_art from '../Components/Assets/nail_art.png';
import BannerContainer from '../Components/BannerContainer';

const HomePage = () => {
  const banners = [{
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-home-ad-design-template-4f39c93dc2d537949455a7441a61640d_screen.jpg",
    title: "MVA Dream home",
    content: "Get your dream house here babe"
  }, {
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-home-ad-design-template-4f39c93dc2d537949455a7441a61640d_screen.jpg",
    title: "MVA Dream home",
    content: "Get your dream house here babe"
  }, {
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-home-ad-design-template-4f39c93dc2d537949455a7441a61640d_screen.jpg",
    title: "MVA Dream home",
    content: "Get your dream house here babe"
  }, {
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-home-ad-design-template-4f39c93dc2d537949455a7441a61640d_screen.jpg",
    title: "MVA Dream home",
    content: "Get your dream house here babe"
  }];

  const offers = [
    {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-home-ad-design-template-4f39c93dc2d537949455a7441a61640d_screen.jpg",
    },
    {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-home-ad-design-template-4f39c93dc2d537949455a7441a61640d_screen.jpg",
    }
  ]

  return (
    <>
      <div className='main-page-head d-flex'>
        <div className='banner-search-location'>
          <div className='banner-text'>
            <h1>Super Savings at million+ stores around you !</h1>
          </div>
          <div className='col-12 d-flex align-items-center justify-content-center'>
            <div className='col-9 d-flex'>
              <span class="input-group-text">
                <img src={location_image} alt="Location_Symbol"></img>
              </span>
              <input type="text" className="col-3" id="floatingInputGroup1" placeholder="Location" />
              <span class="input-group-text">
                <img src={search_image} alt="Location_Symbol"></img>
              </span>
              <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Search for cusinies, places and more..." />
            </div>
          </div>
        </div>
      </div>

      <div className='banner-categories d-flex align-items-center justify-content-center'>
        <div class="real_estate_banner text-center">
          <img src={real_estate} alt="real_estate_banner" width={'100px'} className="img-thumbnail"></img>
          <label>Real Estates</label>
        </div>
        <div class="delivery_bike_banner text-center">
          <img src={delivery_bike} alt="delivery_bike_banner" className="img-thumbnail"></img>
          <label>Food Delivery</label>
        </div>
        <div class="home_services_banner text-center">
          <img src={home_services} alt="home_services_banner" className="img-thumbnail"></img>
          <label>Home Services</label>
        </div>
        <div class="beauty_spa_banner text-center">
          <img src={beauty_spa} alt="beauty_spa_banner" className="img-thumbnail"></img>
          <label>Beauty & Spa</label>
        </div>
        <div class="face_and_skin_banner text-center">
          <img src={face_and_skin} alt="face_and_skin_banner" className="img-thumbnail"></img>
          <label>Face & Skin</label>
        </div>
        <div class="hair_saloon_banner text-center">
          <img src={hair_saloon} alt="hair_saloon_banner" className="img-thumbnail"></img>
          <label>Hair Saloon</label>
        </div>
        <div class="nail_art_banner text-center">
          <img src={nail_art} alt="nail_art_banner" className="img-thumbnail"></img>
          <label>Nail Art</label>
        </div>
      </div>

      <div>
        <BannerContainer title={'Today`s Trending Discounts'} postText={'See all discounts'} banners={banners} isGrey={true} />
        <BannerContainer title={'Limited Time Offers'} postText={'See all offers'} banners={offers} isGrey={false} />
        <BannerContainer title={'Top Rating Deals'} postText={'See all deals'} banners={banners} isGrey={true} />
      </div>
    </>
  )
}

export default HomePage;