import { QuestionType } from "@/types";

export const questions: QuestionType[] = [
  {
    id: 26,
    question: {
      english: "When should you check your vehicle's oil level?",
      nepali: "तपाईंले गाडीको तेल स्तर कहिले जाँच गर्नुपर्छ?",
    },
    options: [
      {
        id: 1,
        english: "Before starting the engine",
        nepali: "इन्जिन सुरु गर्नु अघि",
      },
      { id: 2, english: "After driving for 10 km", nepali: "१० किमी चलाएपछि" },
      { id: 3, english: "At the end of the day", nepali: "दिनको अन्त्यमा" },
      {
        id: 4,
        english: "Any time during the day",
        nepali: "दिनको कुनै पनि समय",
      },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 27,
    question: {
      english: "What should you do when your vehicle skids?",
      nepali: "तपाईंको गाडी चिप्लिदा के गर्नु पर्छ?",
    },
    options: [
      {
        id: 1,
        english: "Accelerate quickly",
        nepali: "छिटो एक्सिलेरेट गर्नुहोस्",
      },
      { id: 2, english: "Apply brakes", nepali: "ब्रेक लगाउनुहोस्" },
      {
        id: 3,
        english: "Turn in the direction of the skid",
        nepali: "चिप्लिएको दिशामा मोड्नुहोस्",
      },
      {
        id: 4,
        english: "Turn in the opposite direction",
        nepali: "विपरित दिशामा मोड्नुहोस्",
      },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 28,
    question: {
      english: "Which is the safest way to overtake another vehicle?",
      nepali: "अर्को गाडीलाई ओभरटेक गर्ने सबैभन्दा सुरक्षित तरिका कुन हो?",
    },
    options: [
      { id: 1, english: "From the left side", nepali: "बायाँ साइडबाट" },
      { id: 2, english: "From the right side", nepali: "दायाँ साइडबाट" },
      { id: 3, english: "From any side", nepali: "जसुकै साइडबाट" },
      {
        id: 4,
        english: "When the other vehicle stops",
        nepali: "अर्को गाडी रोक्दा मात्र",
      },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 29,
    question: {
      english: "What is the purpose of traffic lights?",
      nepali: "यातायात बत्तीको उद्देश्य के हो?",
    },
    options: [
      {
        id: 1,
        english: "To control traffic flow",
        nepali: "यातायातको प्रवाहलाई नियन्त्रण गर्न",
      },
      { id: 2, english: "To stop vehicles", nepali: "गाडी रोक्न" },
      {
        id: 3,
        english: "To provide signals for pedestrians",
        nepali: "पैदल यात्रीलाई संकेत दिन",
      },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 30,
    question: {
      english: "What should you do if your brakes fail while driving?",
      nepali: "गाडी चलाउँदै गर्दा ब्रेक फेल भएमा के गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Accelerate", nepali: "गति बढाउनुहोस्" },
      {
        id: 2,
        english: "Turn off the engine",
        nepali: "इन्जिन बन्द गर्नुहोस्",
      },
      {
        id: 3,
        english: "Use the emergency brake",
        nepali: "इमर्जेन्सी ब्रेक प्रयोग गर्नुहोस्",
      },
      { id: 4, english: "Honk continuously", nepali: "लगातार हर्न बजाउनुहोस्" },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 31,
    question: {
      english: "What is the meaning of a yellow traffic signal?",
      nepali: "पहेंलो ट्राफिक संकेतको अर्थ के हो?",
    },
    options: [
      { id: 1, english: "Stop", nepali: "रोक्नुहोस्" },
      { id: 2, english: "Get ready to stop", nepali: "रोक्न तयार हुनुहोस्" },
      { id: 3, english: "Go", nepali: "जानुहोस्" },
      {
        id: 4,
        english: "Proceed with caution",
        nepali: "सावधानीपूर्वक अगाडि बढ्नुहोस्",
      },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 32,
    question: {
      english: "Which vehicle has the right of way at a roundabout?",
      nepali: "राउन्डअबाउटमा कुन गाडीलाई पहिला जान अनुमति छ?",
    },
    options: [
      {
        id: 1,
        english: "The vehicle already in the roundabout",
        nepali: "राउन्डअबाउटमा पहिले नै रहेको गाडी",
      },
      {
        id: 2,
        english: "The vehicle approaching from the right",
        nepali: "दायाँबाट आउने गाडी",
      },
      { id: 3, english: "The fastest vehicle", nepali: "सबैभन्दा छिटो गाडी" },
      { id: 4, english: "Any vehicle", nepali: "जसुकै गाडी" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 33,
    question: {
      english: "When should you use the horn?",
      nepali: "तपाईंले कहिले हर्न प्रयोग गर्नुपर्छ?",
    },
    options: [
      { id: 1, english: "When overtaking", nepali: "ओभरटेक गर्दा" },
      { id: 2, english: "In a school zone", nepali: "विद्यालय क्षेत्रमा" },
      { id: 3, english: "Only in emergencies", nepali: "सिर्फ आपतकालमा" },
      { id: 4, english: "All the time", nepali: "सधैं" },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 34,
    question: {
      english: "What is the legal alcohol limit for drivers in Nepal?",
      nepali: "नेपालमा सवारी चालकको लागि कानुनी मदिरा सीमा कति हो?",
    },
    options: [
      { id: 1, english: "0.05%", nepali: "०.०५%" },
      { id: 2, english: "0.08%", nepali: "०.०८%" },
      { id: 3, english: "No alcohol allowed", nepali: "मदिरा निषेध" },
      { id: 4, english: "0.02%", nepali: "०.०२%" },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 35,
    question: {
      english: "What should you do when driving in rain?",
      nepali: "पानी परिरहेछ भने गाडी चलाउँदा के गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Drive faster", nepali: "गति बढाउनुहोस्" },
      { id: 2, english: "Drive slower", nepali: "गति घटाउनुहोस्" },
      {
        id: 3,
        english: "Turn off headlights",
        nepali: "हेडलाइट बन्द गर्नुहोस्",
      },
      { id: 4, english: "Honk frequently", nepali: "धेरै हर्न बजाउनुहोस्" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 36,
    question: {
      english: "What is the meaning of a red traffic light?",
      nepali: "रातो ट्राफिक बत्तीको अर्थ के हो?",
    },
    options: [
      { id: 1, english: "Stop", nepali: "रोक्नुहोस्" },
      {
        id: 2,
        english: "Proceed with caution",
        nepali: "सावधानीपूर्वक अगाडि बढ्नुहोस्",
      },
      { id: 3, english: "Go", nepali: "जानुहोस्" },
      { id: 4, english: "Slow down", nepali: "गति घटाउनुहोस्" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 37,
    question: {
      english:
        "What should you do if you see a school bus with flashing lights?",
      nepali:
        "यदि तपाईंले बत्ति बलिरहेको स्कूल बस देख्नुभयो भने के गर्नुहुन्छ?",
    },
    options: [
      {
        id: 1,
        english: "Slow down and pass",
        nepali: "गति घटाउनुहोस् र अगाडि बढ्नुहोस्",
      },
      {
        id: 2,
        english: "Stop and wait until the lights stop flashing",
        nepali: "रोक्नुहोस् र बत्ति नबलेसम्म पर्खनुहोस्",
      },
      {
        id: 3,
        english: "Speed up and pass",
        nepali: "गति बढाउनुहोस् र अगाडि बढ्नुहोस्",
      },
      { id: 4, english: "Ignore it", nepali: "बेवास्ता गर्नुहोस्" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 38,
    question: {
      english: "What should you do when you hear a siren behind you?",
      nepali: "तपाईंको पछाडि सायरन बजेको सुन्नुभयो भने के गर्नुहुन्छ?",
    },
    options: [
      { id: 1, english: "Increase your speed", nepali: "गति बढाउनुहोस्" },
      {
        id: 2,
        english: "Stop the vehicle immediately",
        nepali: "तुरुन्त गाडी रोक्नुहोस्",
      },
      {
        id: 3,
        english: "Pull over to the side",
        nepali: "साइडमा गाडी रोक्नुहोस्",
      },
      {
        id: 4,
        english: "Ignore the siren",
        nepali: "सायरनलाई बेवास्ता गर्नुहोस्",
      },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 39,
    question: {
      english: "What does a pedestrian crossing signal mean?",
      nepali: "पैदल यात्री क्रसिङ संकेतको अर्थ के हो?",
    },
    options: [
      {
        id: 1,
        english: "Pedestrians can cross",
        nepali: "पैदल यात्री बाटो काट्न सक्छन्",
      },
      { id: 2, english: "Vehicles must stop", nepali: "गाडी रोक्नुपर्छ" },
      {
        id: 3,
        english: "Pedestrians should stop",
        nepali: "पैदल यात्री रोक्नुपर्छ",
      },
      {
        id: 4,
        english: "Both pedestrians and vehicles can proceed",
        nepali: "दुबै, पैदल यात्री र गाडी अगाडि बढ्न सक्छन्",
      },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 40,
    question: {
      english: "What is the purpose of road signs?",
      nepali: "सडक संकेतहरूको उद्देश्य के हो?",
    },
    options: [
      { id: 1, english: "To provide information", nepali: "जानकारी दिन" },
      { id: 2, english: "To ensure safety", nepali: "सुरक्षा सुनिश्चित गर्न" },
      {
        id: 3,
        english: "To regulate traffic",
        nepali: "यातायातलाई नियमित गर्न",
      },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 41,
    question: {
      english: "What is the purpose of a vehicle's headlights?",
      nepali: "गाडीको हेडलाइटको उद्देश्य के हो?",
    },
    options: [
      {
        id: 1,
        english: "To signal to other drivers",
        nepali: "अन्य चालकलाई संकेत दिन",
      },
      {
        id: 2,
        english: "To improve visibility at night",
        nepali: "रातको समयमा दृश्यता सुधार गर्न",
      },
      { id: 3, english: "To decorate the vehicle", nepali: "गाडी सजाउन" },
      { id: 4, english: "None of the above", nepali: "माथिका कुनै पनि होइन" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 42,
    question: {
      english: "How can you reduce fuel consumption while driving?",
      nepali: "गाडी चलाउँदा इन्धनको खपत कसरी घटाउन सकिन्छ?",
    },
    options: [
      {
        id: 1,
        english: "By driving at a steady speed",
        nepali: "नियत गतिमा चलाएर",
      },
      {
        id: 2,
        english: "By accelerating frequently",
        nepali: "धेरै एक्सिलेरेट गरेर",
      },
      { id: 3, english: "By driving fast", nepali: "छिटो गाडी चलाएर" },
      { id: 4, english: "By braking frequently", nepali: "धेरै ब्रेक लगाएर" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 43,
    question: {
      english: "Which vehicles require third-party insurance?",
      nepali: "कुन गाडीहरूमा तेस्रो पक्ष बीमा अनिवार्य छ?",
    },
    options: [
      { id: 1, english: "Private cars", nepali: "निजी गाडीहरू" },
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
  {
    id: 44,
    question: {
      english: "What should you check before every trip?",
      nepali: "प्रत्येक यात्रा अघि के जाँच गर्नुपर्छ?",
    },
    options: [
      { id: 1, english: "Fuel", nepali: "इन्धन" },
      { id: 2, english: "Brakes", nepali: "ब्रेक" },
      { id: 3, english: "Tire pressure", nepali: "टायरको हावा" },
      { id: 4, english: "All of the above", nepali: "माथिका सबै" },
    ],
    correctAnswerId: 4,
    image: "",
  },
  {
    id: 45,
    question: {
      english: "What is the meaning of a broken white line on the road?",
      nepali: "सडकमा टुटेको सेतो रेखाको अर्थ के हो?",
    },
    options: [
      {
        id: 1,
        english: "You can change lanes",
        nepali: "तपाईं लेन परिवर्तन गर्न सक्नुहुन्छ",
      },
      { id: 2, english: "You must stop", nepali: "तपाईं रोक्नुपर्छ" },
      {
        id: 3,
        english: "You cannot overtake",
        nepali: "तपाईं ओभरटेक गर्न सक्नुहुन्न",
      },
      { id: 4, english: "None of the above", nepali: "माथिका कुनै पनि होइन" },
    ],
    correctAnswerId: 1,
    image: "",
  },
  {
    id: 46,
    question: {
      english: "Which safety gear is mandatory while riding a motorcycle?",
      nepali: "मोटरसाइकल चलाउँदा कुन सुरक्षात्मक उपकरण अनिवार्य छ?",
    },
    options: [
      { id: 1, english: "Gloves", nepali: "पञ्जा" },
      { id: 2, english: "Helmet", nepali: "हेलमेट" },
      { id: 3, english: "Jacket", nepali: "ज्याकेट" },
      { id: 4, english: "Boots", nepali: "बुट" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 47,
    question: {
      english: "When should you use hazard lights?",
      nepali: "तपाईंले कहिले इमर्जेन्सी लाइट प्रयोग गर्नुहुन्छ?",
    },
    options: [
      { id: 1, english: "During normal driving", nepali: "साधारण चलाउँदा" },
      { id: 2, english: "When parking", nepali: "गाडी पार्क गर्दा" },
      { id: 3, english: "In case of emergencies", nepali: "आपतकालिन अवस्थामा" },
      { id: 4, english: "When reversing", nepali: "गाडी पछाडि हँुदा" },
    ],
    correctAnswerId: 3,
    image: "",
  },
  {
    id: 48,
    question: {
      english: "How often should you check your vehicle's tire pressure?",
      nepali: "तपाईंले आफ्नो गाडीको टायरको हावा कति पटक जाँच गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Once a month", nepali: "महिनामा एक पटक" },
      { id: 2, english: "Every trip", nepali: "प्रत्येक यात्रा अघि" },
      { id: 3, english: "Once a year", nepali: "वर्षमा एक पटक" },
      { id: 4, english: "Never", nepali: "कहिल्यै होइन" },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 49,
    question: {
      english: "Which is the correct hand signal for turning right?",
      nepali: "दायाँ मोड्ने सही हात संकेत कुन हो?",
    },
    options: [
      {
        id: 1,
        english: "Hand extended outward",
        nepali: "हात बाहिरतिर फैलाउनु",
      },
      { id: 2, english: "Hand raised upwards", nepali: "हात माथितिर उठाउनु" },
      {
        id: 3,
        english: "Hand pointing downward",
        nepali: "हात तलतिर संकेत गर्नु",
      },
      {
        id: 4,
        english: "No hand signal needed",
        nepali: "कुनै हात संकेत आवश्यक छैन",
      },
    ],
    correctAnswerId: 2,
    image: "",
  },
  {
    id: 50,
    question: {
      english: "What should you do if a tire bursts while driving?",
      nepali: "गाडी चलाउँदै गर्दा टायर फुट्यो भने के गर्नु पर्छ?",
    },
    options: [
      { id: 1, english: "Stop immediately", nepali: "तुरुन्त रोक्नुहोस्" },
      { id: 2, english: "Drive faster", nepali: "गति बढाउनुहोस्" },
      {
        id: 3,
        english: "Steer gently and slow down",
        nepali: "बिस्तारै स्टेरिङ समात्नुहोस् र गति घटाउनुहोस्",
      },
      { id: 4, english: "Honk continuously", nepali: "लगातार हर्न बजाउनुहोस्" },
    ],
    correctAnswerId: 3,
    image: "",
  },
];
