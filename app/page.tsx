import MainOptions from '@/app/components/MainOptions'

export default function Home() {
  return (
    <div id="optionbody">
      <MainOptions
        pageLink="/nik"
        title="ABOUT ME"
        subtitle="Get To Know Me, Contacts & Resume"
        image="/img/main_nik.webp"
      />
      <MainOptions
        pageLink="/photos"
        title="PHOTOS"
        subtitle="Snap. Snap. Snap."
        image="/img/main_photo.webp"
      />
      <MainOptions
        pageLink="/projects"
        title="PROJECTS"
        subtitle="Personal Coding Projects"
        image="/img/main_project.webp"
      />
    </div>
  );
}