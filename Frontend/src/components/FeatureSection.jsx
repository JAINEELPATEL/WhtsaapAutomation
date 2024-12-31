import features from '../data/features';

const FeatureSection =()=>{
        return (
            <>
                <div className="Feature-section" id="features">
                <div className="Feature-title-section">
                <h1>Our Powerful Features</h1>
                </div>
                    <div className="Feat-slider">
                        {features.map(feature => (
                            <div key={feature.id} className="Feature-Card">
                            <div className="Feature-Logo">
                                <img src={feature.logo} alt={feature.name} />
                            </div>
                            <div className="Feature short desc">
                                <h3>{feature.name}</h3>
                            </div>
                            </div>
                        ))}
                        </div>

                    </div>
            </>
        )
}
    
export default FeatureSection;