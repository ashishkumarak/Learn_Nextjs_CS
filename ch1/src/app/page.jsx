import LearnClientComponent from "@/components/LearnClientComponent";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnForm from "@/components/LearnForm";
import LearnForm1 from "@/components/LearnForm1";
import LearnForm2 from "@/components/LearnForm2";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCSS from "@/components/LearnUseGlobalCSS";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-14">
      Hello next js
      <hr/>

      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnUseGlobalCSS /> */}
      {/* <LearnCSSModule /> */}
      {/* <LearnUseImage /> */}

      {/* <LearnServerComponent /> */}
      {/* <LearnClientComponent /> */}

      {/* <LearnForm /> */}
      {/* <LearnForm1 /> */}
      {/* <LearnForm2 /> */}

      <LearnDataFetching />
      

      


    </main>
  );
}
