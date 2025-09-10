export default function Home() {
    return (
      <div className="bg-gray-100 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            
            
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
  
            
            <div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm h-80 space-y-3">
                
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                    <img src="/globe.svg" alt="Global" className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Global</span>
                </div>
  
                
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                    <img src="/file.svg" alt="Business" className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Business</span>
                </div>
  
                
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                    <img src="/play.webp" alt="Entertainment" className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Entertainment</span>
                </div>
  
                
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer bg-blue-50">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500">
                    <img src="/sports.webp" alt="Sports" className="w-4 h-4" />
                  </div>
                  <span className="text-blue-600 font-medium">Sports</span>
                </div>
  
                
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                    <img src="/health.webp" alt="Health" className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Health</span>
                </div>
              </div>
            </div>
          </div>
  
          
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-8">
            
            
             <div className="lg:row-span-2 h-120">
               <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
                 <div className="bg-white h-80 flex items-center justify-center">
                   <img 
                     src="/te.webp" 
                     alt="Taza de café" 
                     className="w-full h-full object-cover rounded-t-2x l"
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
  
            
            <div className="lg:col-span-2 grid grid-cols-1 gap-10">
              
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9">
                
                
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
                    <span className="px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">#Politics</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">#Science</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">#Movies</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">#Technology</span>
                  </div>
                </div>
  
                
                <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4 w-82">
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
  
               
               <div className="flex items-start gap-6">
                 
                 <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center flex-1">
                   <img 
                     src="/perfil2.webp" 
                     alt="Alex Morrison" 
                     className="w-40 h-56 object-cover rounded-xl"
                   />
                   <div className="flex-1 ml-4">
                     <h3 className="text-xl font-bold text-gray-900">Alex Morrison</h3>
                     <p className="text-gray-600 mb-4">Senior Journalist</p>
                     <div className="grid grid-cols-3 gap-4 mb-6">
                       <div className="text-center">
                         <p className="text-2xl font-bold text-gray-900">34</p>
                         <p className="text-sm text-gray-500">Articles</p>
                       </div>
                       <div className="text-center">
                         <p className="text-2xl font-bold text-gray-900">980</p>
                         <p className="text-sm text-gray-500">Followers</p>
                       </div>
                       <div className="text-center">
                         <p className="text-2xl font-bold text-gray-900">8.9</p>
                         <p className="text-sm text-gray-500">Rating</p>
                       </div>
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
   
                 
                 <div className="flex flex-col items-end gap-4">
                   
                    <div className="flex gap-4">
                      
                      <button className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100">
                          <img 
                          src="izquierdo.webp"
                          alt="Flecha izquierda" 
                          className="w-6 h-6 object-contain"
                          />
                      </button>
 
                      
                      <button className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100">
                          <img 
                          src="vector_derecha.webp"
                          alt="Flecha derecha"
                          className="w-6 h-6 object-contain"
                          />
                      </button>
                    </div>
 
                    
                    <div className="bg-white rounded-2xl p-4 shadow-sm w-56">
                     <h4 className="font-semibold text-gray-900 mb-4">Hashtags</h4>
                     <div className="flex flex-wrap gap-2 mb-6">
                       <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Donald Trump</span>
                       <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">USA</span>
                       <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Politics</span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium border border-blue-200">2020</span>
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
  