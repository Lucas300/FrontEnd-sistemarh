function CardColaborador() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className='flex flex-col overflow-hidden justify-between m-5 bg-gray-100 w-1/4'>
                <header className='py-2 px-6 bg-blue-200 text-white font-bold text-center text-1xl'>
                    Colaborador
                </header>
                <div className='flex p-4 justify-around'>
                    <img className='flex items-start w-40' src="./guilherme.jpg"/>
                    <div className='flex flex-col items-center justify-center text-sm'>
                        <p>Guilherme Kaludin</p>
                        <p>24 anos</p>
                        <p>Dev. Front-End</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden justify-between m-5 bg-gray-100 w-1/4'>
                <header className='py-2 px-6 bg-blue-200 text-white font-bold text-center text-1xl'>
                    Colaborador
                </header>
                <div className='flex p-4 justify-around'>
                    <img className='flex items-start w-40' src="./juliana.jpg"/>
                    <div className='flex flex-col items-center justify-center text-sm'>
                        <p>Juliana Monteiro</p>
                        <p>22 anos</p>
                        <p>Dev. Front-End</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden justify-between m-5 bg-gray-100 w-1/4'>
                <header className='py-2 px-6 bg-blue-200 text-white font-bold text-center text-1xl'>
                    Colaborador
                </header>
                <div className='flex p-4 justify-around'>
                    <img className='flex items-start w-40' src="./joao.jpg"/>
                    <div className='flex flex-col items-center justify-center text-sm'>
                        <p>João Oliveira</p>
                        <p>29 anos</p>
                        <p>PO</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden justify-between m-5 bg-gray-100 w-1/4'>
                <header className='py-2 px-6 bg-blue-200 text-white font-bold text-center text-1xl'>
                    Colaborador
                </header>
                <div className='flex p-4 justify-around'>
                    <img className='flex items-start w-40' src="./lucas.jpg"/>
                    <div className='flex flex-col items-center justify-center text-sm'>
                        <p>Lucas Daniel</p>
                        <p>24 anos</p>
                        <p>Tester</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden justify-between m-5 bg-gray-100 w-1/4'>
                <header className='py-2 px-6 bg-blue-200 text-white font-bold text-center text-1xl'>
                    Colaborador
                </header>
                <div className='flex p-4 justify-around'>
                    <img className='flex items-start w-40' src="./taina.jpg"/>
                    <div className='flex flex-col items-center justify-center text-sm'>
                        <p>Taina Lara</p>
                        <p>38 anos</p>
                        <p>Scrum Master</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardColaborador