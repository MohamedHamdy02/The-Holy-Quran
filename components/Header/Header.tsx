import Link from "next/link";
import React from "react";
import Search from "../Search/Search";
import quranLogo from "../../public/images/download.png";
import Image from "next/image";

type QuranData = {
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
  return (
    <>
      <Search searchInput={searchInput} onChangeHandler={onChangeHandler} />
      <div className="flex justify-center items-center">
        <h2>The Holy Quran / القران الكريم</h2>
        <Image src={quranLogo} alt="logo" width={80} height={80} priority />
      </div>
      <div className="mb-20 flex flex-wrap justify-center items-center gap-3">
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
              <div className="flex items-center border border-slate-950 md:w-[400px] w-[340px] h-[80px] cursor-pointer item-container">
                <div className="flex items-center justify-center w-[60px] h-[45px] rounded rotate-45 bg-[#f4f5f6] mx-3 box-number-container">
                  <span className="-rotate-45 font-semibold">
                    {item?.number}
                  </span>
                </div>
                <div className="inline-block w-full">
                  <div className="inline-block ml-3">
                    <h3 className="font-semibold">{item?.englishName}</h3>
                    <p className="text-xs font-semibold">
                      {item?.englishNameTranslation}
                    </p>
                  </div>
                  <div className="inline-block text-center float-right mr-3">
                    <h3>{item?.name}</h3>
                    <p className="text-xs font-semibold">
                      {item?.numberOfAyahs}&nbsp;Ayahs
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
