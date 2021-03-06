import './GalleryList.css';

import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({galleryList, fetchGalleryList}) {

    console.log(`in GalleryList`);
    console.log(galleryList);

    return(
        <div className="image-container"> 

            {galleryList.map((listItem) => (
                <GalleryItem 
                    key={listItem.id}
                    listItem={listItem} 
                    fetchGalleryList={fetchGalleryList}
                />
            ))}
        </div>
    )
}; // GalleryList



export default GalleryList;