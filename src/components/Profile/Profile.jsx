import "./Profile.css";
import profileImage1 from '../../assets/profile1.png';

function Profile() {
    return (
        <section id="profile" className="profile-card">
            <div className="card">
                <img 
                    src={profileImage1} 
                    alt="Profile" 
                    className="profile-image"
                />
                <div className="card-content">
                    <h4 className="greeting">Hello, I'm</h4>
                    <h1 className="name">John Doe</h1>
                    <h2 className="title">Frontend Developer</h2>
                    <div className="btn-container">
                        <a 
                            className="btn outlined"
                            href='../../assets'
                            download="Resume.pdf"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                        <a 
                            className="btn filled"
                            href="#contact"
                        >
                            Contact Info
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
