# VANT: Virtual AI Navigator for Transactions

## Overview

VANT (Virtual AI Navigator for Transactions) is an AI-powered personal finance management application. It helps users navigate their financial transactions, budgets, and overall financial health using advanced artificial intelligence.

## Features

- AI-driven transaction categorization
- Personalized financial insights
- Budget tracking and management
- Investment portfolio analysis
- Bill and subscription management
- Goal setting and tracking
- Financial education center

## Tech Stack

- Frontend: Next.js with TypeScript
- Mobile: React Native
- Backend: AWS Serverless (Lambda, DynamoDB, Cognito, SageMaker)
- State Management: Redux Toolkit
- UI: Tailwind CSS
- Package Manager: pnpm

## Prerequisites

- Node.js (v14 or later)
- pnpm
- AWS account
- (Optional) React Native setup for mobile development

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-org/vant.git
   cd vant
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required values.

4. Run the development server:
   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vant/
├── apps/
│   ├── web/         # Next.js web application
│   └── mobile/      # React Native mobile app
├── packages/
│   ├── ui/          # Shared UI components
│   └── core/        # Shared business logic
├── docs/            # Documentation
└── README.md
```

## Testing

Run tests with:

```
pnpm test
```

## Deployment

Deployment is handled via AWS CodePipeline. Push to the `main` branch to trigger a deployment.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React Native](https://reactnative.dev/)
- [AWS](https://aws.amazon.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contact

For any inquiries, please open an issue in this repository.