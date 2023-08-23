Build and customize your own ChatGPT-like web app using Next.js and the OpenAI API. The provided code serves as a foundation, and you can customize it to fit your specific use case.

## Prerequisites

1. Node.js and npm or yarn installed
1. An OpenAI API key

## Tutorial

1. Clone the repository and navigate to the project directory.
1. Install the required dependencies:

```
npm install
```
or
```
yarn
```

1. Create a `.env.local` file in the project root and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key
```

1. Start the development server:
```
npm run dev
```
or
```
yarn dev
```

1. Open your browser and navigate to http://localhost:3000 to access the application.
1. You can now interact with the chatbot using the input field at the bottom of the screen.


## Overview

The application uses the following components:

- Next.js for the frontend and backend server
- The OpenAI API for chat interactions
- Tailwind CSS for styling
- Customization