import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Button, CssBaseline, Container,
  Box, Avatar, Grid, createTheme, ThemeProvider, Paper, Tabs, Tab,
  Drawer, List, ListItem,
  ListItemText, Divider, useMediaQuery, Dialog, DialogContent,
   Card
} from '@mui/material';
import {
  LightMode, DarkMode, LinkedIn, GitHub, Email, Launch,
  Menu as MenuIcon, Close as CloseIcon, Download as DownloadIcon
} from '@mui/icons-material';
import i1 from './image1.png';
import i2 from './image2.png';
import i3 from './image3.png';
import i4 from './image4.jpg';
import pic from './Bhawesh pic.jpg';
import cv from './bhawesh_cv.pdf';
import c1 from './certificate1.jpeg';
import c2 from './certificate2.jpeg';
import c3 from './certificate3.jpeg';
const techIcons = {
  html: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
  css: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  js: 'https://cdn-icons-png.flaticon.com/512/919/919828.png',
  react: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
  java: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  nodejs: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
  mongodb: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
  sql: 'https://cdn-icons-png.flaticon.com/512/136/136525.png',
};

const certificatesData = {
  academic: [
    { title: 'BCA Topper – 8.4 CGPA'},
    { title: 'Class 12 – 91.4% (CBSE)'},
    { title: 'Class 10 – 91% (ICSE)'},
  ],
  technical: [
    { title: 'Mern Full Stack Developer – PrepCode', img: c1 },
    { title: 'Java Development – Analyze Infotech', img: c2 },
    { title: 'SQL– IIT Bombay', img: c3 },
  ]
};

const projectsData = [
  {
    title: 'Portfolio Website',
    image: i1,
    tech: ['React', 'Github'],
    github: 'https://github.com/Techy-BhaweshPandey/bhawesh_about',
    live: 'https://github.com/Techy-BhaweshPandey/bhawesh_about'
  },
   {
    title: 'ParkMate',
    image: i3,
    tech: ['React', 'Mongodb', 'Nodejs' ,'Express.js'],
    github: 'https://github.com/Techy-BhaweshPandey/parkmate_frontend',
    live: 'https://parknestle.netlify.app/',
  },
   {
    title: 'Simple Navbar',
    image: i2,
    tech: ['HTML','CSS','JS'],
    github: 'https://github.com/Techy-BhaweshPandey/Navbar1',
    live: 'https://techy-bhaweshpandey.github.io/Navbar1/',
  },
   {
    title: 'Attendance Automation System',
    image:i4,
    tech: ['HTML','CSS','JS','JAVA','JSP'],
    github: 'https://github.com/Techy-BhaweshPandey/Attendance-System',
    live:'https://github.com/Techy-BhaweshPandey/Attendance-System',
  },
  // Add more projects similarly
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [certDialogOpen, setCertDialogOpen] = useState(false);
  const [certDialogImg, setCertDialogImg] = useState('');
 
  const isMobile = useMediaQuery('(max-width:600px)');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#4a148c' },
      secondary: { main: '#f50057' },
      text: {
        primary: darkMode ? '#fff' : '#000',
        secondary: darkMode ? '#ddd' : '#333',
      },
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });

  const handleTabChange = (e, newVal) => setTab(newVal);
  const openCertDialog = (img) => { setCertDialogImg(img); setCertDialogOpen(true); };
  const closeCertDialog = () => setCertDialogOpen(false);


  const NavbarButtons = (
    <>
      <Button href="#intro" sx={{ color: 'inherit' }}>Home</Button>
      <Button href="#certificates" sx={{ color: 'inherit' }}>Certificates</Button>
      <Button href="#techskills" sx={{ color: 'inherit' }}>Tech Skills</Button>
      <Button href="#projects" sx={{ color: 'inherit' }}>Projects</Button>
      <Button href="#contact" sx={{ color: 'inherit' }}>Contact</Button>
      <Button href="#tools" sx={{ color: 'inherit' }}>Tools</Button>

    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar position="sticky" color={darkMode ? 'primary' : 'default'} elevation={3}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit" sx={{ fontWeight: 'bold' }}>
            🌐 MyPortfolio
          </Typography>
          {!isMobile ? (
            <>
              <Box sx={{ display: 'flex', gap: 2 }}>{NavbarButtons}</Box>
              <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit" aria-label="toggle theme">
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </>
          ) : (
            <>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="open drawer">
                <MenuIcon />
              </IconButton>
              <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  PaperProps={{
    sx: {
      bgcolor: theme.palette.background.default,
    },
  }}
>
  <Box
    sx={{
      width: 250,
      // Removed padding here to avoid background gaps
      color: theme.palette.text.primary,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 2 }}>
      <Typography variant="h6">Menu</Typography>
      <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: theme.palette.text.primary }}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Divider />
    <List sx={{ flexGrow: 1, p: 2 }}>
      {['Home', 'Certificates', 'Tech Skills', 'Projects', 'Tools','Contact'].map((text) => (
        <ListItem
          button
          key={text}
          component="a"
          href={`#${text.toLowerCase().replace(' ', '')}`}
          onClick={() => setDrawerOpen(false)}
          sx={{ color: theme.palette.text.primary }}
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="subtitle1" mb={1}>Toggle Theme</Typography>
      <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit" aria-label="toggle theme">
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Box>
  </Box>
</Drawer>

            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Intro Section */}
      <Container id="intro" sx={{ py: 10, textAlign: 'center' }}>
        <Avatar src={pic} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hi, I’m [BHAWESH PANDEY]
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          BCA Graduate | MCA Fresher specializing in Data Science from <strong>NIT Patna</strong>. Passionate about building intelligent, scalable web solutions. I strive for excellence and innovation — aspiring to contribute meaningfully at top tech companies.
        </Typography>
      </Container>

      {/* Certificates Section */}
      <Container id="certificates" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="secondary" fontWeight="bold" gutterBottom>🎖️ Certificates & Achievements</Typography>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 4 }}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Academic" />
          <Tab label="Technical" />
        </Tabs>
        <Grid container spacing={4} justifyContent="center">
  {(tab === 0 ? certificatesData.academic : certificatesData.technical).map(({ title, img }, i) => (
    <Grid key={i} item xs={12} sm={6} md={4}>
      <Paper
        onClick={() => img && openCertDialog(img)} // only open dialog if img exists
        sx={{
          cursor: img ? 'pointer' : 'default',
          p: 2,
          boxShadow: 5,
          borderRadius: 2,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': img && {
            boxShadow: 10,
            transform: 'scale(1.05)',
          },
        }}
        elevation={3}
      >
        {/* Only render image if it exists */}
        {img && (
          <img
            src={img}
            alt={title}
            style={{ width: '100%', borderRadius: 8, marginBottom: 8 }}
          />
        )}
        <Typography variant="body1" fontWeight="bold">{title}</Typography>
      </Paper>
    </Grid>
  ))}
