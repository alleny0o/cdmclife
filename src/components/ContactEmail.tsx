import { Html, Body, Container, Text, Img, Heading } from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export default function ContactEmail({ name, email, message, subject }: ContactEmailProps) {
  return (
    <Html>
      <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <Container
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "24px",
            maxWidth: "500px",
            margin: "0 auto",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <Img
            src="https://cdmclife.org/open-graph/cdmc-opengraph.png"
            alt="CDMC Logo"
            width="270"
            style={{ margin: "0 auto 20px", display: "block" }}
          />
          <Heading as="h2" style={{ fontSize: "20px", marginBottom: "20px" }}>
            {subject}
          </Heading>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={{ marginTop: "12px" }}>
            <strong>Message:</strong>
          </Text>
          <Text style={{ whiteSpace: "pre-line" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
