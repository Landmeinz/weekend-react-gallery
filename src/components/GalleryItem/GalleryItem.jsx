import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';



function GalleryItem({listItem, fetchGalleryList, setGalleryList}) {
    console.log(`in GalleryItem`);

    const [toggleStatus, setToggleStatus] = useState(false)

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

    const image = (<img className="image"
                    src={listItem.path} 
                    alt={listItem.description} 
                />)


    const description = (
    <div className="image-description">
        <p>you made the description come to life</p>
    </div>)


    console.log(toggleStatus);

    return(
        <div className="image-card">

            <div onClick={toggle}> 
                {toggleStatus ? image : description}
            </div>
           

           
            
            <div className="image-info">
                <button onClick={handleLike} 
                    className="button-like">{listItem.likes}
                </button>
            </div>

    </div>
    )

} // GalleryItem


export default GalleryItem;