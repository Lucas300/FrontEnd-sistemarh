function Home() {
    return (
        <>
            <div className="bg-[#e8ffff] min-h-screen flex flex-col justify-center">
                <div className='container grid grid-cols-2 text-[#5c5f80]'>
                    <div className="flex flex-col gap-4 items-center justify-center py-6">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                          Gestão estratégica para um RH mais eficiente!
                        </p>
                    </div>

                    <div className="flex justify-center py-4">
                        <img src="/homeimg.png"
                             alt="Imagem Página Home"
                            className='w-3/2' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
