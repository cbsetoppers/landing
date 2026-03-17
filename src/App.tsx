import React, { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Box, 
  Container, 
  Typography, 
  Button, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Grid,
  Card,
  CardContent,
  Avatar,
  useScrollTrigger,
  Slide,
  Chip,
  Divider,
  Stack
} from '@mui/material';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { LegalPolicies } from './components/LegalPolicies';
import { LegalPage } from './components/LegalPage';
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  Users, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Star, 
  CheckCircle2,
  ArrowRight,
  School,
  Microscope,
  Calculator,
  Globe,
  Send as Telegram,
  Mail as Email,
  Sparkles,
  Zap,
  Brain,
  Layout,
  Target,
  TrendingUp,
  Palette,
  Heart,
  Clock,
  Smartphone,
  Bot
} from 'lucide-react';

// Custom Purple Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed', // Purple
    },
    secondary: {
      main: '#4c1d95', // Deep Purple
    },
    success: {
      main: '#10b981', // Emerald/Green
    },
    background: {
      default: '#FFFFFF',
      paper: '#f5f3ff', // Light Purple
    },
    text: {
      primary: '#1e1b4b',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 900,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '12px 28px',
          fontSize: '1rem',
        },
      },
    },
  },
});

const subunits = [
  {
    id: 'ix',
    title: 'IXth T0PPERS',
    description: 'Building a strong foundation for your future academic success.',
    telegram: '@CBSET0PPERS_IXth',
    icon: School,
    color: '#a78bfa', // Light Violet
    stats: 'Foundation Prep'
  },
  {
    id: 'x',
    title: 'Xth T0PPERS',
    description: 'Founded by a Class Xth T0PPER. Strategy and resources to ace your first major milestone.',
    telegram: '@CBSET0PPERS_XTH',
    icon: School,
    color: '#8b5cf6', // Violet
    stats: 'Founder\'s Expertise'
  },
  {
    id: 'xi',
    title: 'XIth T0PPERS',
    description: 'Kickstart your journey to higher studies with structured resources.',
    telegram: '@CBSET0PPERS_XIth',
    icon: BookOpen,
    color: '#c4b5fd', // Light Purple
    stats: 'Early Prep'
  },
  {
    id: 'xii',
    title: 'XIIth T0PPERS',
    description: 'Our flagship community of 360+ students. Get the best-in-class study material for Boards.',
    telegram: '@CBSET0PPERS',
    icon: BookOpen,
    color: '#7c3aed', // Purple
    stats: '360+ Active Students'
  },
  {
    id: 'jee',
    title: 'JEE T0PPERS',
    description: 'Engineering excellence. Bringing high-quality material to help you crack IIT-JEE.',
    telegram: '@JEE_T0PPERS',
    icon: Calculator,
    color: '#6366f1', // Indigo
    stats: 'New Launch'
  },
  {
    id: 'neet',
    title: 'NEET T0PPERS',
    description: 'Medical aspirants initiative. Focused resources and curated content for NEET.',
    telegram: '@NEET_T0PPERS',
    icon: Microscope,
    color: '#a855f7', // Purple
    stats: 'New Launch'
  },
  {
    id: 'cuet',
    title: 'CUET T0PPERS',
    description: 'Precision prep for top central universities. Best material for the new landscape.',
    telegram: '@CUET_T0PPERS',
    icon: Globe,
    color: '#4f46e5', // Deep Indigo
    stats: 'New Launch'
  }
];

