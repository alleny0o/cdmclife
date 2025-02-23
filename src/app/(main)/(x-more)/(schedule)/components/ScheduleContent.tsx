import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";

function ScheduleContent() {
  return (
    <Section className="min-h-screen w-full bg-stone-50 flex justify-center">
      <Container className="pt-14 pb-24">
        <div className="w-full max-w-5xl mx-auto">
        <div className="w-full">
          <H2 className="text-left">Schedule</H2>
        </div>
        <div className="w-full mt-8 lg:mt-10 overflow-hidden rounded-lg shadow-lg">
          <div className="relative" style={{ paddingTop: "75%" }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_8185cb9b03f7dcd368d4bcc260e41bffd9ee75310e4330a7aa2dd219a69dbe79%40group.calendar.google.com&ctz=America%2FNew_York"
              className="absolute top-0 left-0 w-full h-full border-none"
            ></iframe>
          </div>
        </div>
        </div>
      </Container>
    </Section>
  );
}

export default ScheduleContent;
