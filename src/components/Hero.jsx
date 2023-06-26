import React from "react";

function Hero() {
  return (
    <section className="overflow-hidden bg-[#0f172a] sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold  md:text-3xl">
            Welcome to our Map Application!
          </h2>

          <p className="hidden text-gray-300 md:mt-4 md:block">
            Our Map Application allows you to explore different locations and
            find your way around with ease.
          </p>

          <div className="mt-4 md:mt-8">
            <a class="flex items-center text-[#0f172a] justify-center gap-2 rounded-xl border-4 border-[#0f172a] bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50">
              Explore More
              <span aria-hidden="true" role="img">
                🤔
              </span>
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
}

export default Hero;
