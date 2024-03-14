export const DayScrollRow = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="carousel">
        <div
          id="slide1"
          className="carousel-item relative w-full justify-center"
        >
          <p>Last 3 days</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full justify-center"
        >
          <p>Last 7 days</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full justify-center"
        >
          <p>Last 30 days</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div>
        <details className="dropdown">
          <summary className="m- btn border-slate-400 w-[150px]">
            Newest first{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Oldest first</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};
