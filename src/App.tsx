type Film = {
  isim: string;
  tur: string;
  puan: number;
};
import Header from "./Components/Header";
import FilmForm from "./Components/FilmForm";
import FilmList from "./Components/FilmList";
import Footer from "./Components/Footer";
import { useState } from "react";

const App = () => {
  const [filmler, setFilmler] = useState<Film[]>([]);
  const [isim, setIsim] = useState("");
  const [tur, setTur] = useState("");
  const [puan, setPuan] = useState("");

  const ekleFilm = () => {
    if (!isim.trim() || !tur.trim() || !puan) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    };

    const yeniFilm = {
      isim,
      tur,
      puan: Number(puan),
    };

    setFilmler([yeniFilm, ...filmler]);

    setIsim("");
    setTur("");
    setPuan("");
  };

  const silFilm = (index: number) => {
      setFilmler(filmler.filter((_, i) => i !== index));
  };

  const toplamFilm = filmler.length;

  const ortalamaPuan = 
      filmler.length === 0 ? 0: (
        filmler.reduce((toplam, film) => toplam + film.puan, 0) / filmler.length
      ).toFixed(1);

  const [filtre, setFiltre] = useState("");
      const filtreliFilmler =
        filtre === ""
        ? filmler
        : filmler.filter(
          (film) =>
            film.tur.trim().toLowerCase() === filtre.trim().toLowerCase()
          );

  return (
    <div className="p-6 min-h-screen flex flex-col bg-gradient-to-br from-mauve-900 via-mauve-950 to-mauve-900 ">
      <Header
      />

      
      <div className="flex justify-center my-6">
        <FilmForm
        isim={isim}
        setIsim={setIsim}
        tur={tur}
        setTur={setTur}
        puan={puan}
        setPuan={setPuan}
        ekleFilm={ekleFilm}
      />
      </div>

      <div className="flex flex-col items-center gap-4 mb-6 text-center">
        <select className="select select-bordered flex items-center shadow-lg w-48 rounded-2xl bg-purple-500 text-mauve-900 font-extrabold" onChange={(e) => setFiltre(e.target.value)}>
          <option disabled value="">Film türü seçiniz</option>
          <option value="">Tümü</option>
          <option value="Dram">Dram</option>
          <option value="Aksiyon">Aksiyon</option>
          <option value="Komedi">Komedi</option>
          <option value="Romantik">Romantik</option>
          <option value="Animasyon">Animasyon</option>
          <option value="Bilim Kurgu">Bilim Kurgu</option>
        </select>

        <div className="flex gap-4">
          <p className="badge badge-lg rounded-2xl badge-outline text-fuchsia-100 font-bold">Toplam: {toplamFilm} film</p>
          <p className="badge badge-lg rounded-2xl badge-outline text-fuchsia-100 font-bold">Ortalama Puan: {ortalamaPuan}</p>
        </div>
      </div>
      
      <FilmList 
        filmler={filtreliFilmler}
        onSil= {silFilm}

      />

      <Footer/>
    </div>
  );
};

export default App;