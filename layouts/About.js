import { markdownify } from "@lib/utils/textConverter";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import ImageFallback from "./components/ImageFallback";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    accordion,
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <Banner title={title} />
        {/* About */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5 md:order-2">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <p>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            {markdownify(works.title, "h2", "section-title mt-4")}
            {markdownify(works.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={mission.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              {markdownify(mission.title, "h2", "section-title bar-left mt-0")}
              {markdownify(mission.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* <div className="section container">
          <div className="animate text-center">
            <p>{accordion.subtitle}</p>
            {markdownify(accordion.title, "h2", "section-title mt-4")}
            {markdownify(accordion.content, "p", "mt-16")}
          </div>
          <div className="row">
            <div className="lg:col-10">
              ...
            </div>
          </div>
        </div> */}

      </section>
    </>
  );
};

export default About;
