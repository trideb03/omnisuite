import VectorImage from '../../assets/vectorimage.png';
import './DisplaySection.css';

function DisplaySection() {
  return (
    <div className="displaySection">
        
        <div className="right-section">
            <img src= {VectorImage} />
        </div>
        <div className="left-section">
            <h1>
                Multiple tools and resources at one place.
            </h1>
            <p>
                Did you ever need to search for online tools individually and felt like having it all in one place? Calculator, Converter, Color scheme picker, and many more. We help you by bringing together some of the most used tools to cater your requirement.
            </p>
            <div className="button-group">
                <button>
                    Get Started
                </button>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default DisplaySection