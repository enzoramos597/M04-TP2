import pelicula from '../api/movie.json';
const ListaPelicula = ({verLista, setverLista}) => {

  const addToVerLista = (peli) => {
    const yaExiste = verLista.some(p => p.id === peli.id);
    if (yaExiste) return; // Evita duplicados
    setverLista([...verLista, peli])
    localStorage.setItem('verLista', JSON.stringify([...verLista, peli])); // Guarda en localStorage
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {pelicula.map((peli) => (
        <div key={peli.id} className='bg-gray-700 p-4 rounded shadow-md text-center'>
        <img
          src={`src/assets/imgMovies/${peli.img}.jpg`}/>
          <h2 className='text-xl font-bold '>{peli.title}</h2>
          <p className='text-white font-bold'>{peli.name}</p>
          <button
            onClick={() => addToVerLista(peli)} // Agregar a la lista
            className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Agregar a la lista
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListaPelicula
