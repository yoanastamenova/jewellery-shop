# 💎 Luxotica - Luxury Jewellery Shop

A modern, elegant e-commerce platform for luxury jewellery built with Next.js, TypeScript, and Stripe integration.


## 🌟 Features

- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **Product Showcase**: Beautiful carousel and product grid layouts
- **E-commerce Ready**: Full Stripe integration for secure payments
- **State Management**: Zustand for efficient cart management
- **Type Safety**: Built with TypeScript for robust code
- **Performance**: Optimized with Next.js 15 and Turbopack

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm/yarn/pnpm
- Stripe account for payment processing

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd jewellery-shop
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables
```bash
# Create a .env file in the root directory
cp .env.example .env
```

Add your Stripe keys:
```env
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
jewellery-shop/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── products/          # Products pages
│   ├── checkout/          # Checkout flow
│   └── success/           # Order success page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── carousel.tsx      # Product carousel
│   ├── navbar.tsx        # Navigation bar
│   └── product-*.tsx     # Product components
├── store/                # Zustand store
│   └── cart-store.ts    # Cart state management
├── lib/                  # Utility functions
├── public/              # Static assets
└── ...config files      # Various configuration files
```

## 🛠️ Built With

<div align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  </a>
  <a href="https://typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://stripe.com/">
    <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
  </a>
  <a href="https://zustand-demo.pmnd.rs/">
    <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  </a>
  <a href="https://www.radix-ui.com/">
    <img src="https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white" alt="Radix UI" />
  </a>
</div>

## 💳 Stripe Integration

This project uses Stripe for secure payment processing. The integration includes:

- Product catalog synchronization
- Shopping cart checkout
- Payment processing
- Order confirmation

### Testing Payments

Use Stripe's test card numbers:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Component styles use Tailwind utility classes
- UI components are built with Radix UI and styled with CVA

### Adding Products
Products are managed through your Stripe dashboard. Any products added there will automatically appear in the shop.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build       # Build for production
npm run start       # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repo-url)

### Environment Variables for Production

Remember to set these in your deployment platform:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Any other API keys or configuration

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Acknowledgments

- Next.js team for the amazing framework
- Stripe for payment infrastructure
- All contributors and supporters

---

**Luxotica** - Where luxury meets reality and perfection ✨
