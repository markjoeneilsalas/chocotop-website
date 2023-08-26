import React from 'react'

function Carousel() {
    
    
  return (
    <div className='pt-5'>
        <div class="main-gallery">
            <div class="gallery-cell">1</div>
            <div class="gallery-cell">2</div>
            <div class="gallery-cell">3</div>
        </div>
        <div className='carousel-page'>
            <a class="prev h1 text-decoration-none" onclick="plusSlides(-1)">❮</a>
            <a class="next h1 text-decoration-none" onclick="plusSlides(1)">❯</a>
        </div>
    </div>
  )
}

export default Carousel