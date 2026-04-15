import { useEffect, useState } from "react";

const text = "Film Koleksiyonunuzu Oluşturun!";

const Header = () => {
  const [gosterilen, setGosterilen] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setGosterilen(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="p-6 text-4xl tracking-wide font-extrabold text-center mb-6 text-white">
      {gosterilen}
    </h1>
  );
};

export default Header;