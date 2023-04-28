import { GetServerSideProps } from "next";
import React from "react";
import SurahDetails from "@/components/SurahDetails/SurahDetails";

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
    ayahs: Array<{ audio: string }>;
    name: string;
  };
};

const Surah = ({ QuranDetails, QuranMetaData }: QuranArrayProps) => {
  const surahDetails = QuranDetails ?? {};

  const quranMeta = QuranMetaData ?? {};

  const quranSound = QuranMetaData?.ayahs ?? {};

  return (
    <div>
      <SurahDetails
        surahDetails={surahDetails}
        quranSound={quranSound}
        quranMeta={quranMeta}
      />
    </div>
  );
};

export default Surah;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { number }: any = context.params;
  const [QuranDetails, QuranMetaData] = await Promise.all([
    fetch(
      `https://quranenc.com/api/v1/translation/sura/english_saheeh/${number}`
    ).then((res) => res.json()),
    fetch(`http://api.alquran.cloud/v1/surah/${number}/ar.alafasy `).then(
      (res) => res.json()
    ),
  ]);

  return {
    props: {
      QuranDetails: QuranDetails.result,
      QuranMetaData: QuranMetaData.data,
    },
  };
};
