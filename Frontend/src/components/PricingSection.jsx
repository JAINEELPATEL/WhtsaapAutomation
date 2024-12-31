import '../styles/Price.css'
const PricingSection=() =>{
    return (
        <>
        <div className="PriceSection">
        <h1>Pricing</h1>
        <p id="diffP">Our pricing reflects our commitment to providing value-packed solutions tailored to your needs. Choose from our range of plans, each designed to offer essential features at competitive prices. Our goal is to make high-quality services accessible, empowering businesses to thrive and succeed in 
                    today's dynamic market. Explore our plans and discover the perfect fit for your requirements.</p>
    <div className="CardSection">
    <div class="pack-container">
    <div class="header">
        <h3 class="title">Basic</h3>
    </div>
    <div class="price-container">
        <span>₹</span><span>0</span>
        <span>per month</span>
    </div>
    <hr/>
    <div class="lists">
        <div class="list">
            <span><svg></svg></span>
            <p>The free mode lets you access 20 data records and send them.</p>
        </div>
    </div>
    <div class="button-container">
        <button>Subscribe</button>
    </div>
</div>

<div class="pack-container">
    <div class="header">
        <h3 class="title">Pro</h3>
    </div>
    <div class="price-container">
        <span>₹</span><span>79</span>
        <span>per month</span>
    </div>
    <hr/>
    <div class="lists">
        <div class="list">
            <span><svg></svg></span>
            <p>The pro mode lets you access 200 data records and send them.</p>
        </div>
    </div>
    <div class="button-container">
        <button>Subscribe</button>
    </div>
</div>

<div class="pack-container">
    <div class="header">
        <h3 class="title">Premium</h3>
    </div>
    <div class="price-container">
        <span>₹</span><span>149</span>
        <span>per month</span>
    </div>
    <hr/>
    <div class="lists">
        <div class="list">
            <span><svg></svg></span>
            <p>The Premium mode lets you access 500+ data records and send them.</p>
        </div>
    </div>
    <div class="button-container">
        <button>Subscribe</button>
    </div>
</div>
    </div>
</div>

        </>
    );
}

export default PricingSection;