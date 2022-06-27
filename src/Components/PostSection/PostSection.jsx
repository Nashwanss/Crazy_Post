// importing libraries
import { AiOutlineCloudUpload } from 'react-icons/ai'
// importing components

// importing Assets

// importing CSS
import './PostSection.css';



export default function PostSection ({darkMode}) {
    return (
        <>
        <div className={darkMode ? "main-section darkMode" : "main-section lightMode"}>
            <div className="input-section">
                <input
                className="title-input"
                type="text"
                name="title"
                placeholder="Please insert the title here"
                />
                <input 
                className="post-body-input"
                type="text"
                name="post-body"
                placeholder="Please insert the post body here"
                />
            </div>
            <div className="img-and-btn-section">
                <div className="image-container">
                    <AiOutlineCloudUpload size="3em" color="#4EC5D5"/>
                </div>
                <button
                className="btn post-btn"
                onClick={() => (console.log('Post the post'))}
                >
                    POST
                </button>
            </div>
        </div>
        </>
    )
}
