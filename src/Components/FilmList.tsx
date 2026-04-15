import FilmCard from "./FilmCard";


const FilmList = ({ filmler, onSil}) => {
    if (filmler.length === 0) {
        return <p className="flex justify-center align-center opacity-65 font-bold">Henüz film eklenmedi. Hadi ilk filmini ekle!</p>;
    }

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 justify-items-center">
            {filmler.map((film, index) => (
                <FilmCard
                key={index}
                isim={film.isim}
                tur={film.tur}
                puan={film.puan}
                onSil={() => onSil(index)}
                />
            ))}
        </div>
    );
};

export default FilmList;