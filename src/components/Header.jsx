const Header = ({ setisModalOpen }) => {

const handleOpenModal = () => {
  setisModalOpen(true)
}
return (
    <header className='bg-blue-950 text-white p-4 flex justify-between items-center'>
        <button 
        onClick={handleOpenModal}
        className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
        >
            Ver Watchlist
        </button>
    </header>
)
}

export default Header