</Grid>


        <Dialog open={certDialogOpen} onClose={closeCertDialog} maxWidth="md" fullWidth>
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={closeCertDialog}
              sx={{ position: 'absolute', top: 8, right: 8, color: 'white', bgcolor: 'rgba(0,0,0,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <DialogContent sx={{ p: 0 }}>
              <img src={certDialogImg} alt="Certificate" style={{ width: '100%', borderRadius: 4 }} />
            </DialogContent>
          </Box>
        </Dialog>
      </Container>

      {/* Tech Skills Section */}
      <Container id="techskills" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="secondary" fontWeight="bold" gutterBottom>🛠️ Tech Skills</Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 800, mx: 'auto' }}>
          {Object.entries(techIcons).map(([tech, iconUrl]) => (
            <Grid item xs={3} sm={2} key={tech}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'default',
                }}
                title={tech.toUpperCase()}
              >
                <img
                  src={iconUrl}
                  alt={tech}
                  style={{ width: 50, height: 50, objectFit: 'contain' }}
                />
                <Typography variant="caption" sx={{ fontWeight: 'medium' }}>{tech.toUpperCase()}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Projects Section */}
      <Container id="projects" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="secondary" fontWeight="bold" gutterBottom>🚀 Projects</Typography>
        <Grid container spacing={4} justifyContent="center">
          {projectsData.map(({ title, image, tech, github, live }, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  '&:hover': { boxShadow: 12, transform: 'scale(1.03)', transition: 'all 0.3s ease-in-out' },
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
                <Typography variant="h6" fontWeight="bold">{title}</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {tech.map((t, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: 12,
                        fontWeight: 'medium',
                      }}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center', gap: 3 }}>
                  <IconButton
                    component="a"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label={`${title} GitHub`}
                    size="large"
                  >
                    <GitHub fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    aria-label={`${title} Live Demo`}
                    size="large"
                  >
                    <Launch fontSize="inherit" />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
{/* Tools Section */}
<Container id="tools" sx={{ py: 8, textAlign: 'center' }}>
  <Typography variant="h4" color="secondary" fontWeight="bold" gutterBottom>🧰 Tools I Use</Typography>
  <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 800, mx: 'auto' }}>
    {[
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
     
      { name: 'Netlify', icon: 'https://cdn.worldvectorlogo.com/logos/netlify.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ].map(({ name, icon }) => (
      <Grid item xs={4} sm={3} md={2} key={name}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            cursor: 'default',
          }}
          title={name}
        >
          <img
            src={icon}
            alt={name}
            style={{ width: 50, height: 50, objectFit: 'contain' }}
          />
          <Typography variant="caption" sx={{ fontWeight: 'medium' }}>{name}</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>

      {/* Contact Section */}
<Container id="contact" sx={{ py: 8, textAlign: 'center', maxWidth: 600 }}>
  <Typography variant="h4" color="secondary" fontWeight="bold" gutterBottom>
    📬 Contact Me
  </Typography>
  <Card
    elevation={8}
    sx={{
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center',
    }}
  >
    <Typography variant="h5" fontWeight="bold">
      Bhawesh Pandey
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      Full Stack Developer
    </Typography>

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Email color="secondary" />
        <a href="mailto:bhaweshpandey2004@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
          bhaweshpandey2004@gmail.com
        </a>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GitHub color="secondary" />
        <a
          href="https://github.com/Techy-BhaweshPandey"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          github.com/bhaweshpandey
        </a>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LinkedIn color="secondary" />
        <a
          href="https://www.linkedin.com/in/bhawesh-pandey-8b64b9303"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          linkedin.com/in/bhawesh
        </a>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          📍 Lucknow, India
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          📞 +91 63881 34278
        </Typography>
      </Box>
    </Box>

    <Button
      variant="contained"
      color="secondary"
      startIcon={<DownloadIcon />}
      href={cv}
      download
      sx={{ mt: 3, fontWeight: 'bold' }}
    >
      Download CV
    </Button>
  </Card>
</Container>


      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'primary.main', py: 3, mt: 8, textAlign: 'center', color: 'white' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} BHAWESH. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
