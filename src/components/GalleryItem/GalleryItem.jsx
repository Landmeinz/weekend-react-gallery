import './GalleryItem.css';
import axios from 'axios';



function GalleryItem({listItem, fetchGalleryList, setGalleryList}) {
    console.log(`in GalleryItem`);


    const handleLike = (id) => {
        console.log(`you LIKED this image`);

        axios.put(`/gallery/like/${listItem.id}`)
        .then((response) => {
            console.log('PUT /gallery response', response);
            fetchGalleryList();
        }).catch((error) => {
            console.log('PUT /gallery ERROR', error);
        });
    };


    return(
        <div className="image-card">

            <img className="image"
                src={listItem.path} 
                alt={listItem.description} 
            />
            
            <div className="image-info">
                <button onClick={handleLike} 
                    className="button-like">{listItem.likes}
                </button>
            </div>

    </div>
    )

} // GalleryItem


export default GalleryItem;