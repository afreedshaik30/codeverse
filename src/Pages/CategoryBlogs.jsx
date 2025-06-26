import { useParams } from "react-router-dom";
import TrendingBlogs from "../Components/TrendingBlogs/TrendingBlogs";
import { blogs as blogsData } from "../Utils/MockData.js";

const CategoryBlogs = () => {
  const { categoryName } = useParams(); // Extract the category from the URL

  // Filter blogs by category (ensure case-insensitive match)
  const filteredBlogs = blogsData.filter(
    (blog) => blog.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="trending-blog-section">
      <h2 className="text-center mb-4">
        Blogs Based on Category: {categoryName}
      </h2>

      <div className="all-trending-blogs">
        {filteredBlogs.length > 0 ? (
          <TrendingBlogs blogs={filteredBlogs} />
        ) : (
          <p className="text-center text-muted">
            No blogs found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
