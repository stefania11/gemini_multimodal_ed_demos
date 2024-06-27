# Gemini Multimodal Education Demos

## Introduction
This repository contains educational demo applications that utilize multimodal inputs to enhance learning experiences. The demos are built using React and Chakra UI, and they leverage the GoogleGenerativeAI API for generating content based on user inputs.

## Applications
The repository includes the following demo applications:
- **App 1**: Demo for math learning
- **App 2**: Demo for curiosity and questions about objects
- **App 3**: Demo for science sketches

## Setup Instructions
To set up the development environment and run the applications locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/stefania11/gemini_multimodal_ed_demos.git
   cd gemini_multimodal_ed_demos
   ```

2. **Install Dependencies**
   Ensure you have Node.js and npm installed. Then, install the project dependencies:
   ```bash
   npm install
   ```

3. **Run the Applications**
   Start the development server to run the applications:
   ```bash
   npm start
   ```

## Customization
To customize the applications for other learning scenarios, follow these steps:

1. **Modify the App Files**
   The app files (`app1.js`, `app2.js`, `app3.js`) contain the core logic and UI components. You can modify these files to change the behavior and appearance of the applications.

2. **Update API Keys**
   The applications use the GoogleGenerativeAI API for generating content. To use this API, you need to obtain your own API key from the Google Cloud Console. Replace the placeholder API key values in the app files with your actual API key.

## Obtaining API Keys
To obtain the API keys required for the applications, follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the GoogleGenerativeAI API for your project.
4. Create API credentials and obtain the API key.
5. Replace the placeholder API key values in the app files with your actual API key.

## Deployment
To deploy the applications, follow these steps:

1. **Build the Applications**
   Create a production build of the applications:
   ```bash
   npm run build
   ```

2. **Deploy to a Hosting Service**
   Deploy the production build to a hosting service of your choice, such as Vercel, Netlify, or GitHub Pages.

## Contribution Guidelines
We welcome contributions to improve the applications and documentation. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or support, please contact the repository owner.
