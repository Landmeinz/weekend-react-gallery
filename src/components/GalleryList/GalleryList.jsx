import './GalleryList.css';



function GalleryList({galleryList}) {
    console.log(`in GalleryList`);
    return(
        <div className="image-container"> 
            {/* <img src={galleryList.path} alt={galleryList.path} /> */}
        </div>
    )
} // GalleryList


export default GalleryList;