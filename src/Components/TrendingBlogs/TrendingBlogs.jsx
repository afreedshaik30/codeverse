const TrendingBlogs = ({ blogs }) => {
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {blogs.slice(0, 3).map(
          (
            blog // Only first 3 blogs
          ) => (
            <div className="col" key={blog.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={blog.url}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column gap-2">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">
                    A brief overview of {blog.title}. Click below to read more.
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-auto w-100"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TrendingBlogs;
