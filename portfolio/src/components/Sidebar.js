import React from "react";

export default function Sidebar() {
  return (
    <>
      <aside
        className="w-full text-white sm:w-1/4 lg:w-1/4 rounded-2xl min-h-full h-screen border flex flex-col items-center pt-5 pb-2 space-y-7"
        style={{ backgroundColor: "rgb(29, 28, 28)" }}
      >
        <div className="w-3/6 mt-10">
          <img src="/me.jpg" className="w-full rounded-2xl"></img>
        </div>

        <div className="flex flex-col w-full px-8 gap-5">
          <h1 className="text-center font-sans text-3xl font-bold"> Salma ElGadi </h1>
          <div
            className="w-full h-7 bg-black rounded-lg"
            style={{ backgroundColor: "rgb(39, 39, 41)" }}
          >
            <h5 className="text-center text-sm font-mono pt-1">Full-Stack Web Developer</h5>
          </div>

          <hr className="max-h-0.5"></hr>

          <div className="flex gap-2">
            <img src="/email.png" className="w-12"></img>
            <div className="flex flex-col">
                <h2 className="text-gray-500">EMAIL</h2>
                <p className="text-sm">elgadi.salma0@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/phone.png" className="w-12"></img>
            <div className="flex flex-col">
                <h2 className="text-gray-500">PHONE</h2>
                <p className="text-sm">+212 697987568</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/birthday.png" className="w-12"></img>
            <div className="flex flex-col">
                <h2 className="text-gray-500">BIRTHDAY</h2>
                <p className="text-sm">30-09-2005</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/localisation.png" className="w-12"></img>
            <div className="flex flex-col">
                <h2 className="text-gray-500">LOCATION</h2>
                <p className="text-sm">Morocco - Marrakech</p>
            </div>
          </div>

          <div className="flex justify-center px-5 gap-3 pt-5">
            <a href="https://www.linkedin.com/in/salma-elgadi-704265296/" target="_blank">
                <img src="/linkedin.png" className="w-6"></img>
            </a>

            <a href="https://www.linkedin.com/in/salma-elgadi-704265296/" target="_blank">
                <img src="/github.png" className="w-6"></img>
            </a>

            <a href="https://www.linkedin.com/in/salma-elgadi-704265296/" target="_blank">
                <img src="/discord.png" className="w-6"></img>
            </a>

            <a href="https://www.linkedin.com/in/salma-elgadi-704265296/" target="_blank">
                <img src="/twitter.png" className="w-6"></img>
            </a>

            <a href="https://www.linkedin.com/in/salma-elgadi-704265296/" target="_blank">
                <img src="/facebook.png" className="w-6"></img>
            </a>

            <a href="https://www.linkedin.com/in/salma-elgadi-704265296/" target="_blank">
                <img src="/instagram.png" className="w-6"></img>
            </a>

          </div>

        </div>
      </aside>
    </>
  );
}
