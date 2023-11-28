import { useEffect, useState } from 'react';
import logo from '/logo.png';
import logo1 from '/logo-black.png';

const Spinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Увеличиваем прогресс на каждой итерации
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 500); // Имитация процесса загрузки каждую секунду

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        background: 'radial-gradient(#0e300e, #000000)',
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Черно-белое изображение */}
        <image href={logo1} width="200" height="200" />

        {/* Маска для заполнения цветом */}
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect
            x="0"
            y={`${100 - progress}%`}
            width="100%"
            height={`${progress}%`}
            fill="white"
          />
        </mask>

        {/* Заливка цветом */}
        <image href={logo} width="200" height="200" mask="url(#mask)" />
      </svg>
    </div>
  );
};

export default Spinner;
