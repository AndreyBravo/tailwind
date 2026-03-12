export function App2() {
  return (
    <div>
      <h1 className="text-center font-bold text-xl my-5 after:content-['TOP\_GEAR'] after:block">
        hello 2
      </h1>
      <input
        type="email"
        placeholder="Enter email..."
        className="block mx-auto p-1 rounded-1xl outline-0 border border-solid border-amber-100 transition-colors ease-in-out duration-300 placeholder:text-amber-200 focus:border-amber-50"
      />
      <button className="block mx-auto bg-amber-300 hover:bg-amber-400 transition-colors ease-in-out duration-300 rounded-2xl font-bold text-3xl text-blue-500 mt-12 p-5 ">
        PRESS
      </button>

      <div className="mx-auto mt-5 h-22 w-22 flex justify-center items-center text-center bg-amber-700 rounded-2xl shadow font-bold md:bg-blue-400 transition-colors duration-300 lg:bg-purple-400">
        Adaptive
      </div>

      <div className="perspective-distant">
        <iframe src="http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4" className="mx-auto rounded-3xl h-[80%] w-[80%]  aspect-video rotate-x-40 rotate-z-20 transform"></iframe>
      </div>
    </div>
  );
}
