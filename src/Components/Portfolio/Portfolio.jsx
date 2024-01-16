import "./portfolio.scss";

const Portfolio = () => {

  return (
    <div className="portfolio" id="Projects">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
      <section>
    <div className="container">
      <a href="https://contact-users-list.vercel.app/" target="_blank">
      <img  src='/ProjectPng.png' alt="projectPreview" /></a>
      <div className="textContainer">
        <h1>CRUD Project</h1>
        <p>This is Contact Users List app, we can save the users just like CRUD - create, read, update and delete the user.</p>
        <a href="https://contact-users-list.vercel.app/" target="_blank">

        <button>See Demo</button>
        </a>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Portfolio;
