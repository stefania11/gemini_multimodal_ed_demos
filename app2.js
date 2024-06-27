import React, { useState, useRef, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Tooltip,
  Heading,
  Flex,
  useToast,
  HStack,
  extendTheme,
  ColorModeScript,
  useColorMode,
} from '@chakra-ui/react';
import Webcam from 'react-webcam';
import { GoogleGenerativeAI } from '@google/generative-ai';

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#f0f8ff',
      100: '#ccebff',
      200: '#a0d4ff',
      300: '#70c0ff',
      400: '#38b0ff',
      500: '#00a0ff',
      600: '#0080ff',
      700: '#0060ff',
      800: '#0040ff',
      900: '#0020ff',
    },
    secondary: {
      50: '#f0f8ff',
      100: '#ccebff',
      200: '#a0d4ff',
      300: '#70c0ff',
      400: '#38b0ff',
      500: '#00a0ff',
      600: '#0080ff',
      700: '#0060ff',
      800: '#0040ff',
      900: '#0020ff',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'primary.50',
        color: 'gray.800',
      },
    },
  },
});

function App() {
  const [ocrResult, setOcrResult] = useState('');
  const [feedback, setFeedback] = useState('');
  const [webcamReady, setWebcamReady] = useState(false);
  const webcamRef = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log("Webcam ready state updated:", webcamReady);
  }, [webcamReady]);

  const handleWebcamReady = () => {
    console.log("Webcam is ready.");
    setWebcamReady((prevState) => {
      const newState = true;
      console.log("Webcam ready state after update:", newState);
      return newState;
    });
  };

  useEffect(() => {
    const handleOcr = async () => {
      if (!webcamReady || !webcamRef.current) {
        console.error("Error: Webcam is not ready or reference is null.");
        return;
      }

      try {
        const apiKey = ""; // Replace with your actual API key
        if (!apiKey) {
          throw new Error("API key is not set.");
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const imageSrc = webcamRef.current.getScreenshot();
        console.log("Captured Image Source:", imageSrc);

        if (imageSrc) {
          const base64Data = imageSrc.split(',')[1];

          const imagePart = {
            inlineData: {
              data: base64Data,
              mimeType: "image/jpeg",
            },
          };
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const result = await model.generateContent(["Ask 10 short questions about this object that could stimulate a child's curiosity", imagePart]);

          const response = await result.response;
          const text = response.text();

          setOcrResult(text);
          setFeedback('waiting for new object');

        } else {
          console.error("Error: Captured image source is null.");
        }
      } catch (error) {
        console.error("Error during OCR:", error);
      }
    };

    const intervalId = setInterval(() => {
      handleOcr();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [toast, webcamReady]);

  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={colorMode} />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Heading as="h1" size="2xl" mb={4} color="primary.500">
              10 questions game
            </Heading>
            <Heading as="h2" size="lg" mb={8} color="primary.600">
              Instructions: Hold an object up to the camera
            </Heading>
            <Flex direction="row" justify="space-between" w="100%">
              <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
                <HStack spacing={4}>
                  <Box>
                    <Heading as="h3" size="md" mb={4} color="primary.700">
                      Live Video Feed
                    </Heading>
                    <Tooltip label="This is where the webcam feed will be displayed. Please ensure you have granted camera access.">
                      <Box borderColor="primary.400" borderRadius="md" p={2}>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          width={650}
                          height={650}
                          onUserMedia={handleWebcamReady}
                        />
                      </Box>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Text fontSize="lg" mt={4}>{ocrResult}</Text>
                    <Text color="secondary.500" fontSize="lg" mt={2}>{feedback}</Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
