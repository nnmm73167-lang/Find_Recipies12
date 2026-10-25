import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="text-center max-w-lg">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] sm:text-[160px] font-extrabold leading-none text-indigo-600/10 blur-xl">
              404
            </span>
          </div>
        </div>

        {/* Emoji */}
        <div className="text-6xl mb-6 animate-bounce">🔍</div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8 text-base sm:text-lg leading-relaxed">
          Lagta hai aap kisi aisi jagah pahunch gaye hain jo exist nahi karti.
          Chaliye aapko wapas sahi raaste par le chalte hain!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
          >
            🏠 Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            ← Go Back
          </button>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"></span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
