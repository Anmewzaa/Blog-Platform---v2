import { SetStateAction, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface BlogType {
  title: string;
  picture: string;
  author: string;
  category: string;
  date: string;
  content: string;
}

const Blogs = () => {
  const [blog, setBlog] = useState<BlogType[]>([]);
  const [search, setSearch] = useState("");
  const searchHandle = (e: { target: { value: SetStateAction<string> } }) =>
    setSearch(e.target.value);
  const blogFilter = blog.filter((blog) => {
    if (search == "") {
      return blog;
    }
    return (
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase())
    );
  });
  useEffect(() => {
    axios
      .get("blogs.json")
      .then((res) => setBlog(res.data.blogs))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mx-auto max-w-[960px] my-[2rem]">
        <div className="lg:mx-0 mx-4">
          <input
            type="text"
            placeholder="search by titll, category or author"
            className="border-2 w-full p-4 rounded-md lg:mx-0"
            value={search}
            onChange={searchHandle}
          />
        </div>
        <div className="grid lg:grid-cols-3 my-4 lg:gap-6 gap-4">
          {blogFilter &&
            blogFilter?.map((item, idx) => (
              <div
                key={idx}
                className="col-span-1 shadow-lg shadow-black-500/50 rounded-lg lg:mx-0 mx-4"
              >
                <div className="mb-4 relative">
                  <img
                    src={item?.picture}
                    alt={`${item?.title} picture`}
                    className="rounded-t-lg"
                  />
                  <p className="absolute top-[20px] bg-gray-100 py-2 px-3 rounded-r-full">
                    {item?.category}
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="mb-4 text-2xl">{item?.title}</h3>
                  <h4 className="mb-4">{`${item?.author}, ${item?.date}`}</h4>
                  <p className="mb-6 line-clamp-3 text-gray-500">
                    {item?.content}
                  </p>
                  <button className="bg-orange-300 p-3 rounded-lg">
                    <Link to={`/blog/${idx}`}>Cotinue Reading</Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
