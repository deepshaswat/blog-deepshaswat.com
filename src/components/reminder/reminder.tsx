"use client";

import Head from "next/head";
import Base from "@/components/posts/BaseStatic";

export async function getStaticProps() {
  const meta = {
    title: "Reminder // Shaswat Deep",
    description:
      "Time is the only thing that is finite. Rest all things can be bought, sold, or created. So, make the most of it.",
    tagline: "Tick-tock. Tick-tock.",
    image: "/static/images/reminder-bw.jpg",
    primaryColor: "purple",
    secondaryColor: "cyan",
  };

  return { props: meta };
}

export const Reminder = async () => {
  const { props } = await getStaticProps();
  const { title, description, image, tagline, primaryColor, secondaryColor } =
    props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name='description' />
        <meta content={description} property='og:description' />
        <meta content='https://deepshaswat.com/reminder' property='og:url' />
        <meta content={`https://deepshaswat.com${image}`} property='og:image' />
      </Head>
      <Base
        title={title}
        description=''
        tagline={tagline}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >
        <div className='justify-start gap-x-2'>
          <p>
            <em>- by Shaswat &apos; &amp; </em>
          </p>
        </div>
      </Base>
    </>
  );
};

export default Reminder;
