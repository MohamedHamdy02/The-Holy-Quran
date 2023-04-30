import Link from "next/link";
import React from "react";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKaaba } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "@/Context/ThemeContext";

type QuranData = {
  withoutDiacs: any;
  name: string;
  number: number;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
};

type QuranDetailsProps = {
  sura: string;
  arabic_text: string;
  aya: string;
  translation: string;
  footnotes: string;
};

type Props = {
  quranMeta: Array<QuranData>;
  searchInput: string;
  onChangeHandler: React.FormEvent<HTMLInputElement> | any;
  surahDetail: Array<QuranDetailsProps>;
};

const Header = ({
  surahDetail,
  quranMeta,
  onChangeHandler,
  searchInput,
}: Props) => {
  const { theme } = useThemeContext();
  return (
    <>
      <Search searchInput={searchInput} onChangeHandler={onChangeHandler} />
      <div
        className={`${
          theme === "light" ? "" : "text-white"
        } flex justify-center gap-3 my-5`}
      >
        <h2>The Holy Quran / القران الكريم</h2>
        <div className="w-[30px] h-[30px]">
          <FontAwesomeIcon icon={faKaaba} className=" text-2xl" />
        </div>
      </div>
      <div className="pb-20 flex flex-wrap justify-center items-center gap-3">
        {quranMeta.length > 0 &&
          quranMeta.map((item: QuranData, index: number) => (
            <Link
              key={index}
              onClick={() => surahDetail}
              href={{
                pathname: `/[number]/surah`,
                query: { number: item?.number },
              }}
            >
              <div
                className={`${
                  theme === "light" ? "border-slate-950" : "border-gray-400"
                } flex items-center border  md:w-[400px] w-[340px] h-[80px] cursor-pointer item-container`}
              >
                <div
                  className={`${
                    theme === "light" ? "bg-[#f4f5f6]" : "bg-[#343a40]"
                  } flex items-center justify-center w-[60px] h-[45px] rounded rotate-45  mx-3 box-number-container`}
                >
                  <span
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } -rotate-45 font-semibold`}
                  >
                    {item?.number}
                  </span>
                </div>
                <div className="inline-block w-full">
                  <div className="inline-block ml-3">
                    <h3
                      className={`${
                        theme === "light" ? "text-black" : "text-white"
                      } font-semibold`}
                    >
                      {item?.englishName}
                    </h3>
                    <p
                      className={`${
                        theme === "light" ? "text-black" : "text-[#777]"
                      } font-semibold text-xs`}
                    >
                      {item?.englishNameTranslation}
                    </p>
                  </div>
                  <div className="inline-block text-center float-right mr-3">
                    <h3
                      className={`${
                        theme === "light" ? "text-black" : "text-white"
                      } font-semibold`}
                    >
                      {item?.name}
                    </h3>
                    <p
                      className={`${
                        theme === "light" ? "text-black" : "text-[#777]"
                      } font-semibold text-xs`}
                    >
                      {item?.numberOfAyahs}&nbsp;Ayah
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Header;
