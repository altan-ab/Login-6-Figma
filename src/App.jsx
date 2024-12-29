const App = () => {
  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center">
      {/* Sol üst yeşil üçgen */}
      <img
        src="/images/Polygon-1.svg"
        alt="Green Polygon"
        className="absolute top-20 left-20"
      />

      {/* Sağ alt yeşil üçgen */}
      <img
        src="/images/Polygon-2.svg"
        alt="Green Polygon"
        className="absolute bottom-20 right-20"
      />

      {/* Sol mavi polygon */}
      <img
        src="/images/Rectangle-12.svg"
        alt="Blue Polygon"
        className="absolute left-0 bottom-0"
      />

      {/* Sağ kırmızı polygon */}
      <img
        src="/images/Rectangle-13.svg"
        alt="Red Polygon"
        className="absolute right-0 top-0"
      />

      {/* Login Kartı */}
      <div className="bg-[#1B1B1B] rounded-lg p-8 w-1/4 flex flex-col space-y-6">
        {/* Başlık */}
        <h1 className="text-gray-400 text-4xl font-semibold tracking-widest text-left">
          LOGIN
        </h1>

        {/* Form */}
        <form className="w-full flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-[#2A2A2A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-[#2A2A2A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button
            type="submit"
            className="w-1/2 bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition"
          >
            LOGIN
          </button>
        </form>

        {/* OR Bölümü */}
        <div className="flex items-center space-x-2 w-full">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Sosyal Medya İconları */}
        <div className="flex justify-center items-center space-x-10 w-10 mx-auto">
          <img
            src="/images/image-1.png"
            alt="Google"
            className="cursor-pointer"
          />
          <img
            src="/images/image-2.png"
            alt="Facebook"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
export default App
