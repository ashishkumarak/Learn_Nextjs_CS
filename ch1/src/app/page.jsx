import LearnClientComponent from "@/components/LearnClientComponent";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnForm from "@/components/LearnForm";
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

      <LearnForm />

      


    </main>
  );
}
