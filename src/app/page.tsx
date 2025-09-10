export default function Home() {
    return (
      <div className="bg-gray-100 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Bloque principal */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Artículo principal */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                  <div className="lg:w-1/2">
                    <img 
                      src="/lampara.webp" 
                      alt="Lámpara de escritorio" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        Green plants are going to Extinct about 500 times faster than they should, Study finds
                      </h1>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        If you are the sort of person who just can not keep a plant alive, you are not alone according to a new study published June 10 in the journal Nature..
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/alexander_parkinson.webp" 
                          alt="Alexander Parkinson" 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Alexander Parkinson</p>
                          <p className="text-sm text-gray-500">Jun 20, 2019</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <img src="/compartir.webp" alt="Compartir" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Categorías */}
            <div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm space-y-3">
                {[
                  { icon: "/globe.svg", text: "Global" },
                  { icon: "/file.svg", text: "Business" },
                  { icon: "/play.webp", text: "Entertainment" },
                  { icon: "/sports.webp", text: "Sports", active: true },
                  { icon: "/health.webp", text: "Health" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                      item.active
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.active ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt={item.text}
                        className="w-4 h-4"
                      />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Sección de artículos secundarios */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
            
            {/* Artículo grande */}
            <div className="lg:row-span-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
                <div className="h-80">
                  <img 
                    src="/te.webp" 
                    alt="Taza de café" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                    How to make the perfect morning coffee, according to the Science
                  </h3>
                  <div className="flex items-center gap-3">
                    <img 
                      src="/tara_gilbson.webp" 
                      alt="Tara Gibson" 
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Tara Gibson</p>
                      <p className="text-xs text-gray-500">Jul 13, 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Sub-sección derecha */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-6">
              
              {/* Buscador + Tags + Video */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Buscador */}
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="mb-6">
                    <div className="flex">
                      <input 
                        type="text" 
                        placeholder="Search for articles" 
                        className="bg-gray-100 flex-1 outline-none text-slate-800 p-2 rounded-l-lg"
                      />
                      <button className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-r-lg text-white">
                        🔍
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["#Politics", "#Science", "#Movies", "#Technology"].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
  
                {/* Tarjeta video */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                  <img 
                    src="/edificio.webp" 
                    alt="Edificio moderno" 
                    className="w-32 h-28 object-cover rounded-xl"
                  />
                  <div className="flex flex-col">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 mb-2">
                      ▶
                    </div>
                    <h2 className="font-semibold text-gray-900 text-lg">An Inspiring Short Film</h2>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <img src="/ojo.webp" alt="Vistas" className="w-4 h-4" />
                      <span>80,989</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Tarjeta perfil + flechas + hashtags */}
              <div className="flex flex-col lg:flex-row items-start gap-6">
                
                {/* Perfil */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row flex-1">
                  <img 
                    src="/perfil2.webp" 
                    alt="Alex Morrison" 
                    className="w-full sm:w-40 h-56 object-cover rounded-xl"
                  />
                  <div className="flex-1 sm:ml-4 mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold text-gray-900">Alex Morrison</h3>
                    <p className="text-gray-600 mb-4">Senior Journalist</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Articles", value: "34" },
                        { label: "Followers", value: "980" },
                        { label: "Rating", value: "8.9" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        Chat
                      </button>
                      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
  
                {/* Flechas + Hashtags */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                    <button className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100">
                      <img src="izquierdo.webp" alt="Flecha izquierda" className="w-6 h-6 object-contain" />
                    </button>
                    <button className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100">
                      <img src="vector_derecha.webp" alt="Flecha derecha" className="w-6 h-6 object-contain" />
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm w-56">
                    <h4 className="font-semibold text-gray-900 mb-4">Hashtags</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Donald Trump", "USA", "Politics", "2020"].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${
                            tag === "2020"
                              ? "bg-blue-100 text-blue-600 font-medium border border-blue-200"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
  