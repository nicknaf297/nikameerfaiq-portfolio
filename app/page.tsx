import MainOptions from '@/app/components/MainOptions'

export default function Home() {
  return (
    <div id="optionbody">
      <MainOptions
        pageLink="/nik"
        title="ABOUT ME"
        subtitle="Get To Know Me, Contacts & Resume"
        image="/img/nik_main.jpg"
      />
      <MainOptions
        pageLink="/photos"
        title="PHOTOS"
        subtitle="Snap. Snap. Snap."
        image="/img/photo_main.jpg"
      />
      <MainOptions
        pageLink="/projects"
        title="PROJECTS"
        subtitle="Personal Coding Projects"
        image="/img/project_main.png"
      />
    </div>
  );
}