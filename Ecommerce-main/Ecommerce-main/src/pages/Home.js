import bg from "../assets/hero.jpg";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <div className="home-content text-center text-">
        <h1 className="fw-bold mb-3">
          Happy Shopping  <br /> Enjoy
        </h1>

        <p className="mb-4">
         Premium design and unbeatable quality.
        </p>

        <a href="/products" className="btn btn-primary btn-lg">
          Explore Collection
        </a>
      </div>
    </div>
  );
};

export default Home;
