"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CarIcon,
  BikeIcon,
  ImageIcon,
  ClipboardListIcon,
  TimerIcon,
  AwardIcon,
} from "lucide-react";
import Nav from "@/components/home/Nav";
import Link from "next/link";

export default function Component() {
  const tests = {
    car: [
      {
        id: "car1",
        name: "Car Test 1",
        description: "General knowledge test for cars",
        questions: 25,
        images: 3,
        time: 30,
        difficulty: "Easy",
        link: "/",
      },
      {
        id: "car2",
        name: "Car Test 2",
        description: "Advanced rules and regulations for car driving",
        questions: 25,
        images: 3,
        time: 30,
        difficulty: "Medium",
      },
      {
        id: "car3",
        name: "Car Test 3",
        description:
          "Situational awareness and decision making for car drivers",
        questions: 25,
        images: 3,
        time: 30,
        difficulty: "Hard",
      },
      {
        id: "carImages",
        name: "Car Image Test",
        description: "Practice with image-based questions for car driving",
        questions: 25,
        images: 25,
        time: 35,
        difficulty: "Mixed",
      },
    ],
    bike: [
      {
        id: "bike1",
        name: "Bike Test 1",
        description: "Basic knowledge test for motorcycles",
        questions: 25,
        images: 3,
        time: 30,
        difficulty: "Easy",
      },
      {
        id: "bike2",
        name: "Bike Test 2",
        description: "Traffic rules and safety for motorcycle riders",
        questions: 25,
        images: 3,
        time: 30,
        difficulty: "Medium",
      },
      {
        id: "bike3",
        name: "Bike Test 3",
        description: "Advanced motorcycle handling and road strategies",
        questions: 25,
        images: 3,
        time: 30,
        difficulty: "Hard",
      },
      {
        id: "bikeImages",
        name: "Bike Image Test",
        description:
          "Practice with image-based questions for motorcycle riding",
        questions: 25,
        images: 25,
        time: 35,
        difficulty: "Mixed",
      },
    ],
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "Hard":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  const TestCard = ({ test }) => (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader
        className={`min-h-24 ${test.id.includes("Images") ? "" : ""} pb-2`}
      >
        <CardTitle className="flex items-center space-x-2 text-lg">
          {test.id.includes("Images") ? (
            <ImageIcon className="w-5 h-5 text-purple-600" />
          ) : (
            <ClipboardListIcon className="w-5 h-5 text-blue-600" />
          )}
          <span>{test.name}</span>
        </CardTitle>
        <CardDescription>{test.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center space-x-1">
            <ClipboardListIcon className="w-3 h-3" />
            <span>{test.questions} questions</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <ImageIcon className="w-3 h-3" />
            <span>{test.images} images</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <TimerIcon className="w-3 h-3" />
            <span>{test.time} min</span>
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <AwardIcon className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium">Difficulty:</span>
          <Badge
            className={`${getDifficultyColor(test.difficulty)} text-white`}
          >
            {test.difficulty}
          </Badge>
        </div>
      </CardContent>
      <Link href={"/"}>
        <CardFooter className="bg-gray-50">
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
            Start Test
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col items-center py-24 transition-all justify-center flex-1">
        <div className="w-3/5 m-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Select Your Path: The Test Awaits!
          </h1>
          <Tabs defaultValue="car" className="w-full ">
            <TabsList className="grid h-fit border  shadow-lg w-full max-w-md mx-auto grid-cols-2 gap-2 p-2 mb-8">
              <TabsTrigger
                value="car"
                className="flex items-center hover:shadow-md  space-x-2 py-3"
              >
                <CarIcon className="w-5 h-5" />
                <span>Car Tests</span>
              </TabsTrigger>
              <TabsTrigger
                value="bike"
                className="flex items-center space-x-2 py-3"
              >
                <BikeIcon className="w-5 h-5" />
                <span>Bike Tests</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="car">
              <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
                {tests.car.map((test) => (
                  <TestCard key={test.id} test={test} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bike">
              <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
                {tests.bike.map((test) => (
                  <TestCard key={test.id} test={test} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
