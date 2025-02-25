import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-6
            			  bg-[#849cc1] text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Sistema RH</Link>

                    <div className='flex gap-4'>
                    <Link to='/sobre' className='hover:underline'>Sobre</Link>
                    <Link to='/colaborador' className='hover:underline'>Colaboradores</Link>
                    
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar