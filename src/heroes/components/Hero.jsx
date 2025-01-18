import Button from "../components/Button.jsx";

export const Hero = () => {
  return (
    <section className="position-relative pt-5 pb-4 pt-lg-3 pb-lg-4 pt-md-4 pb-md-3 bg-info">
      <div id="hero">
        <div className="container-fluid">
          <div className="position-relative z-2">
            <div className="text-uppercase small text-white mb-3">
              coleccion de lujo
            </div>
            <h1
              id="main-title"
              className="mb-4 text-uppercase text-white main-title"
            >
              Conoce a los <span>superheroes Argentinos</span>
              <br /> de Marvel y DC
            </h1>
            <p className="mb-4 lead text-white" style={{ maxWidth: "440px" }}>
              Descubre sus alteregos, poderes, habilidades y mucho más. También
              el momento en el que aparecieron por primera vez.
            </p>
            <Button containerClassName={"button-comic"} href={"all"}>
              Vamos
            </Button>
          </div>

          <div
            className="position-absolute start-50 translate-middle-x"
            style={{
              top: "-8rem",
              width: "1230px",
              pointerEvents: "none",
            }}
          >
            <img src="/images/hero.png" className="img-fluid" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
