import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';



// PUT / UPDATE the number of likes; 
function GalleryItem({listItem, fetchGalleryList}) {
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
        // if(taglineStatus === true)
    };

    

    // CONDITIONAL RENDERING for the image or text display on card;
    const [toggleStatus, setToggleStatus] = useState(true)


    // image side of the card;
    const image = (<img 
                    className="image"
                    src={listItem.path} 
                    alt={listItem.description}
                />
    )

    // text side of the card;
    const description = (    
            <div 
                className="image-description">
                {listItem.description}
            </div>
    )



    // CONDITIONAL RENDERING of the red dot that's counting the number of likes;
    const likeCountDisplay = (
        <div className="like-count">
            <p>{listItem.likes}</p>
        </div>
    )

    const likeCountHidden = (
        <div className="like-count hidden"></div>
    )



    return (
        <div className="image-card">

            <div onClick={() => setToggleStatus(!toggleStatus)}> 
                {toggleStatus ? image : description}
            </div>
           
 
            <div className="image-info">
                    {/* when clicked add 1 to the current like count */}
                <i onClick={handleLike} className="fas fa-thumbs-up"></i>

                    {/* display red dot with current count of likes */}
                {listItem.likes > 0 ? likeCountDisplay : likeCountHidden}
                
                    {/* tagline of image */}
                <p className="image-tagline">{listItem.tagline}</p>
            </div>

    </div>
    )

} // GalleryItem



export default GalleryItem;