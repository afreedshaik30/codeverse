import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import TrendingBlogs from "../Components/TrendingBlogs/TrendingBlogs";
import { blogs as blogsData } from "../Utils/MockData.js";

const blogs = [
  {
    id: 1,
    title: "Java Programming",
    url: "/media/java.jpg",
    category: "JAVA",
  },
  {
    id: 2,
    title: "React Development",
    url: "/media/reactUser.png",
    category: "REACT",
  },
  {
    id: 3,
    title: "MySQL Database",
    url: "/media/mySQL.png",
    category: "MYSQL",
  },
];

const Home = () => {
  return (
    <>
      <Banner />

      {/* Category Section */}
      <div className="container my-4">
        <h2 className="text-center mb-4">Read Blogs From</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogs.map((blog) => (
            <div className="col" key={blog.id}>
              <Link
                to={`/category/${blog.category}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={blog.url}
                    className="card-img-top"
                    alt={blog.title}
                    style={{ height: 180, objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{blog.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Blogs Section */}
      <div className="trending-blog-section">
        <h2 className="text-center mb-4">Trending Blogs</h2>
        <div className="all-trending-blogs">
          <TrendingBlogs blogs={blogsData} />
        </div>
      </div>
    </>
  );
};

export default Home;
