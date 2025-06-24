import { useEffect } from "react";
const VerListaModal = ({isModalOpen, setisModalOpen, verLista, setverLista }) => {
    if (!isModalOpen) return null;

const handleCloseModal = () => setisModalOpen(false)

const handleEliminarPelicula = (peliculaId) => {
    setverLista((prevverLista) => prevverLista.filter(pelicula => pelicula.id !== peliculaId));
    localStorage.setItem('verLista', JSON.stringify(verLista.filter(pelicula => pelicula.id !== peliculaId)));
}

  // Cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [])

  return (
   <div className="fixed inset-0 bg-black/90 flex items-center justify-center <-50"> 
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-md relative">

        {/* Aquí están los cambios clave */}
        <div className="px-4 py-3 rounded-t-lg flex items-center relative"> {/* Se quitó 'bg-blue-900' */}
          <h2 className="text-lg font-bold flex items-center gap-2 text-blue-900"> {/* Se agregó 'text-blue-900' aquí */}
            <i className="bi bi-film"></i> Mi Lista
          </h2>
          <button
            onClick={handleCloseModal}
            className="absolute top-3 right-3 text-red-600 text-4xl hover:text-red-800 transition-colors" // Posicionamos de forma absoluta
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>
      {
        verLista.length > 0 ? (
          // Contenedor para el scroll:
          <div className="mt-4 max-h-70 overflow-y-auto">
          <ul className="mt-4">
            {
              verLista.map((pelicula) => (
              <li key={pelicula.id} className='bg-gray-800 p-2 rounded mb-2 flex items-center'>
                <img src={`src/assets/imgMovies/${pelicula.img}.jpg`} alt={pelicula.name} className="w-16 h-16 inline-block mr-2" />
                <span className="text-white">{pelicula.name}</span>
                <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-auto"
                onClick={() => handleEliminarPelicula(pelicula.id)}
                
                >
                <i className="bi bi-trash text-white"></i>
                    
                </button>
              </li>
              
            ))}

          </ul>
          </div>
        ) : (
          // Lista vacía: estilo similar a la imagen
            <div className="flex flex-col items-center justify-center text-center text-gray-700 mt-10">
              <i className="bi bi-film text-4xl mb-4"></i>
              <h3 className="text-lg font-semibold">Tu lista está vacía</h3>
              <p className="text-sm">Agrega películas para empezar a verlas</p>
            </div>
        )
      }
      </div>
    </div>
  )
}

export default VerListaModal

