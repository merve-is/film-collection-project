type Props = {
    isim: string;
    setIsim: (v: string) => void;
    tur: string;
    setTur: (v: string) => void;
    puan: string;
    setPuan: (v: string) => void;
    ekleFilm: () => void;
};


const FilmForm = ({ isim , setIsim, tur, setTur, puan, setPuan, ekleFilm}: Props) => {
    
    return (    
        <div className="backdrop-blur-lg bg-white/5 border border-white/10  p-5 rounded-2xl shadow-xl w-96 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-3 text-center">Film Ekle</h2>
            <input className="input input-bordered w-full bg-black rounded-md" 
            placeholder="Film Adı"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
            />
            <input className="input input-bordered w-full bg-black rounded-md" 
            placeholder="Tür"
            value={tur}
            onChange={(e) => setTur(e.target.value)}/>

            <select className="select select-bordered w-full bg-black rounded-md" value={puan}
            onChange={(e) => setPuan(e.target.value)}>
                <option value="">Puanınız...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="btn bg-purple-500 text-mauve-950 font-extrabold h-10 hover:bg-purple-600 w-full hover:scale-97 transition" onClick={ekleFilm}>Ekle</button>
        </div>
    );
};

export default FilmForm;