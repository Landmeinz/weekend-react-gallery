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
    };

    
    const toggle = () => {
        console.log(`CLICK on image to toggle`);
        setToggleStatus(!toggleStatus);
    }

    const image = (<img 
                    className="image"
                    src={listItem.path} 
                    alt={listItem.description}
                />)


    const description = (
        <div className="image-description">
            {listItem.description}
        </div>)


    console.log(toggleStatus);

    return(
        <div className="image-card">

            <div onClick={toggle}> 
                {toggleStatus ? image : description}
            </div>
           
 
            <div className="image-info">
                <i onClick={handleLike} class="fas fa-thumbs-up"></i>
                <p className="button-like">{listItem.likes}</p>
                <p className="image-tagline">{listItem.tagline}</p>
            </div>

    </div>
    )

} // GalleryItem


export default GalleryItem;