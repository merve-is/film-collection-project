type Props = {
    isim: string;
    tur: string;
    puan: number;
    onSil: () => void;
}

const FilmCard = ({isim, tur, puan, onSil}: Props) => {
    return (
        <div className="card backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl transition hover: text-white transform hover:scale-97 hover:shadow-2xl w-72 p-4">
            <div className="card-body p-4">
                <h2 className="card-title text-3xl font-bold">
                    {isim}
                    {/* <div className="badge badge-secondary"></div> */}
                </h2>
                <p className="text-xl opacity-80">{tur}</p>
                <div className="flex flex-col justify-between items-start mt-2 gap-1">
                    <div className="text-lg pb-2 font-bold">
                        Puan: <span className="text-yellow-400">{"★".repeat(puan)}</span> 
                    </div>
                    
                    <button onClick={onSil} className="flex flex-col h-8 justify-center items-center btn btn-ghost border border-amber-50 w-56 rounded-4xl">Sil</button>
            </div>
            </div>
        </div>
    );
};

export default FilmCard;