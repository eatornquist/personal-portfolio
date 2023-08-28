import { items } from '../data'

const PortfolioItem = () => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id} className={item.className}>
            <div className="portfolio-wrap">
              <img src={item.src} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={item.src}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title={item.title}
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default PortfolioItem
