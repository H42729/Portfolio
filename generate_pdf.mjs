import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({ margin: 40 });
const outputPath = path.resolve('public/resume.pdf');

// Ensure public dir exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

doc.pipe(fs.createWriteStream(outputPath));

// Primary Colors
const primaryColor = '#172033';
const accentColor = '#6C5CE7';
const textColor = '#334155';

// Title Header
doc.fillColor(primaryColor).fontSize(24).font('Helvetica-Bold').text('VIMAL KUMAR S', { align: 'center' });
doc.moveDown(0.2);

// Contact Line
doc.fillColor(textColor).fontSize(9.5).font('Helvetica')
   .text('+91 6374122883  |  vimalkumars2504@gmail.com  |  linkedin.com/in/vimal-kumar-s-2842b929  |  github.com/H42729/Ecommerce.git', { align: 'center' });
doc.moveDown(0.8);

// Horizontal Line
doc.strokeColor('#E2E8F0').lineWidth(1).moveTo(40, doc.y).lineTo(570, doc.y).stroke();
doc.moveDown(0.8);

// Helper Section Header
function sectionHeader(title) {
  doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text(title.toUpperCase());
  doc.strokeColor(accentColor).lineWidth(1.5).moveTo(40, doc.y + 2).lineTo(570, doc.y + 2).stroke();
  doc.moveDown(0.6);
}

// CAREER OBJECTIVE
sectionHeader('Career Objective');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica')
   .text('Motivated MCA fresher with a strong foundation in MERN stack and Java, eager to build scalable web applications. Seeking an entry-level software developer role to apply problem-solving skills, contribute to real-world projects, and continuously learn and grow.', { lineGap: 3 });
doc.moveDown(1.2);

// EDUCATION
sectionHeader('Education');

function eduItem(college, degree, dates, location, cgpa) {
  const y = doc.y;
  doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text(college, 40, y);
  doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text(dates, 470, y, { align: 'right' });

  doc.fillColor(textColor).fontSize(9.5).font('Helvetica-Oblique').text(`${degree} ${cgpa ? `(${cgpa})` : ''}`, 40);
  doc.fillColor(textColor).fontSize(9).font('Helvetica').text(location, 470, doc.y - 11, { align: 'right' });
  doc.moveDown(0.6);
}

eduItem('PSNA College of Engineering and Technology', 'Master of Computer Applications', '2025 – 2027', 'Tamil Nadu', 'CGPA: 8.38 / 10, up to Semester 2');
eduItem('NPR Arts and Science College', 'Bachelor of Computer Applications', '2022 – 2025', 'Tamil Nadu', 'CGPA: 6.97 / 10');
eduItem('SSM Matric Higher Secondary School', 'Higher Secondary', '2022', 'Tamil Nadu', '80.66%');
eduItem('SSM Matric Higher Secondary School', 'SSLC', '2020', 'Tamil Nadu', '65.8%');
doc.moveDown(0.8);

// TECHNICAL SKILLS
sectionHeader('Technical Skills');
const skills = [
  ['Programming Languages:', 'Python, JavaScript, Java'],
  ['Frontend Technologies:', 'HTML, CSS, JavaScript'],
  ['Libraries & Frameworks:', 'React.js, Bootstrap'],
  ['Backend Technologies:', 'Node.js, Express.js'],
  ['Database:', 'MongoDB'],
  ['Tools:', 'Git, GitHub']
];

skills.forEach(([label, val]) => {
  doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text(label, { continued: true });
  doc.fillColor(textColor).font('Helvetica').text(` ${val}`);
});
doc.moveDown(1.2);

// PROJECTS
sectionHeader('Projects');
doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('E-Commerce Web Application');
doc.moveDown(0.3);

const projectBullets = [
  'Technologies Used: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB',
  'Built a full-stack web application with secure user authentication using JWT.',
  'Designed a responsive UI using React and Bootstrap.',
  'Developed RESTful APIs using Node.js and Express.js.',
  'Implemented MongoDB for product and user data management.',
  'Implemented features including add to cart, login/signup, and product listing.'
];

projectBullets.forEach((bullet) => {
  doc.fillColor(textColor).fontSize(9).font('Helvetica').text(`•  ${bullet}`, { indent: 10, lineGap: 2 });
});
doc.moveDown(1.2);

// ACHIEVEMENTS & CERTIFICATIONS
sectionHeader('Achievements & Certifications');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica')
   .text('•  Secured 2nd Prize in Project Expo at The American College for developing an E-Commerce Application.')
   .text('•  Certified MERN Stack Developer – IDM Tech Park');
doc.moveDown(1.2);

// SOFT SKILLS
sectionHeader('Soft Skills');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica')
   .text('Problem Solving   |   Quick Learner   |   Team Collaboration   |   Adaptability');

doc.end();
console.log('PDF Generated Successfully at ' + outputPath);
