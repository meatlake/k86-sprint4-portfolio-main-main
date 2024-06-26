import React from "react";
import { portfolioInfo } from "@/app/portfolioInfo";
import NavBar from "@/app/components/NavBar";
import PortfolioFooter from "@/app/components/PortfolioFooter";

const page = () => {
  const portfolioNumber = 3;

  return (
    <div className="bg-black absolute top-0 left-0 w-full h-full text-white">
      <NavBar />
      <div className="absolute lg:top-0 top-12 right-0 bg-no-repeat bg-cover">
        <img
          src="/images/coderBG.svg"
          className="w-32 lg:w-[600px]"
          alt="vormgeving icon"
        />
      </div>
      <div className="lg:mt-32 mt-40 px-4 lg:px-32">
        <div className="flex flex-col gap-1 lg:gap-4">
          <h3 className="lg:text-2xl text-xl">Jouw UX talent is</h3>
          <h1
            className="text-5xl lg:text-[5rem] font-bold"
            style={{ color: portfolioInfo[portfolioNumber].color }}
          >
            {portfolioInfo[portfolioNumber].title}
          </h1>
          <p className="max-w-[750px] mt-12 lg:mt-24 text-medium leading-relaxed">
            {portfolioInfo[portfolioNumber].description}
          </p>
        </div>
      </div>
      <div className="flex text-center px-4 lg:px-32 lg:gap-12 justify-center items-center mt-[4rem] lg:mt-[150px]">
        <p className="rotate-90 lg:text-2xl">&rarr;</p>
        <h2 className="text-md px-12 lg:text-2xl">
          Vind hier {portfolioInfo[portfolioNumber].title} UX inspiratie voor je
          volgende project{" "}
        </h2>
        <p className="rotate-90 lg:text-2xl">&rarr;</p>
      </div>
      <div className="lg:grid grid-cols-2 flex flex-col px-4 lg:px-32 gap-6 mt-[4rem] lg:mt-24">
        <div className="flex flex-col lg:grid grid-cols-1 gap-2">
          <div className="bg-coderJulian1 bg-contain w-[100vw] h-screen lg:w-[450px] lg:h-[800px] bg-no-repeat"></div>
        </div>
        <div className="pl-4 lg:pl-12 flex flex-col gap-6">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Julian
          </h2>
          <p className="lg:text-xl text-md">
            SwiftUI is het framework om apps te bouwen van Apple. Deze taal
            wordt steeds vaker gebruikt in het bouwen van applicaties voor
            verschillende apparaten zoals de iPhone, iPad en zelfs de nieuwe
            Vision Pro, met VisionOS. De mogelijkheden zijn al ontzettend groot
            door de makkelijk inzetbare componenten zoals kaarten en
            betalingsmogelijkheden. Ik heb de fundamentals van SwiftUI kunnen
            leren en hiermee een aantal apps kunnen maken die gebruikt kunnen
            worden op een iPhone.
          </p>
          <p className="lg:text-md text-sm">
            SwiftUI werkt doormiddel van Views, een View kan meerdere dingen
            zijn, maar is eigenlijk een onderdeel van wat je ziet op je
            telefoon, ipad of laptop. Je moet het zo zien: Een View kan
            bijvoorbeeld 1 rij met informatie zijn, zoals een tekst met een
            plaatje. Deze rij (View) kun je dan in een ander bestand weer
            importeren en in een andere View plaatsen die meerdere Views in
            bijvoorbeeld een lijst zet. Deze View met een lijst kun je dan weer
            op bijvoorbeeld je hoofd View zetten wat je homescreen voor moet
            stellen. Zo combineer je dus verschillende views en deze maak je ook
            op aparte plekken, waardoor het ook meteen een redelijk
            overzichtelijke taal is. Je kunt er ook voor kiezen om alle views of
            onderdelen in 1 bestand te schrijven, maar daar wordt de code
            onoverzichtelijk van en het is ook niet de best practice.
          </p>
          <p className="lg:text-md text-sm">
            Het is dus verstandiger om verschillende mappen met Views en
            modellen te maken om zo andere programmeurs die eventueel met jouw
            code aan de slag gaan, een overzichtelijk beeld te geven van je
            applicatie.
          </p>
        </div>
      </div>
      <div className="mt-12 px-4 lg:px-32">
        <img src="/images/coderJulian2.png" alt="code screenshot" />
      </div>
      <div className="lg:hidden w-full h-[2px] bg-slate-500 my-12"></div>
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 px-4 lg:px-32">
        <div className="flex flex-col gap-6 pr-12">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Julian
          </h2>
          <p className="lg:text-xl text-md">
            React is 1 van de populairste Javascript frameworks die er op het
            moment zijn. Deze wordt op een groot aantal websites van grote
            bedrijven gebruikt door zijn snelle laadtijden en makkelijk
            aanpasbare functies. De website waarop je nu aan navigeren bent is
            ook gebouwd met React.
          </p>
          <p className="lg:text-xl text-sm">
            Tijdens dit project heb ik me bezig gehouden met het bouwen van
            websites met interactie. Zo heb ik een website gemaakt die met
            behulp van data het weer op een opgevraagde locatie laat zien. Deze
            data wordt opgehaald van een server op het internet en op mijn
            manier weergegeven. Ook heb ik gewerkt met dynamische content,
            hierbij moet je zorgen dat wat de tekst of afbeelding ook is, deze
            goed wordt weergegeven op je website. Dit heb ik gedaan met onder
            andere CSS, één van de meestgebruikte codeertalen op het internet.
          </p>
        </div>
        <div className=" flex flex-col gap-2 mt-4 lg:mt-0">
          <img src="/images/coderJ2.png" alt="image Julian" />
          <img src="/images/coderJ2-1.png" alt="image julian 2" />
        </div>
      </div>
      <PortfolioFooter />
    </div>
  );
};

export default page;
