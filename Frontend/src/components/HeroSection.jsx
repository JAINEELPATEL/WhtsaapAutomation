
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const HeroSection = ()=>{
    return(
        <>
            <div className="Hero-section">
<div className="Logo-part"><h1>TetraThread</h1></div>
<div className="Hero-content">
<h1>Streamline Your Workflow with Effortless Messaging</h1>
</div>
<div className="Hero-Desc">
      <p>Our product revolutionizes how businesses manage communication, providing a seamless platform for sending bulk messages effortlessly. With robust features tailored for modern enterprises, our solution empowers teams to connect with clients,
      automate messaging tasks, and enhance productivity. Whether it's scheduling campaigns, personalizing messages, or analyzing engagement metrics, our tool simplifies every aspect of messaging, making
      communication more effective and efficient.for businesses of all sizes. Our platform, CommunicateX, is designed to streamline the entire messaging process, from campaign planning to execution and analysis. With intuitive features for message personalization and targeted outreach, CommunicateX enables businesses to create engaging campaigns that resonate with their audience.
      Moreover, our tool's analytics capabilities provide valuable insights into campaign performance, allowing teams to make data-driven decisions and optimize their messaging strategies for better results. By centralizing communication tasks and automating repetitive processes, CommunicateX empowers organizations to focus on building meaningful connections with their clients and driving growth in a competitive market landscape.
            </p>
</div>
<div class="Signup">
        <div class="signup-container">
          <div class="signup-dice">
            <h3>New User?</h3>
            <button>Signup Now ! <FaArrowUpRightFromSquare /></button>
          </div>
        </div>
      </div>
</div>
        </>
    );
}

export default HeroSection;