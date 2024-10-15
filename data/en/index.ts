import { QuestionType } from "@/types";

export const questions: QuestionType[] = [
  {
    id: 1,
    question: {
      english: "What is a zebra crossing used for?",
      nepali: "जेब्रा क्रवसङ्ग के का लागि प्रयोग गरिन्छ?",
    },
    options: [
      { id: 1, english: "For waiting", nepali: "उतिन" },
      {
        id: 2,
        english: "For pedestrians to cross the road",
        nepali: "पैदल यात्रीले बाटो काट्न",
      },
      { id: 3, english: "To stop vehicles", nepali: "र्ाडी रोक्न" },
      { id: 4, english: "To drive vehicles", nepali: "र्ाडी कुदाउँन" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 2,
    question: {
      english: "Which gear should be used when driving uphill?",
      nepali: "उकालोमा गाडी चलाउँदा कुन गियर प्रयोग गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "First gear", nepali: "पहिलो गियर" },
      { id: 2, english: "Second gear", nepali: "दोस्रो गियर" },
      { id: 3, english: "Third gear", nepali: "तेस्रो गियर" },
      { id: 4, english: "Fourth gear", nepali: "चौथो गियर" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 3,
    question: {
      english: "From which side should you overtake?",
      nepali: "ओभरटेक गर्दा कुन साइडबाट गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Left side", nepali: "बायाँ साइड" },
      { id: 2, english: "Right side", nepali: "दायाँ साइड" },
      { id: 3, english: "Both sides", nepali: "दुबै साइड" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 4,
    question: {
      english: "Which of the following is a duty of a driver?",
      nepali: "तलका मध्ये कुन कर्तव्य चालकको हो?",
    },
    options: [
      { id: 1, english: "Driving carefully", nepali: "सावधानीपूर्वक चलाउने" },
      {
        id: 2,
        english: "Following traffic rules",
        nepali: "यातायात नियम पालना गर्ने",
      },
      {
        id: 3,
        english: "Avoiding prohibited actions",
        nepali: "प्रतिबन्धित कार्य नगर्ने",
      },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 5,
    question: {
      english: "How do you stop a moving motorcycle suddenly?",
      nepali: "चलिरहेको मोटरसाइकललाई एक्कासी कसरी रोक्ने?",
    },
    options: [
      {
        id: 1,
        english: "Press both brakes at once",
        nepali: "दुबै ब्रेक एकैपटक थिच्ने",
      },
      {
        id: 2,
        english: "Press the rear brake hard",
        nepali: "पछाडिको ब्रेक बेस्सरी थिच्ने",
      },
      { id: 3, english: "Turn off the engine", nepali: "इन्जिन बन्द गर्ने" },
      { id: 4, english: "Shift down the gear", nepali: "गियर तल झार्ने" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 6,
    question: {
      english: "Which authority registers motorcycles?",
      nepali: "मोटरसाइकल दर्ता गर्ने निकाय कुन हो?",
    },
    options: [
      {
        id: 1,
        english: "Transport Management Department",
        nepali: "यातायात व्यवस्थापन विभाग",
      },
      {
        id: 2,
        english: "District Administration Office",
        nepali: "जिल्ला प्रशासन कार्यालय",
      },
      {
        id: 3,
        english: "Transport Management Office",
        nepali: "यातायात व्यवस्थापन कार्यालय",
      },
      {
        id: 4,
        english: "Ministry of Physical Infrastructure and Transport",
        nepali: "भौतिक पूर्वाधार तथा यातायात मन्त्रालय",
      },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 7,
    question: {
      english: "Which light should be turned on when parking a car at night?",
      nepali: "राति गाडी पार्क गर्दा कुन लाइट बाल्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Headlight", nepali: "हेडलाइट" },
      { id: 2, english: "Side light", nepali: "साइड लाइट" },
      { id: 3, english: "Parking light", nepali: "पार्किङ लाइट" },
      { id: 4, english: "Emergency light", nepali: "इमर्जेन्सी लाइट" },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 8,
    question: {
      english: "What should you do before overtaking another vehicle?",
      nepali: "अर्को गाडीलाई ओभरटेक गर्नु अघि के गर्नुपर्छ?",
    },
    options: [
      {
        id: 1,
        english: "Signal with headlights",
        nepali: "हेडलाइटको संकेत दिनुहोस्",
      },
      { id: 2, english: "Honk", nepali: "हर्न बजाउनुहोस्" },
      {
        id: 3,
        english: "Use indicators",
        nepali: "इन्डिकेटर प्रयोग गर्नुहोस्",
      },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 9,
    question: {
      english: "What color indicates a zebra crossing?",
      nepali: "जेब्रा क्रसिङ्गलाई कुन रंगले चिनिन्छ?",
    },
    options: [
      { id: 1, english: "Black and White", nepali: "कालो र सेतो" },
      { id: 2, english: "Yellow and Black", nepali: "पहेंलो र कालो" },
      { id: 3, english: "Yellow and Blue", nepali: "पहेंलो र नीलो" },
      { id: 4, english: "Black and Yellow", nepali: "कालो र पहेंलो" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 10,
    question: {
      english: "How many passengers can ride a motorcycle?",
      nepali: "मोटरसाइकलमा कतिजना यात्रु सवार गर्न सक्छन्?",
    },
    options: [
      { id: 1, english: "1", nepali: "१ जना" },
      { id: 2, english: "2", nepali: "२ जना" },
      { id: 3, english: "3", nepali: "३ जना" },
      { id: 4, english: "No limit", nepali: "सीमा छैन" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 11,
    question: {
      english: "What should you do if an ambulance approaches from behind?",
      nepali: "पछाडिबाट एम्बुलेन्स आउँदा के गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Stop the vehicle", nepali: "गाडी रोक्नुहोस्" },
      { id: 2, english: "Give way", nepali: "साइड दिनुहोस्" },
      { id: 3, english: "Increase speed", nepali: "गति बढाउनुहोस्" },
      { id: 4, english: "Overtake", nepali: "ओभरटेक गर्नुहोस्" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 12,
    question: {
      english: "Which signal light should be used when turning?",
      nepali: "मोड्दा कुन साइडलाइट प्रयोग गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Full light", nepali: "फुल लाइट" },
      { id: 2, english: "Headlight", nepali: "हेडलाइट" },
      { id: 3, english: "Brake light", nepali: "ब्रेक लाइट" },
      { id: 4, english: "Indicator light", nepali: "इन्डिकेटर लाइट" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 13,
    question: {
      english: "How should you drive in a school zone?",
      nepali: "विद्यालय क्षेत्रमा कसरी गाडी चलाउनु पर्छ?",
    },
    options: [
      { id: 1, english: "Drive slowly", nepali: "बिस्तारै चलाउनुहोस्" },
      { id: 2, english: "Honk frequently", nepali: "हर्न बजाउनुहोस्" },
      {
        id: 3,
        english: "Overtake other vehicles",
        nepali: "अन्य गाडीलाई ओभरटेक गर्नुहोस्",
      },
      { id: 4, english: "Drive fast", nepali: "चाँडो चलाउनुहोस्" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 14,
    question: {
      english:
        "Which is the main way to protect your head while riding a motorcycle?",
      nepali: "मोटरसाइकल चलाउँदा टाउकोको सुरक्षा गर्न मुख्य उपाय के हो?",
    },
    options: [
      { id: 1, english: "Ride slowly", nepali: "बिस्तारै चलाउनु" },
      { id: 2, english: "Wear a cap", nepali: "क्याप लगाउनु" },
      { id: 3, english: "Avoid overtaking", nepali: "ओभरटेक नगर्नु" },
      { id: 4, english: "Wear a helmet", nepali: "हेलमेट लगाउनु" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 15,
    question: {
      english: "Which vehicles should you give way to?",
      nepali: "तपाईले कुन गाडीलाई साइड दिनुपर्छ?",
    },
    options: [
      { id: 1, english: "Emergency vehicles", nepali: "इमर्जेन्सी गाडीहरू" },
      { id: 2, english: "Slower vehicles", nepali: "ढिलो गाडीहरू" },
      { id: 3, english: "Heavy vehicles", nepali: "ठूला गाडीहरू" },
      { id: 4, english: "All vehicles", nepali: "सबै गाडीहरू" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 16,
    question: {
      english: "What is the purpose of a rearview mirror?",
      nepali: "रियरभ्यू मिररको प्रयोग केको लागि हो?",
    },
    options: [
      { id: 1, english: "To see behind", nepali: "पछाडि हेर्न" },
      { id: 2, english: "To check speed", nepali: "गति जाँच्न" },
      { id: 3, english: "To watch the sides", nepali: "छेउतिर हेर्न" },
      { id: 4, english: "To monitor weather", nepali: "मौसम हेर्न" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 17,
    question: {
      english: "Which lights should be turned on in foggy conditions?",
      nepali: "कुहिरोमा कुन बत्ती बाल्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Fog lights", nepali: "कुहिरो लाइट" },
      { id: 2, english: "Brake lights", nepali: "ब्रेक लाइट" },
      { id: 3, english: "Side lights", nepali: "साइड लाइट" },
      { id: 4, english: "Headlights", nepali: "हेडलाइट" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 18,
    question: {
      english: "Where should you not park your vehicle?",
      nepali: "तपाईले गाडी पार्क नगर्नुपर्ने स्थान कुन हो?",
    },
    options: [
      { id: 1, english: "At intersections", nepali: "दोबाटो वा चौबाटोमा" },
      { id: 2, english: "On bridges", nepali: "पुलमा" },
      { id: 3, english: "Near schools", nepali: "विद्यालय नजिक" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 19,
    question: {
      english: "What should you do before starting your motorcycle?",
      nepali: "मोटरसाइकल सुरु गर्नु अघि के गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Check fuel level", nepali: "इन्धन जाँच गर्नुहोस्" },
      { id: 2, english: "Check brakes", nepali: "ब्रेक जाँच गर्नुहोस्" },
      { id: 3, english: "Check mirrors", nepali: "मिरर जाँच गर्नुहोस्" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 20,
    question: {
      english: "What is the main cause of motorcycle accidents?",
      nepali: "मोटरसाइकल दुर्घटनाको मुख्य कारण के हो?",
    },
    options: [
      { id: 1, english: "Over-speeding", nepali: "अधिक गति" },
      {
        id: 2,
        english: "Not following traffic rules",
        nepali: "यातायात नियमको पालना नगर्ने",
      },
      { id: 3, english: "Poor road conditions", nepali: "खराब सडक अवस्था" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 21,
    question: {
      english: "Which lane should slower vehicles use?",
      nepali: "ढिलो गाडीहरूले कुन लेन प्रयोग गर्नुपर्छ?",
    },
    options: [
      { id: 1, english: "Left lane", nepali: "बायाँ लेन" },
      { id: 2, english: "Right lane", nepali: "दायाँ लेन" },
      { id: 3, english: "Middle lane", nepali: "बीचको लेन" },
      { id: 4, english: "Any lane", nepali: "जसुकै लेन" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 22,
    question: {
      english: "Which is a mandatory document for motorcycle riders?",
      nepali: "मोटरसाइकल चालकको लागि अनिवार्य कागजात कुन हो?",
    },
    options: [
      { id: 1, english: "License", nepali: "लाइसेन्स" },
      { id: 2, english: "Insurance", nepali: "बीमा" },
      { id: 3, english: "Registration", nepali: "दर्ता" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 23,
    question: {
      english: "When should you not overtake another vehicle?",
      nepali: "कहिले अर्को गाडीलाई ओभरटेक गर्नु हुँदैन?",
    },
    options: [
      { id: 1, english: "On a bend", nepali: "मोडमा" },
      { id: 2, english: "Near a zebra crossing", nepali: "जेब्राक्रसिङ नजिक" },
      { id: 3, english: "On narrow roads", nepali: "साँघुरा सडकमा" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 24,
    question: {
      english: "Which action should be avoided when riding downhill?",
      nepali: "ओरालोमा मोटरसाइकल चलाउँदा के गर्न नहुने?",
    },
    options: [
      { id: 1, english: "Applying clutch", nepali: "क्लच थिच्ने" },
      { id: 2, english: "Braking", nepali: "ब्रेक लगाउने" },
      { id: 3, english: "Changing gears", nepali: "गियर परिवर्तन गर्ने" },
      { id: 4, english: "None of the above", nepali: "माथिका कुनै पनि होइन" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 25,
    question: {
      english: "Which vehicles need third-party insurance?",
      nepali: "कुन सवारी साधनमा तेस्रो पक्षको बीमा चाहिन्छ?",
    },
    options: [
      { id: 1, english: "Private cars", nepali: "निजी कारहरू" },
      {
        id: 2,
        english: "Public transport vehicles",
        nepali: "सार्वजनिक यातायात",
      },
      { id: 3, english: "Motorcycles", nepali: "मोटरसाइकल" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
];
