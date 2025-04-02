import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { JSX } from 'react';

const pdfStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#2563eb',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#4b5563',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 12,
    marginLeft: 15,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ResumePDF = ({ theme }: { theme: string }): JSX.Element => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.title}>Helina Belete</Text>
        <Text style={pdfStyles.text}>Software Engineer</Text>
        <Text style={pdfStyles.text}>helina@example.com</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subtitle}>Experience</Text>
        <Text style={pdfStyles.text}>Software Engineer at Company X (2022-Present)</Text>
        <Text style={pdfStyles.bullet}>• Led development of key features using React and TypeScript</Text>
        <Text style={pdfStyles.bullet}>• Improved application performance by 40%</Text>
        <Text style={pdfStyles.bullet}>• Mentored junior developers and conducted code reviews</Text>

        <Text style={pdfStyles.text}>Software Developer at Company Y (2020-2022)</Text>
        <Text style={pdfStyles.bullet}>• Developed and maintained multiple web applications</Text>
        <Text style={pdfStyles.bullet}>• Implemented responsive designs and accessibility features</Text>
        <Text style={pdfStyles.bullet}>• Collaborated with cross-functional teams</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subtitle}>Education</Text>
        <Text style={pdfStyles.text}>Bachelor of Science in Computer Science</Text>
        <Text style={pdfStyles.text}>University of XYZ (2016-2020)</Text>
        <Text style={pdfStyles.bullet}>• GPA: 3.8/4.0</Text>
        <Text style={pdfStyles.bullet}>• Relevant Coursework: Data Structures, Algorithms, Web Development</Text>
        <Text style={pdfStyles.bullet}>• Dean&apos;s List: All Semesters</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subtitle}>Skills</Text>
        <Text style={pdfStyles.text}>Frontend: React, Angular, TypeScript, Next.js</Text>
        <Text style={pdfStyles.text}>Backend: Node.js, Express, Python</Text>
        <Text style={pdfStyles.text}>Database: MongoDB, PostgreSQL</Text>
        <Text style={pdfStyles.text}>Tools: Git, Docker, AWS</Text>
        <Text style={pdfStyles.text}>Soft Skills: Leadership, Communication, Problem Solving</Text>
      </View>
    </Page>
  </Document>
);

export async function POST(request: Request) {
  try {
    const { theme } = await request.json();
    const stream = await renderToStream(<ResumePDF theme={theme} />);

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      if (typeof chunk === 'string') {
        chunks.push(new TextEncoder().encode(chunk)); // Convert string to Uint8Array
      } else if (Buffer.isBuffer(chunk)) {
        chunks.push(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength)); // Convert Buffer to Uint8Array
      } else {
        chunks.push(chunk);
      }
    }


    const pdfBuffer = Buffer.concat(chunks);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=helina-belete-resume.pdf',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
} 