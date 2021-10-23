import './GalleryList.css';



function GalleryList({galleryList}) {
    console.log(`in GalleryList`);
    console.log(galleryList);

    const handleLike = () => {
        
    }
    
    return(
        <div className="image-container"> 

            {galleryList.map((listItem) => (

                <div className="image-card">

                    <img className="image"
                        key={listItem.id}
                        src={listItem.path} 
                        alt={listItem.description} 
                    />
                    
                    <div className="image-info">
                        <button onClick={handleLike} className="button-like">LIKE</button>
                        <p className="likes">{listItem.likes}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}; // GalleryList




export default GalleryList;