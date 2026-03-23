import bgImage from ".././assets/pictures/20260320_125323.jpg";

const Home: React.FC = () =>
    // <h1 style={{ backgroundColor: '#108d8d', color: 'white' }}>Home Page</h1>;
<div style={{backgroundImage:   `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
    
</div>
export default Home;