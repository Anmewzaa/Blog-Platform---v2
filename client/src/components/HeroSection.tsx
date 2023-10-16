const HeroSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[960px] lg:my-[3rem] my-[2rem]">
        <div className="grid lg:grid-cols-2">
          <div className="lg:order-1 order-2">
            <h2 className="lg:text-5xl text-4xl mb-6 lg:mx-0 mx-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              tenetur.
            </h2>
            <p className="lg:mx-0 mx-4 lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nam libero officia, qui at odio vitae, ullam reiciendis, deleniti
              quidem repellat fugit provident corrupti aliquid nesciunt dolorum
              ex praesentium? Magnam!
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="hero-picture"
            className="lg:px-4 lg:mb-0 mb-4"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
