type Weathericon = { 
    img: string
    imgWebp: string
    className?: string
}


function Weathericon({img, imgWebp, className}: Weathericon) {
  return (
    <>
    <picture>
        {imgWebp && <source srcSet={imgWebp} type="image/webp" />}
        <img 
         src={img}
         alt={img  || "weather icon" } 
         className={`${className}`}
         />
    </picture>
    </>
  )
}

export default Weathericon