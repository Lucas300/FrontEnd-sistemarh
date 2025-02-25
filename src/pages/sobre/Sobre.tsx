function Sobre() {
    return (
        <>
            <div className="bg-[#e8ffff] min-h-screen flex flex-col justify-center">
                <div className='container grid grid-cols-2 text-[#5c5f80]'>
                    <div className="flex flex-col gap-4 items-center justify-center py-6">
                        <h2 className='text-5xl font-bold py-3'>
                            Sobre nossa empresa
                        </h2>
                        <p className='text-x2 py-4 m-4'>
                        A Sistema RH é uma empresa especializada em recrutamento e seleção de profissionais,
                        focada em conectar empresas com talentos qualificados. <br></br>
                        Com uma abordagem ágil e assertiva, a empresa realiza processos seletivos que identificam as competências ideais para cada vaga,
                        garantindo que as organizações encontrem os profissionais certos para agregar valor aos seus times.
                        
                       </p>
                    </div>

                    <div className="flex justify-center py-4">
                        <img src="/sobre.png"
                             alt="Imagem Página Home"
                            className='w-3/2' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre
