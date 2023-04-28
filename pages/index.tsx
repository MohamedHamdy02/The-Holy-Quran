import Header from "@/components/Header/Header";
import Loading from "@/components/Loading/Loading";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

type QuranDataProps = {
  name: string;
  number?: number;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs?: number;
};

type QuranDetailsProps = {
  sura: string;
  arabic_text: string;
  aya: string;
  translation: string;
  footnotes: string;
};

type QuranArrayProps = {
  QuranDetails: Array<QuranDetailsProps>;

  QuranMetaData: {
    surahs: any;
    ayahs: Array<{ audio: string }>;
    name: string;
  };
};

const Home = ({ QuranDetails, QuranMetaData }: QuranArrayProps) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const [searchSurah, setSearchSurah] = useState<{}>({});

  const [load, setLoad] = useState(true);

  const surahDetail = QuranDetails ?? {};

  const quranMeta = QuranMetaData.surahs.references ?? {};

  function onChangeHandler(e: React.ChangeEventHandler<HTMLInputElement>) {
    const value = e as unknown as string;
    setSearchInput(value);
    if (searchInput) {
      const newSurahList = quranMeta.filter(
        (surah: QuranDataProps) =>
          surah.englishNameTranslation
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          surah.englishName.toLowerCase().includes(searchInput.toLowerCase()) ||
          surah.name.includes(searchInput)
      );
      setSearchSurah(newSurahList);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div>
          <Header
            quranMeta={searchInput ? searchSurah : quranMeta}
            surahDetail={surahDetail}
            searchInput={searchInput}
            onChangeHandler={onChangeHandler}
          />
        </div>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const number: any = context.params;
  const [QuranMetaData, QuranDetails] = await Promise.all([
    fetch(`http://api.alquran.cloud/v1/meta`).then((res) => res.json()),
    fetch(
      `https://quranenc.com/api/v1/translation/sura/english_saheeh/${number}`
    ).then((res) => res.json()),
  ]);

  return {
    props: {
      QuranMetaData: QuranMetaData.data,
      QuranDetails: QuranDetails,
    },
  };
};
