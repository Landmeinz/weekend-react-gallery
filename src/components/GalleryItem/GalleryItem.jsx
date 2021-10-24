import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';



function GalleryItem({listItem, fetchGalleryList, setGalleryList}) {
    console.log(`in GalleryItem`);

    const [toggleStatus, setToggleStatus] = useState(true)

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

    
    const toggleDescription = () => {
        console.log(`CLICK on image to toggle`);
        setToggleStatus(!toggleStatus);
    }

    const image = (<img 
                    className="image"
                    src={listItem.path} 
                    alt={listItem.description}
                />
    )


    const description = (
        <div className="image-description">
            {listItem.description}
        </div>
    )

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

            <div onClick={toggleDescription}> 
                {toggleStatus ? image : description}
            </div>
           
 
            <div className="image-info">
                {/* when clicked add 1 to the current like count */}
                <i onClick={handleLike} class="fas fa-thumbs-up"></i>
                {/* display red dot with current count of likes;  */}
                {listItem.likes > 0 ? likeCountDisplay : likeCountHidden}
                {/* tagline of image */}
                <p className="image-tagline">{listItem.tagline}</p>
            </div>

    </div>
    )

} // GalleryItem


export default GalleryItem;