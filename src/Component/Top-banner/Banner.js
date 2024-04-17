import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-body">
            <div className="banner">
                <h1>Welcome To The Writer's World</h1> 
                <h2>Invite World's greatest writers for your next Event</h2>
                {/* -----Total Budget------ */}
                <h3 className='mb-3'>Total Budget: 100$ Million</h3>
            </div>
        </div>
    );
};

export default Banner;
