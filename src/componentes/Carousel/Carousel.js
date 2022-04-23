import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/Meg-Hot-Rod-Riveter.png?alt=media&token=c6f54346-1a0e-4b79-88eb-01d1acc7efb9" className="w-1" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/Jake-Born-In-The-USA.png?alt=media&token=e3bdea98-9a8b-4664-9e86-a8f289c6098e" className="w-1" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/Meg-Cross-County-Hiker.png?alt=media&token=e5fe2218-558a-4ce8-b86e-9ba408407c61" className="w-1" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel;