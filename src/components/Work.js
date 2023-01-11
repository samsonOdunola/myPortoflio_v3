const Work = () => {
  return (
    <section className="worksection">
      <p className="title">selected</p>
      <h2>Projects</h2>
      <div className="projectdisplay">
        <a className="project" target="_" href="https://loftbankapp.cyclic.app">
          <img
            src={require("../image/cover image.jpg")}
            alt="loftbank landing page"
          />
          <h3>Loft Bank</h3>
          <p>React-fintech app design</p>
        </a>
        <a
          className="project"
          target="_"
          href="https://samson-redstore-ecommerce.netlify.app"
        >
          <img src={require("../image/Redstore.jpg")} alt="Red store" />
          <h3>Red Store</h3>
          <p>React-e commerce App</p>
        </a>
        <a
          className="project"
          target="_"
          href="https://samson-loopstudio-frontenddesign.netlify.app"
        >
          <img src={require("../image/loopstudio.jpg")} alt="loop studio" />
          <h3>Loop Studio</h3>
          <p>HTML,CSS,JAVASCRIPT - Front end tutorial</p>
        </a>
        <a
          className="project"
          target="_"
          href="https://samson-weather-app.netlify.app"
        >
          <img src={require("../image/weatherapp.jpg")} alt="weather app" />
          <h3>Weather App</h3>
          <p>REACT - Weather App</p>
        </a>
        <a
          className="project"
          target="_"
          href="https://samson-chatroom-app.herokuapp.com"
        >
          <img src={require("../image/chat app.jpg")} alt="weather app" />
          <h3>Chat room</h3>
          <p>REACT,SOCKET.IO,EXPRESS - Instant messaging App</p>
        </a>
      </div>
    </section>
  );
};

export default Work;