const features = [
  {
    title: 'Expert Strategy',
    description: 'Learn from a Class Xth Topper who knows the exact blueprint for success.',
    icon: <Users />
  },
  {
    title: 'Free Resources',
    description: 'Access premium study materials without any financial burden.',
    icon: <Star />
  },
  {
    title: 'Proven Success',
    description: '360+ students in our XIIth community are already reaping the benefits.',
    icon: <CheckCircle2 />
  }
];

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);
const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 37,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: 37 days from March 14, 2026
    const targetDate = new Date('2026-04-20T16:39:37Z').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: <Bot />, title: 'T0PPER TUTOR', desc: 'Your personal mentor' },
    { icon: <Zap />, title: 'TEST GEN', desc: 'Custom tests in seconds' },
    { icon: <Brain />, title: 'ANALYZER', desc: 'Deep performance insights' },
    { icon: <Trophy />, title: 'MOCK TESTS', desc: 'Real exam environment' },
    { icon: <BookOpen />, title: 'STUDY MATERIAL', desc: 'Premium notes & guides' },
    { icon: <Smartphone />, title: 'LECTURES*', desc: 'Interactive video sessions' },
    { icon: <Layout />, title: 'SYLLABUS', desc: 'Never miss a topic' },
    { icon: <Clock />, title: 'EXAM TRACKER', desc: 'Stay ahead of deadlines' },
    { icon: <Target />, title: 'EXAM STRATEGY', desc: 'Personalized study plans' },
    { icon: <Palette />, title: 'SMART THEMES', desc: 'Mood-based UI switching' },
    { icon: <Heart />, title: 'DAILY MOTIVATION', desc: 'Daily inspiration' },
    { icon: <TrendingUp />, title: 'STATE BOARDS', desc: 'Specialized support' },
  ];

  return (
    <Box id="app-launch" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'primary.main', color: 'white', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative Background */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
        <Grid container spacing={0} sx={{ height: '100%' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <Grid size={{ xs: 3 }} key={i} sx={{ border: '1px solid white', height: '25%' }} />
          ))}
        </Grid>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, lg: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{ textAlign: 'center' }}
            >
              <Chip 
                label="COMING SOON" 
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main', 
                  fontWeight: 900, 
                  px: 2, 
                  mb: 3,
                  fontSize: '0.8rem',
                  letterSpacing: 1
                }} 
              />
              <Typography variant="h2" sx={{ color: 'white', mb: 2, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}>
                The Future of Learning is <Box component="span" sx={{ opacity: 0.7 }}>Mobile.</Box>
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 6, fontWeight: 400, lineHeight: 1.8, fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
                We're building the most advanced educational app for JEE, NEET, CUET, and State Boards. Get ready to transform your preparation.
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {Object.entries(timeLeft).map(([unit, value], idx) => (
                  <Grid size={{ xs: 3, sm: 2 }} key={unit}>
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      sx={{ 
                        bgcolor: 'rgba(255,255,255,0.08)', 
                        p: { xs: 1.5, md: 2 }, 
                        borderRadius: 1, 
                        textAlign: 'center',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      <Typography variant="h3" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2.5rem' }, fontWeight: 900 }}>
                        {value.toString().padStart(2, '0')}
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, opacity: 0.5, textTransform: 'uppercase', fontSize: '0.6rem' }}>
                        {unit}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Features Grid - More Arranged */}
        <Box sx={{ mt: 12 }}>
          <Grid container spacing={2}>
            {features.map((feature, idx) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={idx}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  sx={{ 
                    p: 2, 
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.03)', 
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 1.5,
                    border: '1px solid rgba(255,255,255,0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.07)',
                      transform: 'translateY(-5px)',
                      borderColor: 'rgba(255,255,255,0.2)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <Box sx={{ 
                    color: 'white', 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    width: 44, 
                    height: 44, 
                    borderRadius: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 22 })}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 0.5, color: 'white', display: 'block', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.4, fontWeight: 500, lineHeight: 1.2, display: 'block', fontSize: '0.65rem' }}>
                      {feature.desc}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity
  }
};

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);
  const [policy, setPolicy] = useState<'privacy' | 'terms' | 'refund'>('privacy');
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'refund' | 'delivery'>('home');
  const currentYear = new Date().getFullYear();

  const getPolicyData = (policy: 'privacy' | 'terms' | 'refund' | 'delivery') => {
    switch (policy) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          paragraphs: [
            'Effective Date: March 2025',
            'Platform: T0PPERS 24/7 Website & App',
            'Sub-Units: CBSE T0PPERS (IX, X, XI, XII) | CUET T0PPERS | NEET T0PPERS | JEE T0PPERS',
            '1. INTRODUCTION: T0PPERS 24/7 ("we", "our", "us") is committed to protecting the privacy and personal data of all users who access our website and the T0PPERS 24/7 App. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform and its sub-units: CBSE T0PPERS (Classes IX, X, XI, XII), CUET T0PPERS, NEET T0PPERS, and JEE T0PPERS. By using our website, app, or purchasing any study material from the T0PPERS STORE, you agree to the terms of this Privacy Policy.',
            '2. INFORMATION WE COLLECT:',
            '2.1 Personal Information: When you register or make a purchase on our platform, we may collect: Full name; Email address (used for sending purchased study material PDFs and receipts); Phone number; Billing address and payment information (processed securely through payment gateways); Class/Grade and target examination (CBSE, CUET, NEET, JEE, etc.).',
            '2.2 Usage Data: We automatically collect certain information when you use our platform: Device type, browser type, and operating system; IP address and approximate location; Pages visited, features used, and time spent on the platform; Login timestamps and session duration within the T0PPERS 24/7 App.',
            '2.3 Study Material Access Data: When you purchase study material from the T0PPERS STORE, we record: Materials purchased and transaction history; PDF access and download activity within the T0PPERS 24/7 App; Email address used for delivery of PDFs and receipts.',
            '3. HOW WE USE YOUR INFORMATION: We use the information collected for the following purposes: To deliver purchased study material PDFs and purchase receipts to your registered or provided email address; To provide access to purchased PDFs within the T0PPERS 24/7 App; To manage your account and process transactions; To send important updates, notifications, and announcements related to your enrolled sub-unit; To improve our platform, content, and user experience; To respond to support queries and grievances; To comply with applicable legal and regulatory obligations.',
            '4. HOW WE SHARE YOUR INFORMATION: We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances: With payment gateway providers (such as Razorpay, Paytm, etc.) solely for the purpose of processing your transactions securely; With email service providers (such as Zoho Mail) for delivering your purchased PDFs and receipts; With legal authorities if required by applicable law, court order, or government regulation; With service providers who assist in operating our platform, bound by confidentiality obligations.',
            '5. DATA STORAGE & SECURITY: We take appropriate technical and organisational measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. These measures include: Encrypted data transmission (SSL/TLS); Secure servers and databases; Restricted access to personal data on a need-to-know basis. While we implement stringent security practices, no method of electronic transmission or storage is 100% secure. We encourage users to use strong passwords and keep their login credentials confidential.',
            '6. PDF DELIVERY & ACCESS: Upon successful purchase from the T0PPERS STORE: The purchased PDF study material and a purchase receipt will be sent to the email address provided at the time of purchase or your registered email address on file. Access to the purchased PDF will also be granted within the T0PPERS 24/7 App under your account. We are not responsible for non-delivery of emails due to incorrect email addresses provided by the user or emails being filtered by spam/junk folders.',
            '7. COOKIES: Our website may use cookies to enhance your browsing experience. Cookies help us understand how you interact with our platform and allow us to remember your preferences. You may disable cookies through your browser settings; however, this may affect certain features of our website.',
            '8. CHILDREN\'S PRIVACY: T0PPERS 24/7 provides educational content primarily for students in Classes IX through XII and those preparing for CUET, NEET, and JEE examinations. Users below the age of 13 must obtain consent from a parent or legal guardian before using our platform or making any purchases.',
            '9. YOUR RIGHTS: You have the right to: Access and review the personal data we hold about you; Request correction of inaccurate or outdated data; Request deletion of your personal data, subject to legal and contractual obligations; Withdraw consent for marketing communications at any time. To exercise any of these rights, please contact our support team: cbsetoppers@zohomail.in; tarun.in@zohomail.in; luckychawla@zohomail.in; WhatsApp: +919568902453',
            '10. CHANGES TO THIS POLICY: We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage users to review this policy periodically.',
            '11. CONTACT US: For any questions, concerns, or requests related to this Privacy Policy, please reach out to the T0PPERS 24/7 support team: cbsetoppers@zohomail.in; tarun.in@zohomail.in; luckychawla@zohomail.in; WhatsApp: +919568902453. Support Hours: Monday to Saturday, 9:00 AM - 6:00 PM IST',
            `© ${currentYear} T0PPERS 24/7 | All Rights Reserved`
          ]
        };
      case 'terms':
        return {
          title: 'Terms & Conditions',
          paragraphs: [
            'Effective Date: March 2025',
            'Platform: T0PPERS 24/7 Website & App',
            'Sub-Units: CBSE T0PPERS (IX, X, XI, XII) | CUET T0PPERS | NEET T0PPERS | JEE T0PPERS',
            '1. ACCEPTANCE OF TERMS: By accessing or using the T0PPERS 24/7 website, the T0PPERS 24/7 App, or purchasing any study material from the T0PPERS STORE, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please discontinue use of our platform immediately. These Terms apply to all sub-units under T0PPERS 24/7, including CBSE T0PPERS (Classes IX, X, XI, XII), CUET T0PPERS, NEET T0PPERS, and JEE T0PPERS.',
            '2. PLATFORM DESCRIPTION: T0PPERS 24/7 is an educational platform providing digital study materials, resources, and content to students preparing for CBSE board examinations (Classes IX-XII), CUET, NEET, and JEE. Study materials are available for purchase through the T0PPERS STORE and are delivered in PDF format to your registered or provided email, with in-app access via the T0PPERS 24/7 App.',
            '3. USER ELIGIBILITY & REGISTRATION: You must be at least 13 years of age to use this platform. Users below 18 should use the platform under parental or guardian supervision. You agree to provide accurate, complete, and up-to-date information during registration and at the time of purchase. You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorised use of your account.',
            '4. STUDY MATERIAL & INTELLECTUAL PROPERTY:',
            '4.1 Ownership: All study materials, PDFs, notes, question papers, mock tests, and content available on T0PPERS 24/7 are the exclusive intellectual property of T0PPERS 24/7 or its licensors. These are protected under applicable copyright and intellectual property laws.',
            '4.2 Permitted Use: Purchased study materials are licensed for personal, non-commercial educational use only. You may access, read, and download PDFs for your own study purposes.',
            '4.3 Prohibited Use: You must not reproduce, redistribute, resell, sublicense, share, upload, or transmit any purchased study material to any third party in any form. You must not use any content for commercial purposes, coaching institutes, or bulk distribution. Unauthorised sharing or piracy of purchased PDFs may result in immediate account suspension and legal action.',
            '5. PURCHASE & PAYMENT: All purchases made on the T0PPERS STORE are subject to the listed price at the time of purchase. Prices are inclusive of applicable taxes unless stated otherwise. Payments must be made through the secure payment options available on our platform. T0PPERS 24/7 does not store credit/debit card information on its servers. Upon successful payment, the purchased PDF study material and receipt will be sent to your registered or provided email address, and access will be activated inside the T0PPERS 24/7 App.',
            '6. PDF DELIVERY & APP ACCESS: Once a purchase is confirmed: The PDF study material and purchase receipt will be delivered to the email address provided during checkout or your registered account email. In-app access to the purchased PDF will be granted within the T0PPERS 24/7 App under your account.',
            'T0PPERS 24/7 is not liable for non-receipt of emails due to incorrect email addresses, full inboxes, or emails classified as spam. Please contact our support team if you do not receive your material within the expected timeframe.',
            '7. USER CONDUCT: You agree not to: Use the platform for any unlawful, fraudulent, or harmful purpose; Impersonate any person or entity; Upload or transmit viruses, malware, or any harmful code; Attempt to gain unauthorised access to any part of our platform or servers; Interfere with or disrupt the integrity or performance of our platform.',
            '8. DISCLAIMERS: T0PPERS 24/7 provides study materials and resources for educational assistance. While we strive for accuracy and quality, we do not guarantee specific academic results or examination outcomes. Our content is prepared to align with CBSE, CUET, NEET, and JEE syllabi, but we are not affiliated with, endorsed by, or officially connected to the CBSE Board, NTA, or any other examination body.',
            '9. LIMITATION OF LIABILITY: To the fullest extent permitted by applicable law, T0PPERS 24/7 shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the platform or study materials. Our total liability in any matter shall not exceed the amount paid by you for the specific purchase giving rise to the claim.',
            '10. ACCOUNT TERMINATION: We reserve the right to suspend or terminate your account, without prior notice, if we determine that you have violated these Terms & Conditions. In such cases, access to purchased materials within the app may be revoked without refund.',
            '11. GOVERNING LAW: These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Dehradun, Uttarakhand, India.',
            '12. AMENDMENTS: T0PPERS 24/7 reserves the right to modify these Terms & Conditions at any time. Continued use of the platform after any changes constitutes your acceptance of the revised terms.',
            '13. CONTACT US: For any queries regarding these Terms & Conditions, please contact our support team: cbsetoppers@zohomail.in; tarun.in@zohomail.in; luckychawla@zohomail.in; WhatsApp: +919568902453. Support Hours: Monday to Saturday, 9:00 AM - 6:00 PM IST',
            `© ${currentYear} T0PPERS 24/7 | All Rights Reserved`
          ]
        };
      case 'refund':
        return {
          title: 'Cancellation & Refund Policy',
          paragraphs: [
            'Effective Date: March 2025',
            'Platform: T0PPERS 24/7 Website & App',
            'Sub-Units: CBSE T0PPERS (IX, X, XI, XII) | CUET T0PPERS | NEET T0PPERS | JEE T0PPERS',
            '1. OVERVIEW: At T0PPERS 24/7, we are committed to delivering high-quality digital study materials through the T0PPERS STORE. Since all our products are digital (PDF study materials) and are delivered instantly upon successful payment, we maintain a specific policy regarding cancellations and refunds as outlined below.',
            '2. NATURE OF PRODUCTS: All products sold through the T0PPERS STORE are: Digital study material in PDF format; Instantly delivered to your registered or provided email address upon successful payment; Simultaneously made accessible within your account on the T0PPERS 24/7 App. Given the digital and instant-access nature of these products, please read this policy carefully before making a purchase.',
            '3. CANCELLATION POLICY:',
            '3.1 Before Payment: You may cancel your order at any time before completing the payment. Once the payment is successfully processed, the order is considered confirmed and the digital content is delivered.',
            '3.2 After Payment: Once a purchase has been confirmed and the PDF study material has been delivered to your email and/or access has been activated in the T0PPERS 24/7 App, cancellation of the order is not possible. This is because digital content, once delivered and accessed, cannot be "returned" in the same manner as a physical product.',
            '4. REFUND POLICY:',
            '4.1 Non-Refundable Purchases: The following situations are NOT eligible for a refund: The PDF study material has been delivered to your email address; Access to the study material has been activated in the T0PPERS 24/7 App; The material was purchased by mistake for the wrong class, subject, or examination; Dissatisfaction with the content after accessing it; Slow internet speed causing issues with viewing or downloading the PDF; Accidental or duplicate purchases (however, please contact support immediately — see Section 4.2).',
            '4.2 Eligible Refund Scenarios: A refund or replacement may be considered in the following exceptional circumstances: The PDF file delivered is corrupted, unreadable, or empty; You were charged but did not receive the PDF via email AND the material is not accessible inside the T0PPERS 24/7 App; You were charged multiple times for the same product due to a technical error. In these cases, please contact our support team within 48 hours of the transaction with relevant details.',
            '5. REFUND PROCESSING: If a refund is approved, it will be processed as follows: Refunds will be credited back to the original payment method (bank account, UPI, card, etc.); Processing time: 5 to 7 business days from the date of approval; You will receive an email confirmation once the refund has been initiated. T0PPERS 24/7 reserves the right to make the final decision on all refund requests.',
            '6. DUPLICATE PURCHASE: If you have accidentally made a duplicate purchase for the same study material, please contact our support team immediately. We will investigate and, if confirmed, issue a refund for the duplicate transaction.',
            '7. CONTACT FOR CANCELLATION & REFUND QUERIES: To raise a cancellation or refund request, or for any related queries, please contact: cbsetoppers@zohomail.in; tarun.in@zohomail.in; luckychawla@zohomail.in; WhatsApp: +919568902453. Support Hours: Monday to Saturday, 9:00 AM - 6:00 PM IST',
            `© ${currentYear} T0PPERS 24/7 | All Rights Reserved`
          ]
        };
      case 'delivery':
        return {
          title: 'Delivery Policy',
          paragraphs: [
            'Effective Date: March 2025',
            'Platform: T0PPERS 24/7 Website & App',
            'Sub-Units: CBSE T0PPERS (IX, X, XI, XII) | CUET T0PPERS | NEET T0PPERS | JEE T0PPERS',
            '1. INTRODUCTION: This Delivery Policy governs the process by which T0PPERS 24/7 delivers purchased study materials to customers who buy from the T0PPERS STORE. All study materials offered through our platform are in digital PDF format and are delivered electronically. There is no physical/courier delivery of any materials.',
            '2. MODE OF DELIVERY:',
            '2.1 Email Delivery: Upon successful payment, the purchased PDF study material will be sent to the email address provided at the time of checkout. If no separate email is provided during checkout, the material will be sent to your registered account email address. A purchase receipt/invoice will also be sent to the same email address.',
            '2.2 In-App Access (T0PPERS 24/7 App): Access to the purchased PDF will be activated inside your account on the T0PPERS 24/7 App. You can view, read, and access your purchased study materials at any time through the App after logging in with your registered credentials.',
            '3. DELIVERY TIMELINE: Delivery of study materials is instant and automated upon payment confirmation: Email delivery: Within a few minutes of successful payment; In-app access: Activated immediately or within a maximum of 30 minutes of successful payment. If you do not receive the PDF email within 30 minutes of purchase, please check your spam/junk folder before contacting support.',
            '4. WHAT YOU WILL RECEIVE: After a successful purchase, you will receive: 1 x PDF Study Material (as purchased) — sent to your email and accessible in the T0PPERS 24/7 App; 1 x Purchase Receipt/Invoice — sent to your email.',
            '5. EMAIL DELIVERY ISSUES:',
            '5.1 Non-Receipt of Email: If you do not receive your study material PDF via email, please: Check your spam or junk mail folder; Verify that the email address provided during checkout is correct; Check if your inbox is full; Wait up to 30 minutes from the time of purchase before raising a concern.',
            '5.2 Incorrect Email Provided: If you provided an incorrect email address at the time of purchase, please contact our support team immediately with your order ID and the correct email address. We will re-send the PDF to the correct address, provided the purchase is verified.',
            '6. IN-APP ACCESS ISSUES: If your purchased PDF does not appear inside the T0PPERS 24/7 App after 30 minutes: Log out and log back in to refresh your account; Ensure you are logged in with the same account used for the purchase; Check your internet connection; If the issue persists, contact our support team with your order details.',
            '7. SUPPORTED DEVICES & FORMATS: Study material PDFs are compatible with: T0PPERS 24/7 App (available on Android and iOS); Any PDF reader application on mobile or desktop; Email clients on mobile and desktop devices.',
            '8. RE-DELIVERY POLICY: Re-delivery of study material PDFs will be provided free of charge in the following cases: The original PDF email was not received due to a platform-side error; The in-app access was not activated due to a technical issue on our end; The PDF file delivered was corrupted or unreadable. Re-delivery requests will NOT be entertained for PDFs that have already been successfully delivered and accessed, or requests made after 7 days.',
            '9. PURCHASED MATERIAL VALIDITY: Access to purchased study materials in the T0PPERS 24/7 App is provided for the duration of your active account. However, access may be revoked in the event of violation of the Terms & Conditions, account deletion, or suspension due to misuse.',
            '10. SHARING RESTRICTIONS: Purchased PDFs are for personal, individual use only. Forwarding, sharing, uploading, or distributing the study material to any third party — whether for free or for a fee — is strictly prohibited and may result in legal action.',
            '11. CONTACT FOR DELIVERY SUPPORT: For any issues related to delivery of your study material, please reach out to our support team: cbsetoppers@zohomail.in; tarun.in@zohomail.in; luckychawla@zohomail.in; WhatsApp: +919568902453. Support Hours: Monday to Saturday, 9:00 AM - 6:00 PM IST',
            '12. CHANGES TO THIS POLICY: T0PPERS 24/7 reserves the right to amend this Delivery Policy at any time. Updates will be posted on the website with a revised effective date.',
            `© ${currentYear} T0PPERS 24/7 | All Rights Reserved`
          ]
        };
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {currentPage !== 'home' ? (
        <LegalPage 
          title={getPolicyData(currentPage as 'privacy' | 'terms' | 'refund' | 'delivery').title}
          paragraphs={getPolicyData(currentPage as 'privacy' | 'terms' | 'refund' | 'delivery').paragraphs}
          onBack={() => setCurrentPage('home')}
        />
      ) : (
        <Box sx={{ flexGrow: 1, overflowX: 'hidden', position: 'relative' }}>
        
        {/* Scroll Progress Bar */}
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(to right, #7c3aed, #4c1d95, #10b981)',
            transformOrigin: '0%',
            zIndex: 2000
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Navigation */}
        <HideOnScroll>
          <AppBar 
            position="fixed" 
            elevation={0} 
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
              color: 'primary.main'
            }}
          >
            <Container maxWidth="lg">
              <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
                <Box 
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Avatar 
                    src="./cbsetoppers_original.png" 
                    alt="T0PPERS 24/7 Logo"
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)',
                      bgcolor: 'white'
                    }}
                  >
                    <GraduationCap color="#7c3aed" />
                  </Avatar>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 900, letterSpacing: -1, fontSize: '1.5rem' }}>
                    T0PPERS <Box component="span" sx={{ color: 'secondary.main' }}>24/7</Box>
                  </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
                  {['Subunits', 'Mission', 'Community'].map((item) => (
                    <Typography 
                      key={item} 
                      variant="body2" 
                      component={motion.p}
                      whileHover={{ y: -2, color: '#7c3aed' }}
                      sx={{ 
                        fontWeight: 800, 
                        cursor: 'pointer', 
                        color: 'text.primary',
                        transition: 'color 0.2s',
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem'
                      }}
                      onClick={() => {
                        const el = document.getElementById(item.toLowerCase());
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                  <Button 
                    variant="contained" 
                    color="primary" 
                    disableElevation
                    component={motion.a}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{ px: 4, py: 1.2, fontWeight: 800, color: 'white' }}
                    startIcon={<Telegram size={18} />}
                    href="https://t.me/CBSET0PPERS"
                    target="_blank"
                  >
                    Join Free
                  </Button>
                </Box>

                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: '100%', maxWidth: 320 } }}
        >
          <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
              <Typography variant="h6" sx={{ fontWeight: 900 }}>MENU</Typography>
              <IconButton onClick={handleDrawerToggle} sx={{ bgcolor: 'rgba(0,0,0,0.05)' }}><X /></IconButton>
            </Box>
            <List sx={{ mb: 'auto' }}>
              {['Subunits', 'Mission', 'Community'].map((text) => (
                <ListItem 
                  key={text} 
                  onClick={handleDrawerToggle} 
                  sx={{ py: 2.5, px: 0, borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                  component={motion.li}
                  whileTap={{ x: 10 }}
                >
                  <ListItemText 
                    primary={text} 
                    primaryTypographyProps={{ fontWeight: 900, variant: 'h4', letterSpacing: -1 }} 
                    onClick={() => {
                      const el = document.getElementById(text.toLowerCase());
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                  <ChevronRight size={24} opacity={0.3} />
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 4 }}>
              <Button 
                fullWidth 
                variant="contained" 
                color="success" 
                size="large" 
                sx={{ py: 2, fontWeight: 900, borderRadius: 1 }}
                href="https://t.me/CBSET0PPERS"
                target="_blank"
                startIcon={<Telegram />}
              >
                Join Telegram Free
              </Button>
              <Typography variant="caption" align="center" display="block" sx={{ mt: 2, opacity: 0.5, fontWeight: 700 }}>
                360+ Students Already Joined
              </Typography>
            </Box>
          </Box>
        </Drawer>

        {/* Hero Section */}
        <Box 
          sx={{ 
            pt: { xs: 18, md: 22 }, 
            pb: { xs: 6, md: 10 }, 
            position: 'relative',
            background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(76, 29, 149, 0.05) 100%)',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Background Elements */}
          <MotionBox
            animate={floatingAnimation}
            sx={{
              position: 'absolute',
              top: '15%',
              left: '5%',
              width: 120,
              height: 120,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'rgba(124, 58, 237, 0.1)',
              filter: 'blur(40px)',
              zIndex: 0
            }}
          />
          <MotionBox
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              transition: { duration: 5, repeat: Infinity }
            }}
            sx={{
              position: 'absolute',
              bottom: '15%',
              right: '5%',
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'rgba(76, 29, 149, 0.1)',
              filter: 'blur(50px)',
              zIndex: 0
            }}
          />

          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              <Grid size={{ xs: 12, md: 10 }}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
                >
                  <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Chip 
                      icon={<Trophy size={16} color="#7c3aed" />} 
                      label="The Ultimate T0PPER'S Community" 
                      sx={{ 
                        mb: 4, 
                        bgcolor: 'rgba(124, 58, 237, 0.1)', 
                        color: 'primary.main', 
                        fontWeight: 900,
                        px: 2,
                        py: 2.5,
                        fontSize: '0.8rem',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: 1.5
                      }} 
                    />
                  </MotionBox>
                  
                  <MotionTypography 
                    variant="h1" 
                    sx={{ 
                      fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' }, 
                      mb: 4,
                      lineHeight: 1,
                      letterSpacing: -2,
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Premium Content.<br />Zero Cost.
                  </MotionTypography>
                  
                  <MotionTypography 
                    variant="h5" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 8, 
                      fontWeight: 500, 
                      lineHeight: 1.8, 
                      maxWidth: 800, 
                      mx: 'auto',
                      fontSize: { xs: '1.1rem', md: '1.4rem' }
                    }}
                  >
                    Democratizing education with high-quality resources curated by toppers. 
                    Join <Box component="span" sx={{ color: 'primary.main', fontWeight: 900, borderBottom: '3px solid #7c3aed' }}>360+ students</Box> who are already transforming their academic journey.
                  </MotionTypography>
                  
                  <MotionStack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={3} 
                    justifyContent="center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        endIcon={<ArrowRight />}
                        sx={{ 
                          py: 2.5, 
                          px: 8, 
                          fontSize: '1.2rem', 
                          fontWeight: 900,
                          borderRadius: 1,
                          boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)'
                        }}
                        href="https://t.me/CBSET0PPERS"
                        target="_blank"
                      >
                        Join Free Now
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        size="large"
                        sx={{ 
                          py: 2.5, 
                          px: 8, 
                          fontSize: '1.2rem', 
                          fontWeight: 900, 
                          borderWidth: 2, 
                          borderRadius: 1,
                          '&:hover': { borderWidth: 2, backgroundColor: 'rgba(124, 58, 237, 0.05)' } 
                        }}
                        onClick={() => document.getElementById('subunits')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Explore Subunits
                      </Button>
                    </motion.div>
                  </MotionStack>
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Subunits Grid */}
        <Box id="subunits" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 3, md: 4 }, bgcolor: '#FDFDFD' }}>
          <Container maxWidth="lg">
            <MotionBox 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              sx={{ textAlign: 'center', mb: 12 }}
            >
              <MotionTypography 
                variants={itemVariants}
                variant="h2" 
                gutterBottom 
                sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: -1.5 }}
              >
                Specialized Subunits
              </MotionTypography>
              <MotionTypography 
                variants={itemVariants}
                variant="h6" 
                color="text.secondary" 
                sx={{ maxWidth: 800, mx: 'auto', fontWeight: 400, fontSize: '1.2rem' }}
              >
                Tailored resources for every major academic milestone. 
                Choose your path and join our growing community of achievers.
              </MotionTypography>
            </MotionBox>

            <Grid container spacing={4}>
              {subunits.map((unit, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={unit.id}>
                  <MotionCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -15, 
                      boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                      borderColor: unit.color 
                    }}
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      borderRadius: 1,
                      border: '2px solid rgba(124, 58, 237, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {/* Card Accent */}
                    <Box sx={{ height: 6, width: '100%', bgcolor: unit.color }} />
                    
                    <CardContent sx={{ p: 5, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: `${unit.color}15`, 
                            color: unit.color, 
                            width: 64, 
                            height: 64, 
                            borderRadius: 1,
                            boxShadow: `0 8px 20px ${unit.color}20`
                          }}
                        >
                          <unit.icon size={32} />
                        </Avatar>
                        <Chip 
                          label={unit.stats} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'success.main', 
                            color: 'white', 
                            fontWeight: 900, 
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: 0.5
                          }} 
                        />
                      </Box>
                      
                      <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, letterSpacing: -0.5 }}>
                        {unit.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7, minHeight: 80 }}>
                        {unit.description}
                      </Typography>
                      
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1, 
                          mb: 4, 
                          p: 1.5, 
                          bgcolor: 'rgba(124, 58, 237, 0.03)', 
                          borderRadius: 1,
                          border: '1px dashed rgba(124, 58, 237, 0.1)'
                        }}
                      >
                        <Telegram size={18} color="#7c3aed" />
                        <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                          {unit.telegram}
                        </Typography>
                      </Box>
                      
                      <Button 
                        fullWidth
                        variant="outlined" 
                        color="primary"
                        endIcon={<ChevronRight size={18} />} 
                        sx={{ 
                          fontWeight: 900, 
                          py: 1.5, 
                          borderRadius: 1,
                          borderWidth: 2,
                          '&:hover': { borderWidth: 2, bgcolor: 'primary.main', color: 'white' }
                        }}
                        href={`https://t.me/${unit.telegram.replace('@', '')}`}
                        target="_blank"
                      >
                        Join Channel
                      </Button>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Divider sx={{ borderColor: 'rgba(124, 58, 237, 0.08)', mx: 'auto', maxWidth: 'lg' }} />

        {/* Mission Section */}
        <Box id="mission" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 6, md: 10 }, overflow: 'hidden' }}>
          <Container maxWidth="lg">
            <Grid container spacing={10} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <MotionBox
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 3 }}>
                    OUR PHILOSOPHY
                  </Typography>
                  <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: -1.5, mt: 2 }}>
                    Education for <Box component="span" sx={{ color: 'primary.main' }}>Impact</Box>, Not Profit.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 6, lineHeight: 1.8, fontWeight: 400, fontSize: '1.1rem' }}>
                    We're breaking the barriers of traditional coaching. Our platform is built on the belief that quality resources should be accessible to every student, regardless of their background.
                  </Typography>
                  
                  <Stack spacing={4}>
                    {features.map((feature, idx) => (
                      <MotionBox 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        sx={{ display: 'flex', gap: 3 }}
                      >
                        <Avatar sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white', 
                          width: 48, 
                          height: 48,
                          boxShadow: '0 8px 20px rgba(124, 58, 237, 0.2)'
                        }}>
                          {feature.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>{feature.title}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.description}</Typography>
                        </Box>
                      </MotionBox>
                    ))}
                  </Stack>
                </MotionBox>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <MotionBox
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  sx={{ position: 'relative' }}
                >
                  <Box 
                    sx={{ 
                      p: { xs: 4, md: 8 }, 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      borderRadius: 1, 
                      boxShadow: '0 40px 80px rgba(124, 58, 237, 0.2)',
                      position: 'relative',
                      zIndex: 1,
                      overflow: 'hidden'
                    }}
                  >
                    {/* Decorative Pattern */}
                    <Box sx={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', opacity: 0.05, background: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '20px 20px' }} />
                    
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 900, color: 'white' }}>The Difference</Typography>
                    <Typography variant="body1" sx={{ mb: 5, opacity: 0.8, fontWeight: 400, lineHeight: 1.7 }}>
                      We don't just provide notes; we provide a roadmap. Every resource is vetted by those who have already conquered the exams.
                    </Typography>
                    
                    <Stack spacing={2.5}>
                      {[
                        '100% Free Premium Material', 
                        'Direct Access to Toppers', 
                        'Active Telegram Support', 
                        'Regular Strategy Updates'
                      ].map((item) => (
                        <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar sx={{ width: 24, height: 24, bgcolor: 'rgba(255,255,255,0.2)' }}>
                            <CheckCircle2 size={14} color="white" />
                          </Avatar>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }}>{item}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    
                    <Button 
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ 
                        mt: 6, 
                        py: 2, 
                        fontWeight: 900, 
                        fontSize: '1rem', 
                        color: 'primary.main', 
                        bgcolor: 'white', 
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } 
                      }}
                      href="https://t.me/CBSET0PPERS"
                      target="_blank"
                    >
                      Join The Revolution
                    </Button>
                  </Box>
                  
                  {/* Background Glow */}
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', bgcolor: 'primary.main', opacity: 0.1, filter: 'blur(100px)', zIndex: 0 }} />
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box id="community" sx={{ py: 6, bgcolor: 'primary.main', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} justifyContent="center">
              {[
                { label: 'Active Students', value: '360+', color: 'white' },
                { label: 'Quality Material', value: 'FREE', color: 'white' },
                { label: 'Success Rate', value: '100%', color: 'white' }
              ].map((stat, idx) => (
                <Grid size={{ xs: 12, sm: 4 }} key={idx} sx={{ textAlign: 'center' }}>
                  <MotionBox
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, type: 'spring' }}
                  >
                    <Typography variant="h1" sx={{ color: stat.color, fontWeight: 900, fontSize: { xs: '3.5rem', md: '5rem' }, letterSpacing: -2 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 2, opacity: 0.6, textTransform: 'uppercase' }}>
                      {stat.label}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Founder's Story */}
        <Box sx={{ py: { xs: 4, md: 8 }, position: 'relative' }}>
          <Container maxWidth="lg">
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              sx={{ 
                bgcolor: 'white', 
                p: { xs: 4, md: 6 }, 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
                position: 'relative',
                zIndex: 1
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Avatar 
                  sx={{ 
                    width: { xs: 120, md: 180 }, 
                    height: { xs: 120, md: 180 }, 
                    bgcolor: 'primary.main',
                    border: '6px solid #7c3aed',
                    boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)'
                  }}
                >
                  <Trophy size={80} color="#FFFFFF" />
                </Avatar>
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 5, 
                    right: 5, 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    p: 1.5, 
                    borderRadius: '50%',
                    boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)'
                  }}
                >
                  <Star fill="white" size={20} />
                </Box>
              </Box>
              
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 4 }}>
                  THE FOUNDER'S VISION
                </Typography>
                <Typography variant="h2" gutterBottom sx={{ mt: 1, letterSpacing: -1.5, fontWeight: 900, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                  Built by a T0PPER,<br />For the T0PPERS.
                </Typography>
                <Box sx={{ position: 'relative', mt: 1 }}>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 2, fontWeight: 400, lineHeight: 1.6, fontSize: '1rem', position: 'relative', zIndex: 1 }}>
                    "As a Class Xth T0PPER, I realized that academic success is a mix of right strategy and quality resources. I started by sharing my notes on Telegram, and today, seeing 360+ students thrive is my greatest reward. <Box component="span" sx={{ color: 'primary.main', fontWeight: 800 }}>My commitment is to keep this journey accessible and free for every dreamer out there.</Box>"
                  </Typography>
                </Box>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{ width: 40, height: 4, bgcolor: 'primary.main', borderRadius: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1, fontSize: '1.1rem' }}>Founder</Typography>
                    <Typography variant="subtitle2" sx={{ opacity: 0.6, fontWeight: 700, fontSize: '0.8rem' }}>T0PPERS 24/7 Initiative</Typography>
                  </Box>
                </Stack>
              </Box>
            </MotionBox>
          </Container>
          
          {/* Background Decoration */}
          <Box sx={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '40%', bgcolor: 'rgba(124, 58, 237, 0.02)', zIndex: 0, transform: 'skewY(-3deg)' }} />
        </Box>

        <CountdownSection />
        {/* Footer */}
        <Box sx={{ pt: 6, pb: 6, bgcolor: 'background.paper', borderTop: '1px solid rgba(124, 58, 237, 0.1)' }}>
          <Container maxWidth="lg">
            <Grid container spacing={8} sx={{ mb: 5 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Avatar 
                    src="./cbsetoppers_original.png" 
                    alt="T0PPERS 24/7 Logo"
                    sx={{ width: 56, height: 56, bgcolor: 'white' }}
                  >
                    <GraduationCap size={28} color="#7c3aed" />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -1 }}>
                    T0PPERS <Box component="span" sx={{ color: 'secondary.main' }}>24/7</Box>
                  </Typography>
                </Box>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 450, fontWeight: 400, lineHeight: 1.6, fontSize: '1rem' }}>
                  Empowering the next generation of Indian TOPPERS with premium, accessible, and free educational content. 
                </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 6 }}>
                    {[Telegram, Globe, Email].map((Icon, i) => (
                      <IconButton key={i} sx={{ bgcolor: 'rgba(124, 58, 237, 0.05)', color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                        <Icon size={20} />
                      </IconButton>
                    ))}
                  </Stack>
              </Grid>
              
              <Grid size={{ xs: 6, md: 3.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 4 }}>Subunits</Typography>
                <Stack spacing={2}>
                  {['IXth', 'Xth', 'XIth', 'XIIth', 'JEE', 'NEET', 'CUET'].map(item => (
                    <Typography key={item} variant="body1" color="text.secondary" sx={{ cursor: 'pointer', fontWeight: 600, '&:hover': { color: 'secondary.main', x: 5 }, transition: 'all 0.2s' }}>
                      {item} T0PPERS
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              
              <Grid size={{ xs: 6, md: 3.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 4 }}>Contact Us</Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Email size={20} color="#7c3aed" />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 800 }}>Email Support</Typography>
                      <Typography variant="body2" color="text.secondary">cbsetoppers@zohomail.in</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Telegram size={20} color="#7c3aed" />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 800 }}>Telegram Channel</Typography>
                      <Typography variant="body2" color="text.secondary">@CBSET0PPERS</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            
            <Divider sx={{ mb: 6, opacity: 0.5 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                © {new Date().getFullYear()} T0PPERS 24/7. Crafted for Excellence.
              </Typography>
              <Stack direction="row" spacing={5}>
                <Typography onClick={() => setCurrentPage('privacy')} variant="body2" sx={{ fontWeight: 800, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Privacy</Typography>
                <Typography onClick={() => setCurrentPage('terms')} variant="body2" sx={{ fontWeight: 800, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Terms</Typography>
                <Typography onClick={() => setCurrentPage('refund')} variant="body2" sx={{ fontWeight: 800, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Refund</Typography>
                <Typography onClick={() => setCurrentPage('delivery')} variant="body2" sx={{ fontWeight: 800, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Delivery</Typography>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    )}
    </ThemeProvider>
  );
}
