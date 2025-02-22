import { Section, Container } from "@/components/layouts/Layouts"
import { H2 } from "@/components/text/H2"

function ScheduleContent() {
  return (
    <Section className="min-h-screen w-full bg-stone-50">
        <Container className="w-full h-full pt-14 pb-24">
            <div className="w-full h-full max-w-5xl mx-auto">
                <H2>Schedule</H2>
            </div>
        </Container>
    </Section>
  )
}

export default ScheduleContent