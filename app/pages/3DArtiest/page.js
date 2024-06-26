import React from "react";
import QuitButton from "@/app/components/QuitButton";
import { portfolioInfo } from "@/app/portfolioInfo";
import PortfolioButtons from "@/app/components/PortfolioButtons";
import NavBar from "@/app/components/NavBar";
import PortfolioFooter from "@/app/components/PortfolioFooter";

const page = () => {
  const portfolioNumber = 1;

  return (
    <div className="bg-black absolute top-0 left-0 w-full h-full text-white">
      <NavBar />
      <div className="absolute lg:top-0 top-24 right-0 bg-no-repeat bg-cover lg:z-50">
        <img
          src="/images/3dartiestBG.svg"
          className="w-32 lg:w-[600px]"
          alt="vormgeving icon"
        />
      </div>
      <div className="mt-32 px-4 lg:px-32">
        <div className="flex flex-col gap-1 lg:gap-4">
          <h3 className="text-2xl">Jouw UX talent is</h3>
          <h1
            className="text-6xl lg:text-[5rem] font-bold"
            style={{ color: portfolioInfo[portfolioNumber].color }}
          >
            {portfolioInfo[portfolioNumber].title}
          </h1>
          <p className="max-w-[750px] mt-12 lg:mt-24 text-medium leading-relaxed">
            {portfolioInfo[portfolioNumber].description}
          </p>
        </div>
      </div>
      <div className="flex text-center lg:gap-12 px-4 lg:px-32 justify-center items-center mt-[4rem] lg:mt-[150px]">
        <p className="rotate-90 lg:text-2xl">&rarr;</p>
        <h2 className="text-md px-12 lg:text-2xl">
          Vind hier {portfolioInfo[portfolioNumber].title} UX inspiratie voor je
          volgende project{" "}
        </h2>
        <p className="rotate-90 lg:text-2xl">&rarr;</p>
      </div>
      <div className="lg:grid grid-cols-2 px-4 lg:px-32 flex flex-col gap-6 mt-[4rem] lg:mt-24">
        <div className="flex">
          <img
            src="/images/julian3D1.svg"
            alt="3d julian"
            className="max-h-[600px]"
          />
        </div>
        <div className="pl-4 lg:pl-12 flex flex-col gap-6 px-4 lg:px-32">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Julian
          </h2>
          <p className="lg:text-xl text-md">
            In Sprint 1 ben ik aan de slag gegaan met Spline, dit is een 3D
            modelleringstool die je makkelijk kunt integreren met verschillende
            websitebouwers. Deze modellen kun je gebruiken om de ervaring op je
            website te verbeteren en tekst te ondersteunen met visualiteit. Je
            kunt bijvoorbeeld een 3d ontwerp maken van het product dat je
            verkoopt en deze interactief maken. Zo kunnen gebruikers het object
            draaien en erop inzoomen om zo het product van dichtbij te kunnen
            zien.
          </p>
          <p className="lg:text-md text-sm">
            Ik heb geleerd hoe ik verschillende vormen kan maken, variabelen mee
            kan geven zodat de vormen dynamisch kunnen veranderen en hoe ik deze
            vormen kan laten bewegen. Door het gebruik van de tool Spline heb ik
            de basiskennis verkregen die nodig is om te kunnen 3d
            &apos;sculpten&apos; in andere programma&apos;s zoals Blender, die
            wat ingewikkelder en meer in your face is.
          </p>
        </div>
      </div>
      <div className="mt-12 px-4 lg:px-32">
        <img src="/images/julian3D2.png" alt="julian 3d 2" />
      </div>
      <div className="lg:hidden w-full h-[2px] bg-slate-500 my-12"></div>
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 px-4 lg:px-32">
        <div className="flex flex-col gap-6 pr-12">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Damian
          </h2>
          <p className="lg:text-xl text-md">
            Voor deze minor ben ik in het eerste blok van 5 weken bezig geweest
            met modelleren in blender. Mijn originele plan was om iets met
            muziek te doen en het kwam in mij op om een visual te maken. Dit was
            uiteindelijk ver gegrepen en moeilijk iets op te bedenken om aan te
            leveren aan het einde van het blok. Uiteindelijk heb ik daarom
            gekozen om het te houden bij het modelleren van een character.
          </p>
          <p className="lg:text-xl text-sm">
            Doormiddel van verschillende tutorials heb ik geleerd hoe ik een
            simpele character moet ontwerpen. Ik ben begonnen met twee
            aanzichten van de character op twee verschillende assen. Hieruit heb
            ik de character 3d gevormd vanaf twee kanten. Met behulp van veel
            verschillende tools in blender heb ik de volledige character gevormd
            en deze ook een skelet mee gegeven waardoor simpele animatie
            mogelijk is.
          </p>
        </div>
        <div className="mt-4 lg:mt-0 grid grid-cols-3 gap-2">
          <img
            className="lg:h-[200px] w-full object-cover col-span-1"
            src="/images/damianBlender/blender1.png"
            alt="image Kevin"
          />
          <img
            className="lg:h-[200px] w-full object-cover col-span-2"
            src="/images/damianBlender/blender4.png"
            alt="image Kevin"
          />
          <img
            className="lg:h-[200px] w-full object-cover col-span-2"
            src="/images/damianBlender/blender3.png"
            alt="image Kevin"
          />
          <img
            className="lg:h-[200px] w-full object-cover col-span-1"
            src="/images/damianBlender/blender2.png"
            alt="image Kevin"
          />
        </div>
      </div>
      <PortfolioFooter />
    </div>
  );
};

export default page;
