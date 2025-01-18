import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const Inner = () => (
    <>
      <span
        className="d-flex align-items-center position-relative px-4 py-2 rounded-pill overflow-hidden group-hover-opacity-100"
        style={{ minHeight: "60px" }}
      >
        <span
          className="position-relative fw-bold text-uppercase"
          style={{ zIndex: 2 }}
        >
          {children}
        </span>
        {icon ? (
          <img
            src={icon}
            alt="circle"
            className="me-3 img-fluid"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
              zIndex: 10,
            }}
          />
        ) : (
          <i class="bi bi-arrow-right ms-2 button-comic-icon"></i>
        )}
      </span>
    </>
  );

  return href ? (
    <a
      className={clsx(
        "position-relative p-1 rounded-pill shadow-sm group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "position-relative p-1 rounded-pill shadow-sm group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
