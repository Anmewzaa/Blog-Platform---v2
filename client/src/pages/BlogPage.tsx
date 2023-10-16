import Navbar from "../components/Navbar";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[960px] my-[2rem]">
        <div className="grid gap-6">
          <div className="grid p-4">
            <img
              src="https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-8.png"
              alt=""
              className="mb-6"
            />
            <h2 className="text-4xl tracking-wider mb-4">I Love My Kitchen</h2>
            <h4 className="mb-4">Amanda Smith, September 16, 2022</h4>
            <p className="mb-4">
              Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum
              tincidunt sed dolor sit amet volutpat. Nullam egestas sem at
              mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque
              volutpat, enim id volutpat interdum, purus odio euismod neque, sit
              amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus
              in tincidunt lacus, in gravida ipsum. Cras id vehicula est,
              tincidunt pellentesque magna. Etiam porttitor nulla urna, quis
              vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src="https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/post-gallery-2.png"
                alt=""
              />
              <img
                src="https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-11-1.png"
                alt=""
              />
              <img
                src="https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/post-gallery.png"
                alt=""
              />
              <img
                src="https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/post-gallery-1.png"
                alt=""
              />
            </div>
            <p>
              Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum
              tincidunt sed dolor.
            </p>
            <br />
            <p className="mb-4">
              Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum
              tincidunt sed dolor sit amet volutpat. Nullam egestas sem at
              mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque
              volutpat, enim id volutpat interdum.
            </p>
            <img
              src="https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/post-content-image.png"
              alt=""
              className="mb-4"
            />
            <p>
              Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum
              tincidunt sed dolor sit amet volutpat. Nullam egestas sem at
              mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque
              volutpat, enim id volutpat interdum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
