import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Festibal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Store end time in local storage
  const getStoredTime = () => localStorage.getItem('festibalEndTime');
  const setStoredTime = (time) => localStorage.setItem('festibalEndTime', time);

  // Check if countdown already exists
  useEffect(() => {
    const storedEndTime = getStoredTime();
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime, 10);
      const remainingTime = endTime - Date.now();
      if (remainingTime <= 0) {
        setShowBanner(false);
        setShowPopup(false);
        localStorage.removeItem('festibalEndTime');
      } else {
        setTimeRemaining(remainingTime);
      }
    } else {
      const endTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
      setStoredTime(endTime);
      setTimeRemaining(3 * 24 * 60 * 60 * 1000);
    }
  }, []);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          localStorage.removeItem('festibalEndTime');
          setShowBanner(false);
          setShowPopup(false);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const openPopup = () => {
    setShowPopup(true);
    setShowBanner(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowBanner(true);
  };

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      {showBanner && (
        <div className="container bg-r-info px-5 text-black py-3 shadow-lg animate-fade-in-down relative cursor-pointer flex items-center gap-4" onClick={openPopup}>
          <img
            src="https://i.ibb.co/gL8MXxbw/eidicon-removebg-preview.png"
            alt="Eid Festival"
            className="w-40 h-40 object-cover rounded-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2">Eid Mubarak!</h2>
            <p className="text-lg">Click to see more about the Eid festival!</p>
            <p className="text-red-500 font-bold">Ends in: {formatTime(timeRemaining)}</p>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black/35 flex justify-center items-center z-50">
          <div className="bg-r-info p-5 rounded-lg shadow-lg w-11/12 md:w-1/2 h-4/5 overflow-y-auto relative">
            <button onClick={closePopup} className="absolute top-2 right-2 text-lg hover:text-red-400">
              <FaTimes />
            </button>
            <img
              src="https://i.ibb.co/gL8MXxbw/eidicon-removebg-preview.png"
              alt="Eid Festival"
              className="rounded-md mb-4 w-full"
            />
            <h2 className="text-2xl font-bold mb-2">Eid Festival Celebration</h2>
            <p className="text-lg">
              Celebrate Eid with joy, happiness, and blessings for all. Enjoy delicious food, share love, and create beautiful memories!
            </p>
            <p className="text-red-500 font-bold">Ends in: {formatTime(timeRemaining)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Festibal;
