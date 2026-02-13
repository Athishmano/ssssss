import React, { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Swal from "sweetalert2";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

import MouseStealing from './MouseStealer.jsx';
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import Lovegif from "./assets/GifData/cutieSwal1.gif";
import heartGif from "./assets/GifData/lovecutie7.gif";
import sadGif from "./assets/GifData/sad.gif";
import WordMareque from './MarqueeProposal.jsx';
import purposerose from './assets/GifData/RoseCute.gif';
import swalbg from './assets/Lovingbg2_main.jpg';
import loveu from './assets/GifData/cutieSwal3.gif';
import giftBg from './assets/IMG_2364.png';

//! yes - Gifs Importing
import yesgif1 from "./assets/GifData/Yes/love1.gif";
import yesgif2 from "./assets/GifData/Yes/love2.gif";
import yesgif3 from "./assets/GifData/Yes/love3.gif";
import yesgif4 from "./assets/GifData/Yes/lovecutie4.gif";
import yesgif5 from "./assets/GifData/Yes/lovecutie5.gif";
import yesgif6 from "./assets/GifData/Yes/lovecutie6Prev.gif";
import yesgif7 from "./assets/GifData/Yes/lovecutie7.gif";
import yesgif8 from "./assets/GifData/Yes/lovecutie8.gif";
import yesgif9 from "./assets/GifData/Yes/lovecutie9.gif";

//! no - Gifs Importing
import nogif0 from "./assets/GifData/No/breakRej0.gif";
import nogif0_1 from "./assets/GifData/No/breakRej0_1.gif";
import nogif4 from "./assets/GifData/No/breakRej4.gif";
import nogif5 from "./assets/GifData/No/breakRej5.gif";
import nogif6 from "./assets/GifData/No/breakRej6.gif";

//! yes - Music Importing
import yesmusic1 from "./assets/AudioTracks/Love_LoveMeLikeYouDo.mp3";
import yesmusic2 from "./assets/AudioTracks/Love_TheWalters.mp3";
import yesmusic3 from "./assets/AudioTracks/Love_UntilIFoundYou.mp3";

//! no - Music Importing
import nomusic1 from "./assets/AudioTracks/Rejection_WeDontTalkAnyMore.mp3";

const YesGifs = [yesgif1, yesgif2, yesgif3, yesgif4, yesgif5, yesgif6, yesgif7, yesgif8, yesgif9];
const NoGifs = [nogif0, nogif0_1, nogif4, nogif5, nogif6];
const YesMusic = [yesmusic1, yesmusic2, yesmusic3];
const NoMusic = [nomusic1];

const Footer = () => (
  <footer className="fixed bottom-4 w-full text-center text-zinc-600 text-sm z-50">
    <p>
      Made with ❤️ by <span className="font-semibold text-rose-500">Athish Samiksha Manoharan</span>
    </p>
  </footer>
);

const GiftSelection = ({ onSelect }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 relative overflow-hidden">
    {/* Background Image with Low Opacity */}
    <div
      className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: `url(${giftBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    <div className="bg-white rounded-full p-6 mb-6 shadow-lg relative z-10">
      <span className="text-6xl text-rose-500">❤️</span>
    </div>
    <h1 className="text-4xl font-bold text-rose-600 mb-2 relative z-10">Yay, you said yes!</h1>
    <p className="text-zinc-600 mb-12 relative z-10">I made all this for you hehe ❤️</p>

    <div className="flex gap-6 relative z-10">
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => onSelect(num === 1 ? 'bouquet' : num === 2 ? 'words' : 'song')}
          className="bg-rose-400 hover:bg-rose-500 text-white p-8 rounded-3xl shadow-xl flex flex-col items-center gap-4 transition-transform hover:scale-105"
        >
          <span className="text-3xl">❤️</span>
          <span className="font-bold">Gift {num}</span>
        </button>
      ))}
    </div>
  </div>
);

const BouquetPage = ({ onBack }) => (
  <div className="min-h-screen bg-pink-100 flex flex-col items-center py-12 px-4 relative overflow-hidden">
    <h1 className="text-5xl font-bold text-rose-500 mb-12" style={{ fontFamily: "Charm, serif" }}>Your Rose Bouquet</h1>

    <div className="relative w-full max-w-lg mb-20 mt-8">
      {/* Scalloped Frame Placeholder/Simulation */}
      <div className="absolute inset-0 border-8 border-rose-400 rounded-[3rem] -rotate-1 opacity-20"></div>

      {/* Speech Bubbles */}
      <div className="absolute -top-10 -left-10 bg-white p-4 rounded-2xl shadow-md text-rose-500 font-medium z-10 animate-bounce max-w-[150px]">
        I will always love you no matter what
      </div>
      <div className="absolute -top-4 -right-10 bg-white p-4 rounded-2xl shadow-md text-rose-500 font-medium z-10 animate-bounce max-w-[150px]" style={{ animationDelay: '0.5s' }}>
        You will forever be my only option.
      </div>
      <div className="absolute bottom-10 -left-12 bg-white p-4 rounded-2xl shadow-md text-rose-500 font-medium z-10 animate-bounce max-w-[150px]" style={{ animationDelay: '1s' }}>
        You are the best part of my life
      </div>
      <div className="absolute bottom-20 -right-12 bg-white p-4 rounded-2xl shadow-md text-rose-500 font-medium z-10 animate-bounce max-w-[150px]" style={{ animationDelay: '1.5s' }}>
        I can't imagine life without you
      </div>

      <img src={purposerose} alt="Bouquet" className="w-[300px] mx-auto rounded-3xl relative z-0" />
    </div>

    <button onClick={onBack} className="mt-auto text-3xl font-bold text-rose-500 hover:scale-110 transition-transform flex flex-col items-center gap-2">
      click me!
      <span className="text-4xl">❤️</span>
    </button>
  </div>
);

const WordsFromHeartPage = ({ onBack }) => (
  <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center p-6 text-center">
    <h1 className="text-4xl font-bold text-rose-600 mb-8" style={{ fontFamily: "Charm, serif" }}>Words from my Heart</h1>
    <div className="text-rose-400 text-2xl mb-6">❤️</div>

    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-2xl max-w-md relative">
      <div className="absolute -right-8 top-20 text-4xl text-rose-300 transform rotate-12 font-bold opacity-50">XOXO</div>
      <p className="text-zinc-800 text-xl leading-relaxed font-medium">
        To the love of my life,<br />
        <span className="text-rose-500">you make my life so meaningful</span> and I am so lucky to have you <span className="text-rose-500">as my valentine this year. I love</span> you wholeheartedly and I can't <span className="text-rose-500">wait to continue loving you for</span> the rest of my life. I know I tell <span className="text-rose-500">you this everyday but you are</span> literally the most beautiful girl I know. Anyways, I love you.
      </p>
    </div>

    <div className="text-rose-400 text-2xl mt-12 mb-4">❤️</div>
    <button onClick={onBack} className="text-rose-500 font-bold hover:translate-x-2 transition-transform">click me →</button>
  </div>
);

const SongPage = ({ onBack }) => (
  <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center p-6">
    <div className="text-rose-400 text-xl mb-12 self-end mr-20">❤️</div>
    <h1 className="text-5xl font-bold text-rose-600 mb-6" style={{ fontFamily: "Charm, serif" }}>A Song for you</h1>
    <p className="text-zinc-600 text-xl mb-12">Click to play our song! 🎵 <span className="text-rose-400 ml-2">❤️</span></p>

    <a
      href="https://open.spotify.com/track/3ywjIbXWgG5Vjom6zhA2aP?si=f49146c884644b49"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group cursor-pointer animate-pulse hover:scale-110 transition-transform"
    >
      <div className="absolute -inset-4 bg-rose-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-white p-12 rounded-full shadow-2xl flex items-center justify-center border-4 border-rose-100">
        <div className="text-7xl text-rose-500 ml-2">▶️</div>
        {/* Hearts around button */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">❤️</div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl">❤️</div>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 text-2xl">❤️</div>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-2xl">❤️</div>
      </div>
    </a>

    <p className="text-rose-500 font-bold mt-12 mb-20">press play!</p>

    <div className="text-rose-300 text-xl mb-4 self-start ml-20">❤️</div>
    <button onClick={onBack} className="text-rose-400 font-bold hover:underline">click to restart!</button>
  </div>
);

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null); // Tracks the currently playing song
  const [currentGifIndex, setCurrentGifIndex] = useState(0); // Track the current gif index
  const [isMuted, setIsMuted] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [yespopupShown, setYesPopupShown] = useState(false);
  const [timer, setTimer] = useState(null);
  const [showSurprise, setShowSurprise] = useState(false);
  const [activeGift, setActiveGift] = useState(null); // 'bouquet', 'words', 'song' or null
  const [showGiftSelection, setShowGiftSelection] = useState(false);

  const gifRef = useRef(null); // Ref to ensure gif plays infinitely
  const yesButtonSize = noCount * 16 + 16;

  const [floatingGifs, setFloatingGifs] = useState([]); // Array to store active floating GIFs
  const generateRandomPositionWithSpacing = (existingPositions) => {
    let position;
    let tooClose;
    const minDistance = 15; // Minimum distance in 'vw' or 'vh'

    let attempts = 0;
    do {
      position = {
        top: `${Math.random() * 90}vh`, // Keep within 90% of viewport height
        left: `${Math.random() * 90}vw`, // Keep within 90% of viewport width
      };

      tooClose = existingPositions.some((p) => {
        const dx = Math.abs(parseFloat(p.left) - parseFloat(position.left));
        const dy = Math.abs(parseFloat(p.top) - parseFloat(position.top));
        return Math.sqrt(dx * dx + dy * dy) < minDistance;
      });
      attempts++;
    } while (tooClose && attempts < 50);

    return position;
  };

  const handleMouseEnterYes = () => {
    const gifs = [];
    const positions = [];

    for (let i = 0; i < 10; i++) {
      const newPosition = generateRandomPositionWithSpacing(positions);
      positions.push(newPosition);

      gifs.push({
        id: `heart-${i}`,
        src: heartGif,
        style: {
          ...newPosition,
          animationDuration: `${Math.random() * 2 + 1}s`,
        },
      });
    }

    setFloatingGifs(gifs);
  };

  const handleMouseEnterNo = () => {
    const gifs = [];
    const positions = [];

    for (let i = 0; i < 10; i++) {
      const newPosition = generateRandomPositionWithSpacing(positions);
      positions.push(newPosition);

      gifs.push({
        id: `sad-${i}`,
        src: sadGif,
        style: {
          ...newPosition,
          animationDuration: `${Math.random() * 2 + 1}s`,
        },
      });
    }

    setFloatingGifs(gifs);
  };

  const handleMouseLeave = () => {
    setFloatingGifs([]); // floating GIFs on mouse leave
  };

  // This ensures the "Yes" gif keeps restarting and playing infinitely
  useEffect(() => {
    if (gifRef.current && yesPressed && noCount > 3) {
      gifRef.current.src = YesGifs[currentGifIndex];
    }
  }, [yesPressed, currentGifIndex]);

  // Use effect to change the Yes gif every 5 seconds
  useEffect(() => {
    if (yesPressed && noCount > 3) {
      const intervalId = setInterval(() => {
        setCurrentGifIndex((prevIndex) => (prevIndex + 1) % YesGifs.length);
      }, 5000); // Change gif every 5 seconds

      // Clear the interval
      return () => clearInterval(intervalId);
    }
  }, [yesPressed]);

  useEffect(() => {
    if (gifRef.current) {
      gifRef.current.src = gifRef.current.src; // Reset gif to ensure it loops infinitely
    }
  }, [noCount]);

  const handleNoClick = () => {
    const nextCount = noCount + 1;
    setNoCount(nextCount);

    if (nextCount >= 4) {
      const nextGifIndex = (nextCount - 4) % NoGifs.length; // Start cycling through NoGifs
      if (gifRef.current) {
        gifRef.current.src = NoGifs[nextGifIndex];
      }
    }

    // Play song on first press or every 7th press after
    if (nextCount === 1 || (nextCount - 1) % 7 === 0) {
      const nextSongIndex = Math.floor(nextCount / 7) % NoMusic.length;
      playMusic(NoMusic[nextSongIndex], NoMusic);
    }
  };

  const handleYesClick = () => {
    if (!popupShown) { // Only for Swal Fire Popup
      setYesPressed(true);
    }
    if (noCount > 3) {
      setYesPressed(true);
      playMusic(YesMusic[0], YesMusic); // Play the first "Yes" music by default
    }
  };

  const playMusic = (url, musicArray) => {
    if (currentAudio) {
      currentAudio.pause(); // Stop the currently playing song
      currentAudio.currentTime = 0; // Reset to the start
    }
    const audio = new Audio(url);
    audio.muted = isMuted;
    setCurrentAudio(audio); // Set the new audio as the current one
    audio.addEventListener('ended', () => {
      const currentIndex = musicArray.indexOf(url);
      const nextIndex = (currentIndex + 1) % musicArray.length;
      playMusic(musicArray[nextIndex], musicArray); // Play the next song in the correct array
    });
    audio.play();
  };

  const toggleMute = () => {
    if (currentAudio) {
      currentAudio.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const getNoButtonText = () => {

    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "U Have a heart!💕",
      "Don't be so cold!",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "But... why? 😢",
      "Please, pretty please? 💖",
      "I can't take this! 😫",
      "Are you sure you want to do this to me? 😢",
      "You're gonna hurt my feelings! 😥",
      "I need you to reconsider, like now! 😓",
      "I believe in you, don't disappoint me! 💔",
      "My heart says yes, what about yours? ❤️",
      "Don't leave me hanging! 😬",
      "Plsss? :( You're breaking my heart 💔",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    if (yesPressed && noCount < 4 && !popupShown) {
      Swal.fire({
        title: "I love you sooo Much!!!❤️, You’ve stolen my heart completely!!!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        width: 700,
        padding: "2em",
        color: "#716add",
        background: `#fff url(${swalbg})`,
        backdrop: `
          rgba(0,0,123,0.2)
          url(${loveu})
          right
          no-repeat
        `,
      });
      setPopupShown(true);
      setYesPressed(false);
    }
  }, [yesPressed, noCount, popupShown]);

  useEffect(() => {
    if (yesPressed && noCount > 3 && !yespopupShown) {
      Swal.fire({
        title: "I love you so much!! ❤️ You are my everything, my joy, my forever. Every moment with you is a memory I’ll cherish forever, and my heart beats only for you.</br> Will you be the love of my life forever?",
        width: 800,
        padding: "2em",
        color: "#716add",
        background: `#fff url(${swalbg})`,
        backdrop: `
          rgba(0,0,123,0.7)
          url(${purposerose})
          right
          no-repeat
        `,
      });
      setYesPopupShown(true);
      setYesPressed(true);
      setTimer(30); // Start timer
    }
  }, [yesPressed, noCount, yespopupShown]);

  useEffect(() => {
    if (timer !== null && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setShowSurprise(true);
    }
  }, [timer]);

  useEffect(() => {
    if (noCount == 25) {
      Swal.fire({
        title: "My love for you is endless, like the stars in the sky—shining for you every night, even if you don’t always notice. 🌟 I’ll wait patiently, proving every day that you’re my everything. ❤️ Please press ‘Yes’ and let’s make this a forever story. 🥰✨<br/>'True love never gives up; it grows stronger with time.'",
        width: 850,
        padding: "2em",
        color: "#716add",
        background: `#fff url(${swalbg})`,
        backdrop: `
          rgba(0, 104, 123, 0.7)
          url(${nogif1})
          right
          no-repeat
        `,
      });
    }
  }, [noCount]);

  const renderContent = () => {
    if (activeGift) {
      if (activeGift === 'bouquet') return <BouquetPage onBack={() => setActiveGift(null)} />;
      if (activeGift === 'words') return <WordsFromHeartPage onBack={() => setActiveGift(null)} />;
      if (activeGift === 'song') return <SongPage onBack={() => setActiveGift(null)} />;
    }

    if (showGiftSelection) {
      return <GiftSelection onSelect={setActiveGift} />;
    }

    return (
      <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
        {yesPressed && noCount > 3 ? (
          <>
            <img
              ref={gifRef}
              className="h-[230px] rounded-lg"
              src={YesGifs[currentGifIndex]}
              alt="Yes Response"
            />
            <div className="text-4xl md:text-6xl font-bold my-2" style={{ fontFamily: "Charm, serif", fontWeight: "700", fontStyle: "normal" }}>I Love You !!!</div>
            <div className="text-4xl md:text-4xl font-bold my-1" style={{ fontFamily: "Beau Rivage, serif", fontWeight: "500", fontStyle: "normal" }}> You’re the love of my life. </div>
            <WordMareque />

            {timer !== null && (
              <div className="mt-4 flex flex-col items-center gap-4">
                <div className="text-2xl font-bold text-rose-500 animate-pulse text-center px-4">
                  {timer > 0 ? (
                    <>
                      After reading Above lines,<br />
                      Surprise in {timer}s... ❤️
                    </>
                  ) : "Something special is ready!"}
                </div>
                {showSurprise && (
                  <button
                    onClick={() => setShowGiftSelection(true)}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-110 animate-bounce"
                  >
                    Click here for a surprise ✨
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <img
              src={lovesvg}
              className="fixed animate-pulse top-10 md:left-15 left-6 md:w-40 w-28"
              alt="Love SVG"
            />
            <img
              ref={gifRef}
              className="h-[230px] rounded-lg"
              src={Lovegif}
              alt="Love Animation"
            />
            <h1 className="text-4xl md:text-6xl my-4 text-center">
              Samikshaa...Will you be my Valentine?
            </h1>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <button
                onMouseEnter={handleMouseEnterYes}
                onMouseLeave={handleMouseLeave}
                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                onMouseEnter={handleMouseEnterNo}
                onMouseLeave={handleMouseLeave}
                onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
            {floatingGifs.map((gif) => (
              <img
                key={gif.id}
                src={gif.src}
                alt="Floating Animation"
                className="absolute w-12 h-12 animate-bounce"
                style={gif.style}
              />
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-gradient-to-br from-rose-50 to-pink-100">
        <React.Suspense fallback={<div className="w-full h-full flex items-center justify-center text-rose-300">Loading magic...</div>}>
          <Spline
            scene="https://prod.spline.design/oSxVDduGPlsuUIvT/scene.splinecode"
            onError={(e) => console.error("Spline Error:", e)}
          />
        </React.Suspense>
      </div>

      {noCount > 16 && noCount < 25 && yesPressed == false && <MouseStealing />}

      {renderContent()}

      <button
        className="fixed bottom-10 right-10 bg-gray-200/50 backdrop-blur-sm p-3 mb-2 rounded-full hover:bg-white/80 transition-all z-50 shadow-md"
        onClick={toggleMute}
      >
        {isMuted ? <BsVolumeMuteFill size={28} className="text-rose-500" /> : <BsVolumeUpFill size={28} className="text-rose-500" />}
      </button>
      <Footer />
    </>
  );
}









// ! Pathways-
// https://app.spline.design/file/48a9d880-40c9-4239-bd97-973aae012ee0
// https://app.spline.design/file/72e6aee2-57ed-4698-afa7-430f8ed7bd87
