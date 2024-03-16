import styels from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandeler = () => {
    if (page > 1) {
      setPage((page) => page - 1);
      console.log(page);
    }
  };

  const nextHandeler = () => {
    if (page < 10) {
      setPage((page) => page + 1);
      console.log(page);
    }
  };

  return (
    <div className={styels.pagination}>
      <button onClick={previousHandeler} className={page === 1 ? styels.disable : null}>previous</button>
      <p className={page === 1 ? styels.selected : null}>{1}</p>
      <p className={page === 2 ? styels.selected : null}>{2}</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styels.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p  className={page === 9 ? styels.selected : null}>9</p>
      <p  className={page === 10 ? styels.selected : null}>10</p>
      <button onClick={nextHandeler} className={page === 10 ? styels.disable : null}>next</button>
    </div>
  );
}

export default Pagination;
