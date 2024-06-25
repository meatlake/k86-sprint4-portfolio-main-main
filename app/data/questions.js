// data/questions.js
const questions = [
  {
    type: "multiple-choice",
    question: "Welke van de volgende beschrijvingen past het best bij jou?",
    options: [
      {
        type: "text",
        value:
          "Ik vind het leuk om problemen op te lossen en dingen te laten werken.",
      },
      {
        type: "text",
        value:
          "Ik geniet van het maken van 3D-modellen en digitale sculpturen.",
      },
      {
        type: "text",
        value: "Ik hou ervan om visuele elementen en composities te creëren.",
      },
      {
        type: "text",
        value:
          "Ik word enthousiast van het tot leven brengen van ontwerpen met beweging.",
      },
    ],
    category: ["Coder", "3DArtiest", "Vormgever", "Animator"],
  },
  {
    type: "slider",
    question: "Ik vind het leuk om te puzzels op te lossen",
    category: "Coder",
  },
  {
    type: "multiple-choice",
    question: "Welke van de volgende vaardigheden spreekt jou het meest aan?",
    options: [
      { type: "text", value: "HTML, CSS, en JavaScript." },
      { type: "text", value: "Kleurtheorie, typografie, en lay-out ontwerp." },
      {
        type: "text",
        value: "3D-modellering, textureren, en digitaal beeldhouwen.",
      },
      { type: "text", value: "Timing, beweging, en visuele effecten." },
    ],
    category: ["Coder", "3DArtiest", "Vormgever", "Animator"],
  },
  {
    type: "slider",
    question: "Ik vind het leuk om muziek te maken",
    category: "Coder",
  },
  {
    type: "multiple-choice",
    question: "Welke van deze afbeeldingen spreek jou het meeste aan?",
    options: [
      { type: "image", src: "/images/codingImg.png" },
      { type: "image", src: "/images/3dImg.png" },
      { type: "image", src: "/images/vormgevingImg.png" },
      { type: "image", src: "/images/animatieImg.png" },
    ],
    category: ["Coder", "3DArtiest", "Vormgever", "Animator"],
  },
  {
    type: "slider",
    question: "Ik vind het leuk om te tekenen en schilderen",
    category: "Coder",
  },
  {
    type: "multiple-choice",
    question: "Welk soort werkvorm spreekt jou het meeste aan?",
    options: [
      { type: "image", src: "/images/codingImg2.png" },
      { type: "image", src: "/images/3dImg2.png" },
      { type: "image", src: "/images/vormgevingImg2.png" },
      { type: "image", src: "/images/animatieImg2.png" },
    ],
    category: ["Coder", "3DArtiest", "Vormgever", "Animator"],
  },
  {
    type: "slider",
    question: "Ik vind het leuk om te boetseren",
    category: "Coder",
  },
];

export default questions;
