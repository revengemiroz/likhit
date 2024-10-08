/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Nu5p0KeZcjC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component({ answer, lowScore }) {
  const isColorBlind = lowScore;
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">
            Color Blindness Test Results
          </h1>
          <p className="mt-4 text-muted-foreground">
            {isColorBlind
              ? "Congratulations on completing our color blindness test! Here are your results:"
              : "You do not have any color blindness."}
          </p>
        </div>
        {isColorBlind && (
          <div className="bg-card rounded-lg p-6 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {lowScore ? "Protanopia" : "Congratulations"}
                </h2>
                <p className="mt-2 text-muted-foreground">{answer}</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-red-500 to-green-500 opacity-50" />
              </div>
            </div>
          </div>
        )}
        {isColorBlind && (
          <div className="bg-card rounded-lg p-6 shadow">
            <h2 className="text-2xl font-bold text-foreground">
              Tips and Resources
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Adjusting to Color Blindness
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Here are some tips to help you adjust to living with color
                  blindness:
                </p>
                <ul className="mt-2 list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Learn to identify colors by their brightness and saturation
                  </li>
                  <li>
                    Use color-coding apps and tools to help you differentiate
                    colors
                  </li>
                  <li>
                    Communicate your color blindness to friends, family, and
                    coworkers
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Resources
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Here are some helpful resources for living with color
                  blindness:
                </p>
                <ul className="mt-2 list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <Link
                      href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness"
                      className="underline"
                      target="_blank"
                      prefetch={false}
                    >
                      Color Blindness Information and Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.colourblindawareness.org/"
                      className="underline"
                      target="_blank"
                      prefetch={false}
                    >
                      Colour Blind Awareness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://enchroma.com/"
                      className="underline"
                      target="_blank"
                      prefetch={false}
                    >
                      EnChroma Color Blindness Glasses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {!isColorBlind && (
          <div className="bg-card rounded-lg p-6 shadow">
            <h2 className="text-2xl font-bold text-foreground">
              No Color Blindness
            </h2>
            <p className="mt-4 text-muted-foreground">
              Congratulations, your test results indicate that you do not have
              any color blindness.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
