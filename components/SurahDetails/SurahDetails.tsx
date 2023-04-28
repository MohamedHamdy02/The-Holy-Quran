import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { Howl, Howler } from "howler";

type QuranDetailsProps = {
  sura: string;
  arabic_text: string;
  aya: string;
  translation: string;
  footnotes: string;
};

type Props = {
  surahDetails: Array<QuranDetailsProps>;
  quranSound: Array<{ audio: string }>;
  quranMeta: {
    name: string;
  };
};

const SurahDetails = ({ surahDetails, quranSound, quranMeta }: Props) => {
  const quranSoundArray = quranSound.map(
    (item: { audio: string }) => item.audio
  );

  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlay = (src: string, index: number) => {
    const playSound = new Howl({
      src: [quranSoundArray[index]],
      html5: true,
    });
    playSound.play();
    setIsPlaying(false);
  };

  const onPause = () => {
    Howler.stop();
    setIsPlaying(true);
  };

  return (
    <div className="my-11">
      <div className="px-4 md:px-10 lg:px-40">
        {quranMeta && (
          <div>
            <h2 className="mb-2 text-center">{quranMeta.name}</h2>
          </div>
        )}
        {surahDetails && (
          <>
            {surahDetails[0].sura !== "1" && (
              <h2 className="mb-16 flex flex-col items-center w-full">
                بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
              </h2>
            )}
            {surahDetails.map(
              (surah: QuranDetailsProps, index: number) =>
                surah && (
                  <div
                    key={surah.aya}
                    className="flex flex-wrap flex-col items-end"
                  >
                    <div>
                      <h2 className="mt-10 mb-8 text-right flex justify-center items-start">
                        {isPlaying ? (
                          <button
                            className="text-2xl"
                            onClick={() =>
                              onPlay(quranSoundArray[index], index)
                            }
                          >
                            <FaPlayCircle />
                          </button>
                        ) : (
                          <button
                            className="text-2xl"
                            onClick={() => onPause()}
                          >
                            <FaPauseCircle />
                          </button>
                        )}

                        <span className=" mx-5 relative after:content-['\06DD'] after:absolute after:text-3xl after:leading-none after:top-[50%] after:left-[50%] after:-translate-y-2/4 after:-translate-x-2/4">
                          {surah.aya}
                        </span>
                        {surah.arabic_text}
                      </h2>
                    </div>
                    <div className="flex w-full mb-7">
                      <h2 className="text-sky-600">{surah.translation} </h2>
                    </div>
                    <div className="flex w-full mb-7">
                      <h2 className="text-red-500">{surah.footnotes} </h2>
                    </div>
                    <hr className="w-full mb-5" />
                  </div>
                )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SurahDetails;
